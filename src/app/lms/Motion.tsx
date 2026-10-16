"use client";

import { useEffect } from "react";

/**
 * /lms motion: reveal [data-reveal] blocks on scroll by setting [data-in].
 * Blocks already on screen at load stay visible with no transition. Off
 * under reduced motion (the CSS shows everything without [data-motion]).
 */
export default function Motion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-lms]");
    if (!root || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const below = (el: HTMLElement) => el.getBoundingClientRect().top > window.innerHeight * 0.92;
    reveals.filter((el) => !below(el)).forEach((el) => el.setAttribute("data-in", ""));
    root.setAttribute("data-motion", "");

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.setAttribute("data-in", "");
          io.unobserve(e.target);
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    reveals.filter(below).forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
