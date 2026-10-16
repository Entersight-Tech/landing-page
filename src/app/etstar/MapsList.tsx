"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./etstar.module.css";

type Row = { name: string; rating: string; count: number; reply: string };

const YOU_START = { rating: 3.9, count: 21 };
const YOU_END = { rating: 4.8, count: 128 };

/**
 * The hero's Maps listing. Once on screen, "your store" collects reviews
 * (3.9★ → 4.8★, 21 → 128) and then climbs to the top as the recommended pick.
 * Reduced motion: stays on the "before" state.
 */
export default function MapsList({ rows }: { rows: Row[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const tops = useRef(new Map<string, number>());
  const [p, setP] = useState(0); // 0 → 1 while the reviews come in
  const [won, setWon] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - t0) / 1600);
            setP(1 - Math.pow(1 - t, 3));
            if (t < 1) frame = requestAnimationFrame(tick);
            else timer = window.setTimeout(() => setWon(true), 350);
          };
          frame = requestAnimationFrame(tick);
        }, 900);
      },
      { threshold: 0.5 },
    );
    io.observe(list);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  // FLIP: remember where every row was, then slide them from there
  const measure = () => {
    listRef.current?.querySelectorAll<HTMLElement>("li[data-key]").forEach((li) => {
      tops.current.set(li.dataset.key!, li.getBoundingClientRect().top);
    });
  };
  useLayoutEffect(() => {
    if (!won) return;
    listRef.current?.querySelectorAll<HTMLElement>("li[data-key]").forEach((li) => {
      const before = tops.current.get(li.dataset.key!);
      if (before === undefined) return;
      const dy = before - li.getBoundingClientRect().top;
      if (dy) li.animate([{ transform: `translateY(${dy}px)` }, { transform: "none" }], { duration: 750, easing: "cubic-bezier(0.2, 0.75, 0.1, 1)" });
    });
  }, [won]);
  useEffect(() => {
    if (p === 1 && !won) measure();
  }, [p, won]);

  const rating = (YOU_START.rating + (YOU_END.rating - YOU_START.rating) * p).toFixed(1);
  const count = Math.round(YOU_START.count + (YOU_END.count - YOU_START.count) * p);
  const you = (
    <li key="you" data-key="you" className={`${styles.you} ${won ? styles.won : ""}`}>
      <span className={styles.listName}>Cửa hàng của bạn</span>
      <span className={styles.listMeta}>
        <span className={styles.rating}>
          {rating} <span aria-hidden="true">★</span>
        </span>{" "}
        · {count} review
      </span>
      <span className={styles.listReply}>
        {p > 0.6 ? "Phản hồi gần nhất: hôm nay" : "Ít thông tin để khách quyết định"}
      </span>
    </li>
  );
  const others = rows.map((s, i) => (
    <li key={s.name} data-key={s.name} className={i === 0 && !won ? styles.top : undefined}>
      <span className={styles.listName}>{s.name}</span>
      <span className={styles.listMeta}>
        <span className={styles.rating}>
          {s.rating} <span aria-hidden="true">★</span>
        </span>{" "}
        · {s.count} review
      </span>
      <span className={styles.listReply}>Phản hồi gần nhất: {s.reply}</span>
    </li>
  ));

  return (
    <ol ref={listRef} className={styles.list}>
      {won ? [you, ...others.slice(0, -1)] : [...others, you]}
    </ol>
  );
}
