"use client";

import { Fragment, useEffect, useRef } from "react";
import styles from "./Distill.module.css";

// The manifesto is built from the Solutions taglines; scrolling "distills" it
// down to the five product names, which then link into the Solutions carousel.
type Part = string | { key: number };

const KEYWORDS = [
  "AI Operation",
  "Data Marketing",
  "Creative",
  "Generative AI",
  "Dashboard & Analytics",
];

const MANIFESTO: Part[] = [
  "Một đối tác, năm năng lực.",
  { key: 0 },
  "tự động hóa quy trình,",
  { key: 1 },
  "tiếp thị bằng dữ liệu thực,",
  { key: 2 },
  "chạm điểm rơi cảm xúc,",
  { key: 3 },
  "sản xuất nội dung quy mô lớn, và",
  { key: 4 },
  "giúp bạn ra quyết định theo thời gian thực.",
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

export default function Distill() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.static = "";
      return;
    }

    const words = Array.from(stage.querySelectorAll<HTMLElement>("[data-word]"));
    const keys = Array.from(stage.querySelectorAll<HTMLElement>("[data-key]"));
    const slots = Array.from(stage.querySelectorAll<HTMLElement>("[data-slot]"));
    let deltas: { x: number; y: number; s: number }[] = [];

    // FLIP: where each keyword sits in the paragraph vs. its slot in the list
    const measure = () => {
      keys.forEach((k) => (k.style.transform = ""));
      slots.forEach((s) => {
        s.style.fontSize = "";
        const room = s.parentElement!.clientWidth - s.nextElementSibling!.clientWidth - 16;
        if (s.offsetWidth > room) {
          const fs = parseFloat(getComputedStyle(s).fontSize);
          s.style.fontSize = `${Math.floor(fs * (room / s.offsetWidth))}px`;
        }
      });
      deltas = keys.map((k, i) => {
        const a = k.getBoundingClientRect();
        const b = slots[i].getBoundingClientRect();
        return { x: b.left - a.left, y: b.top - a.top, s: b.height / a.height };
      });
      update();
    };

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = section.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? clamp01(-r.top / span) : 1;

      // 1) words light up one by one as you read (0 → 0.32)
      const lit = clamp01(p / 0.32) * words.length;
      // 2) filler fades, keywords travel into the list (0.42 → 0.78)
      const t = ease(clamp01((p - 0.42) / 0.36));

      words.forEach((w, i) => {
        const on = clamp01(lit - i);
        w.style.opacity = String((0.14 + 0.86 * on) * (1 - t));
      });
      keys.forEach((k, i) => {
        const d = deltas[i];
        if (!d) return;
        const s = 1 + (d.s - 1) * t;
        k.style.transform = `translate3d(${d.x * t}px, ${d.y * t}px, 0) scale(${s})`;
      });
      const done = clamp01((p - 0.76) / 0.12);
      section.style.setProperty("--done", String(done));
      section.style.setProperty("--p", p.toFixed(3));
      section.toggleAttribute("data-done", done > 0.9);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const pick = (i: number) => {
    window.dispatchEvent(new CustomEvent("ets:solution", { detail: i }));
  };

  let wordIndex = 0;

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="distill-title">
      <div className={styles.sticky}>
        <div className={`container ${styles.stage}`} ref={stageRef}>
          <span className={styles.eyebrow} id="distill-title" data-scramble="in">
            <b>[02]</b> Công nghệ <i>×</i> Sáng tạo
          </span>

          <p className={styles.manifesto}>
            {MANIFESTO.map((part, i) =>
              typeof part === "string" ? (
                <Fragment key={i}>
                  {part.split(" ").map((w, j) => (
                    <Fragment key={j}>
                      <span className={styles.word} data-word={wordIndex++}>
                        {w}
                      </span>{" "}
                    </Fragment>
                  ))}
                </Fragment>
              ) : (
                <Fragment key={i}>
                  <span className={styles.key} data-key={part.key}>
                    {KEYWORDS[part.key]}
                  </span>{" "}
                </Fragment>
              )
            )}
          </p>

          {/* the distilled list — keywords fly into these slots */}
          <ol className={styles.list}>
            {KEYWORDS.map((k, i) => (
              <li key={k} className={styles.row} style={{ "--i": i } as React.CSSProperties}>
                <span className={styles.idx}>0{i + 1}</span>
                <a href="#solutions" className={styles.link} onClick={() => pick(i)}>
                  <span className={styles.slot} data-slot={i}>
                    {k}
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
        <span className={styles.hint} aria-hidden="true">
          Cuộn để xem 5 giải pháp
        </span>
      </div>
    </section>
  );
}
