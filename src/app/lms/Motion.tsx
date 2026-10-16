"use client";

import { useEffect } from "react";

/**
 * /lms motion, all off under reduced motion:
 * - [data-reveal] blocks get [data-in] as they scroll in (headings' words
 *   then rise out of their masks, see Display.tsx) and their [data-count]
 *   numbers count up;
 * - --scroll on the page (0–1) drives the header progress line;
 * - [data-spin] shapes turn with scroll;
 * - [data-track] lists get --p (0–1) as they pass through the viewport and
 *   mark each child [data-on] once the line has reached it;
 * - [data-dot] follows the pointer inside its [data-hero] (fine pointers).
 */
export default function Motion() {
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
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - vh();
      // phone CTA: once past the hero, until the form itself is on screen
      const form = root.querySelector<HTMLElement>("#contact");
      root.toggleAttribute("data-cta", scrollY > vh() * 0.8 && (form?.getBoundingClientRect().top ?? 0) > vh() * 0.6);
      root.style.setProperty("--scroll", String(max > 0 ? Math.min(1, scrollY / max) : 0));
      spins.forEach((el) => {
        el.style.transform = `rotate(${(scrollY * 0.04).toFixed(2)}deg)`;
      });
      tracks.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (vh() * 0.85 - r.top) / (r.height + vh() * 0.25)));
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
