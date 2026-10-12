"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Page-wide motion system (SVZ-style):
 *  - Lenis inertia scrolling, with in-page anchors honouring scroll-margin-top
 *  - `data-split` headings: every word rises out of a mask when the heading's
 *    `.reveal` gets `in` (ScrollReveal)
 *  - curtain: the sticky hero dims as the next panels slide over it
 *  - paged wheel on desktop: one gesture = one screen (section top, or one
 *    viewport step inside tall scroll-driven sections)
 * Everything is skipped under prefers-reduced-motion.
 */
function splitWords(root: HTMLElement) {
  if (root.dataset.splitDone) return;
  root.dataset.splitDone = "";
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const texts: Text[] = [];
  while (walker.nextNode()) texts.push(walker.currentNode as Text);

  let i = 0;
  texts.forEach((node) => {
    const parts = node.data.split(/(\s+)/);
    if (parts.every((p) => !p.trim())) return;
    const frag = document.createDocumentFragment();
    parts.forEach((part) => {
      if (!part) return;
      if (!part.trim()) {
        frag.append(part);
        return;
      }
      const mask = document.createElement("span");
      mask.className = "sw";
      const word = document.createElement("span");
      word.className = "swi";
      word.style.setProperty("--i", String(i++));
      word.textContent = part;
      mask.append(word);
      frag.append(mask);
    });
    node.replaceWith(frag);
  });
}

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll<HTMLElement>("[data-split]").forEach(splitWords);

    // paged wheel: on desktop one wheel gesture moves exactly one screen —
    // to the next section, or one viewport further inside a tall section
    const paged = window.matchMedia("(pointer: fine) and (min-width: 900px)");
    let busy = false;
    let armed = true;
    let lastWheel = 0;

    const stops = () => {
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const out = [0, max];
      document.querySelectorAll<HTMLElement>("main section, [data-page], footer").forEach((el) => {
        const sticky = getComputedStyle(el).position === "sticky";
        const box = (sticky ? el.parentElement! : el).getBoundingClientRect();
        const top = box.top + window.scrollY;
        const h = el.offsetHeight;
        out.push(top);
        if (h > vh * 1.12) {
          for (let y = top + vh; y < top + h - vh - 4; y += vh) out.push(y);
          out.push(top + h - vh);
        }
      });
      return out
        .map((y) => Math.round(Math.min(max, Math.max(0, y))))
        .sort((a, b) => a - b)
        .filter((y, i, a) => i === 0 || y - a[i - 1] > 8);
    };

    const page = (dir: number) => {
      const y = window.scrollY;
      const list = stops();
      const target = dir > 0 ? list.find((s) => s > y + 4) : list.reverse().find((s) => s < y - 4);
      if (target === undefined) return;
      busy = true;
      lenis.scrollTo(target, {
        duration: 1.05,
        easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
        lock: true,
        force: true,
        onComplete: () => {
          busy = false;
        },
      });
    };

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      virtualScroll: ({ deltaX, deltaY, event }) => {
        if (!(event instanceof WheelEvent) || !paged.matches || event.ctrlKey) return true;
        if (document.documentElement.hasAttribute("data-menu")) return true;
        // nested scrollers (the case viewer) and sideways swipes stay native
        const path = event.composedPath();
        if (path.some((n) => n instanceof HTMLElement && n.hasAttribute("data-lenis-prevent"))) return true;
        if (Math.abs(deltaX) > Math.abs(deltaY)) return true;

        if (event.cancelable) event.preventDefault();
        const now = performance.now();
        // a pause between wheel events starts a new gesture; trackpad inertia
        // keeps firing without one, so it can't skip a second screen
        if (now - lastWheel > 220) armed = true;
        lastWheel = now;
        if (busy || !armed || Math.abs(deltaY) < 2) return false;
        armed = false;
        page(Math.sign(deltaY));
        return false;
      },
    });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1);
      if (!a || !id) return;
      const target = id === "top" ? 0 : document.getElementById(id);
      if (target === null) return;
      e.preventDefault();
      const offset =
        typeof target === "number"
          ? 0
          : -(parseFloat(getComputedStyle(target).scrollMarginTop) || 0);
      lenis.scrollTo(target, { offset, duration: 1.4 });
      history.replaceState(null, "", `#${id}`);
    };
    document.addEventListener("click", onClick);

    // curtain: pin a tall hero by its bottom edge, then shade it while covered
    const hero = document.getElementById("top");
    let heroH = 0;
    const layout = () => {
      if (!hero) return;
      heroH = hero.offsetHeight;
      hero.style.setProperty("--hero-top", `${Math.min(0, window.innerHeight - heroH)}px`);
      cover();
    };
    const cover = () => {
      if (!hero) return;
      const vh = window.innerHeight;
      const start = Math.max(0, heroH - vh);
      const t = (window.scrollY - start) / Math.min(vh, heroH);
      hero.style.setProperty("--cover", Math.min(1, Math.max(0, t)).toFixed(3));
    };
    layout();
    window.addEventListener("resize", layout);
    lenis.on("scroll", cover);

    return () => {
      window.removeEventListener("resize", layout);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
