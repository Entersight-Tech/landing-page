"use client";

import { useEffect } from "react";

/**
 * /lms motion, all off under reduced motion (except the phone CTA):
 * - [data-reveal] blocks get [data-in] as they scroll in (headings' words
 *   then rise out of their masks, see Display.tsx) and their [data-count]
 *   numbers count up;
 * - the header progress line ([data-progress]) scales with page scroll;
 * - [data-spin] shapes turn with scroll;
 * - [data-track] lists get --p (0–1) as they pass through the viewport and
 *   mark each child [data-on] once the line has reached it;
 * - [data-dot] follows the pointer inside its [data-hero] (fine pointers).
 */
export default function Motion() {
  // phone CTA: once past the hero, until the form itself is on screen. Runs
  // under reduced motion too (it's navigation, not decoration).
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-lms]");
    const form = root?.querySelector<HTMLElement>("#contact");
    if (!root) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const formTop = form?.getBoundingClientRect().top ?? 0;
      root.toggleAttribute("data-cta", scrollY > vh * 0.8 && formTop > vh * 0.6);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-lms]");
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // the inline script in page.tsx sets this before paint, but it doesn't
    // run when the page is reached by client-side navigation
    document.documentElement.setAttribute("data-lmsjs", "");
    const vh = () => window.innerHeight;

    // [data-count] numbers count up from 0 when their block is revealed
    const countUp = (el: HTMLElement) => {
      const end = Number(el.textContent);
      if (!Number.isFinite(end) || end < 2) return;
      const t0 = performance.now();
      const tick = (now: number) => {
        const k = Math.min(1, (now - t0) / 1100);
        el.textContent = String(Math.round(end * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const reveal = (el: Element) => {
      el.setAttribute("data-in", "");
      el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
    };

    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = (el: HTMLElement) => el.getBoundingClientRect().top > vh() * 0.92;
    reveals.filter((el) => !below(el)).forEach(reveal);
    root.setAttribute("data-motion", "");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          reveal(e.target);
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    reveals.filter(below).forEach((el) => io.observe(el));

    const spins = Array.from(root.querySelectorAll<HTMLElement>("[data-spin]"));
    const tracks = Array.from(root.querySelectorAll<HTMLElement>("[data-track]"));
    const progress = root.querySelector<HTMLElement>("[data-progress]");
    let frame = 0;
    // all layout reads first, then all writes: no forced layout per frame
    const update = () => {
      frame = 0;
      const h = vh();
      const max = document.documentElement.scrollHeight - h;
      const y = scrollY;
      const trackState = tracks.map((el) => {
        const r = el.getBoundingClientRect();
        return Math.max(0, Math.min(1, (h * 0.85 - r.top) / (r.height + h * 0.25)));
      });

      // transforms written on the element itself, not a variable on the page
      if (progress) progress.style.transform = `scaleX(${(max > 0 ? Math.min(1, y / max) : 0).toFixed(4)})`;
      spins.forEach((el) => {
        el.style.transform = `rotate(${(y * 0.04).toFixed(2)}deg)`;
      });
      tracks.forEach((el, k) => {
        const p = trackState[k];
        el.style.setProperty("--p", p.toFixed(3));
        const items = Array.from(el.children) as HTMLElement[];
        items.forEach((li, i) => li.toggleAttribute("data-on", p >= (i + 0.35) / items.length));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    root.setAttribute("data-tracking", "");
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // lime dot trailing the pointer over the hero
    const hero = root.querySelector<HTMLElement>("[data-hero]");
    const dot = hero?.querySelector<HTMLElement>("[data-dot]");
    let dotFrame = 0;
    let x = 0;
    let y = 0;
    let tx = 0;
    let ty = 0;
    const follow = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      if (dot) dot.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      dotFrame = Math.abs(tx - x) + Math.abs(ty - y) > 0.3 ? requestAnimationFrame(follow) : 0;
    };
    const onMove = (e: PointerEvent) => {
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      hero.setAttribute("data-pointer", "");
      if (!dotFrame) dotFrame = requestAnimationFrame(follow);
    };
    const onLeave = () => hero?.removeAttribute("data-pointer");
    const fine = matchMedia("(pointer: fine)").matches;
    if (fine && hero && dot) {
      hero.addEventListener("pointermove", onMove);
      hero.addEventListener("pointerleave", onLeave);
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(dotFrame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      hero?.removeEventListener("pointermove", onMove);
      hero?.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
