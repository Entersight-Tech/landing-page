"use client";

import { useEffect, useRef } from "react";
import styles from "./Results.module.css";
import Asterisk from "./Asterisk";

const stats = [
  { value: "50%", label: "Giảm chi phí vận hành" },
  { value: "3x", label: "Tốc độ xử lý công việc" },
  { value: "24/7", label: "Hệ thống tự động thực thi" },
  { value: "20+", label: "Dự án vận hành thành công" },
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/**
 * SVZ "clients funded": a pinned headline while the stat cards are dealt
 * onto the table one by one as you scroll.
 */
export default function Results() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.static = "";
      return;
    }
    const cards = Array.from(section.querySelectorAll<HTMLElement>("[data-card]"));

    // final resting spot of each card: a fan on desktop, 2x2 on phones
    const layout = () => {
      const w = window.innerWidth;
      const narrow = w < 760;
      cards.forEach((c, i) => {
        const cw = c.offsetWidth;
        const ch = c.offsetHeight;
        const x = narrow ? (i % 2 === 0 ? -0.53 : 0.53) * cw : (i - 1.5) * Math.min(cw * 0.92, w * 0.2);
        const y = narrow ? (Math.floor(i / 2) - 0.5) * (ch + 12) + ch * 0.55 : ch * 0.38 + Math.abs(i - 1.5) * 18;
        const r = narrow ? (i % 2 === 0 ? -3 : 3) : (i - 1.5) * 5;
        c.style.setProperty("--x", `${x}px`);
        c.style.setProperty("--y", `${y}px`);
        c.style.setProperty("--r", `${r}deg`);
      });
      update();
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = section.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? clamp01(-r.top / span) : 1;
      cards.forEach((c, i) => {
        c.style.setProperty("--t", clamp01((p - 0.06 - i * 0.14) / 0.3).toFixed(3));
      });
      section.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    layout();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", layout);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", layout);
    };
  }, []);

  return (
    <section ref={ref} className={styles.section} id="results" aria-labelledby="results-title">
      <div className={styles.sticky}>
        <div className={styles.head}>
          <p className="label" data-scramble="in">
            <b>07</b> — Kết quả
          </p>
          <h2 id="results-title" className={`display ${styles.title}`}>
            <i className="mini">vận hành</i>{"\u00a0"}20+ dự án <i className="mini">với</i>{"\u00a0"}
            <span className="lime">kết quả đo được</span>
          </h2>
        </div>

        <ul className={styles.table}>
          {stats.map((s) => (
            <li key={s.label} className={styles.card} data-card>
              <Asterisk className={styles.mark} />
              <strong className={styles.value}>{s.value}</strong>
              <span className={styles.cardLabel}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
