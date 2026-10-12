"use client";

import { useEffect } from "react";

/**
 * "Decoding" text effect, the tech half of the brand:
 *  - `data-scramble`      → re-decodes on hover / keyboard focus
 *  - `data-scramble="in"` → decodes once when scrolled into view
 * Only text nodes are touched and the original text is always restored.
 */
const GLYPHS = "ABCDEFGHKMNPRSTVXZ0123456789#%&*+=/<>";
const DURATION = 520;

function scramble(el: HTMLElement) {
  if (el.dataset.scrambling) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    const n = walker.currentNode as Text;
    if (n.data.trim()) nodes.push(n);
  }
  if (!nodes.length) return;

  const originals = nodes.map((n) => n.data);
  const total = originals.reduce((sum, s) => sum + s.length, 0);
  // hold the box steady so neighbours don't jitter while glyphs swap
  const prevWidth = el.style.width;
  if (getComputedStyle(el).display !== "inline") el.style.width = `${el.offsetWidth}px`;
  el.dataset.scrambling = "";

  const start = performance.now();
  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / DURATION);
    const settled = Math.floor(progress * total);
    let offset = 0;
    nodes.forEach((n, i) => {
      const src = originals[i];
      let out = "";
      for (let c = 0; c < src.length; c++) {
        const ch = src[c];
        out +=
          ch === " " || offset + c < settled
            ? ch
            : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      offset += src.length;
      n.data = out;
    });
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      nodes.forEach((n, i) => (n.data = originals[i]));
      el.style.width = prevWidth;
      delete el.dataset.scrambling;
    }
  };
  requestAnimationFrame(tick);
}

export default function Scramble() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onEnter = (e: Event) => {
      const el = (e.target as Element).closest<HTMLElement>("[data-scramble]");
      if (!el || el.dataset.scramble === "in") return;
      // ignore pointer moves between the element's own children
      const from = (e as PointerEvent | FocusEvent).relatedTarget as Node | null;
      if (from && el.contains(from)) return;
      scramble(el);
    };
    document.addEventListener("pointerover", onEnter);
    document.addEventListener("focusin", onEnter);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          scramble(entry.target as HTMLElement);
          io.unobserve(entry.target);
        }),
      { threshold: 0.6 }
    );
    document
      .querySelectorAll<HTMLElement>('[data-scramble="in"]')
      .forEach((el) => io.observe(el));

    return () => {
      document.removeEventListener("pointerover", onEnter);
      document.removeEventListener("focusin", onEnter);
      io.disconnect();
    };
  }, []);

  return null;
}
