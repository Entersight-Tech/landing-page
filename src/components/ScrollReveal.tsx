"use client";

import { useEffect } from "react";

/**
 * Adds the `in` class to every `.reveal` element as it scrolls into view,
 * driving the fade-up animations defined in globals.css. Anything already
 * above the bottom of the screen is revealed too, so a jump (an anchor link,
 * a restored scroll position) never leaves blocks it skipped over hidden.
 */
export default function ScrollReveal() {
  useEffect(() => {
    let pending = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window) || pending.length === 0) {
      pending.forEach((el) => el.classList.add("in"));
      return;
    }

    const show = (el: Element) => {
      el.classList.add("in");
      io.unobserve(el);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && show(entry.target)),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    pending.forEach((el) => io.observe(el));

    // reveal whatever the viewport has already passed
    let frame = 0;
    const sweep = () => {
      frame = 0;
      const bottom = window.innerHeight;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top >= bottom) return true;
        show(el);
        return false;
      });
      if (!pending.length) window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(sweep);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    sweep();

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
