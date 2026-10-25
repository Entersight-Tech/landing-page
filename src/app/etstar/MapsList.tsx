"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./etstar.module.css";

type Row = { name: string; rating: string; count: number; reply: string };

const YOU_START = { rating: 3.9, count: 21 };
const YOU_END = { rating: 4.8, count: 128 };

// FLIP: where every row sits, relative to the list so page scroll doesn't
// count; rows then slide from these spots to their new ones
function measure(list: HTMLOListElement | null, tops: Map<string, number>) {
  if (!list) return;
  const top = list.getBoundingClientRect().top;
  list.querySelectorAll<HTMLElement>("li[data-key]").forEach((li) => {
    tops.set(li.dataset.key!, li.getBoundingClientRect().top - top);
  });
}

/**
 * The hero's Maps listing. Once on screen, "your store" collects reviews
 * (3.9★ → 4.8★, 21 → 128) and then climbs to the top as the recommended pick.
 * Reduced motion: shows the end state straight away, without the movement.
 */
export default function MapsList({ rows }: { rows: Row[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const tops = useRef(new Map<string, number>());
  const [p, setP] = useState(0); // 0 → 1 while the reviews come in
  const [won, setWon] = useState(false);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // jump to the end state; no rows were measured, so the FLIP moves nothing
      frame = requestAnimationFrame(() => {
        setP(1);
        setWon(true);
      });
      return () => cancelAnimationFrame(frame);
    }
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const t0 = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - t0) / 1600);
            // quantised so React skips frames where nothing shown changes
            setP(Math.round((1 - Math.pow(1 - t, 3)) * 1000) / 1000);
            if (t < 1) frame = requestAnimationFrame(tick);
            else
              timer = window.setTimeout(() => {
                // measure right before the reorder, so a scroll in between
                // can't skew the FLIP
                measure(list, tops.current);
                setWon(true);
              }, 350);
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

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!won || !list) return;
    const top = list.getBoundingClientRect().top;
    list.querySelectorAll<HTMLElement>("li[data-key]").forEach((li) => {
      const before = tops.current.get(li.dataset.key!);
      if (before === undefined) return;
      const dy = before - (li.getBoundingClientRect().top - top);
      // rows swap places on screen: ease-in-out, not ease-out
      if (dy) li.animate([{ transform: `translateY(${dy}px)` }, { transform: "none" }], { duration: 600, easing: "cubic-bezier(0.77, 0, 0.175, 1)" });
    });
  }, [won]);

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
