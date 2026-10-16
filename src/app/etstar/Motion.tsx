"use client";

import { useEffect } from "react";

/**
 * ETStar page motion: reveal on scroll ([data-reveal] → [data-in]), count-up
 * for [data-count] figures, and a horizontal drift on the billboard words
 * ([data-drift]) tied to scroll. Everything off under reduced motion.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-ets]");
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const vh = () => window.innerHeight;

    // already on screen at load: leave visible, no transition
    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const pending = reveals.filter((el) => el.getBoundingClientRect().top > vh() * 0.92);
    const counts = new WeakSet<HTMLElement>();
    const countUp = (el: HTMLElement) => {
      if (counts.has(el)) return;
      counts.add(el);
      const text = el.firstChild;
      const m = text?.nodeType === 3 ? /(\d[\d.]*)/.exec(text.textContent ?? "") : null;
      if (!text || !m) return;
      const [before, after] = (text.textContent ?? "").split(m[1]);
      const dotted = m[1].includes(".");
      const end = Number(m[1].replace(/\./g, ""));
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - t0) / 1300);
        const v = Math.round(end * (1 - Math.pow(1 - t, 3)));
        text.textContent = before + (dotted ? v.toLocaleString("vi-VN") : String(v)) + after;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    reveals
      .filter((el) => !pending.includes(el))
      .forEach((el) => {
        el.setAttribute("data-in", "");
        if (el.hasAttribute("data-count")) countUp(el);
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
      });
    root.setAttribute("data-motion", "");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.setAttribute("data-in", "");
          if (el.hasAttribute("data-count")) countUp(el);
          el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
          io.unobserve(el);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    pending.forEach((el) => io.observe(el));

    // billboard drift: alternate directions, ±6% of the word's width
    const drifts = Array.from(root.querySelectorAll<HTMLElement>("[data-drift]"));
    let frame = 0;
    const drift = () => {
      frame = 0;
      drifts.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh()) return;
        const p = (vh() - r.top) / (vh() + r.height);
        el.style.transform = `translate3d(${((0.5 - p) * 12 * (i % 2 ? -1 : 1)).toFixed(2)}%, 0, 0)`;
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(drift);
    };
    drift();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
