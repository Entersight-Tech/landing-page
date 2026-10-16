"use client";

import { useEffect, useRef, useState } from "react";
import { demoChat, demoScores, personas, skills } from "./data";
import styles from "./lms.module.css";

const avg = Math.round(demoScores.reduce((a, b) => a + b, 0) / demoScores.length);

/**
 * Mock roleplay session that plays itself once it scrolls into view: the AI
 * customer "types", messages arrive in turn, then the score counts up and
 * the skill bars fill. `compact` (hero) shows three skills and no replay.
 * Server HTML holds the whole conversation; under reduced motion it stays so
 * (the stylesheet only hides it while html[data-lmsjs] is set).
 */
export default function Roleplay({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(demoChat.length);
  const [typing, setTyping] = useState<"bot" | "me" | null>(null);
  const [score, setScore] = useState(avg);
  const [run, setRun] = useState(0);
  const [playing, setPlaying] = useState(false);
  // false = the static server render (whole chat); CSS hides it until play
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timers: number[] = [];
    let raf = 0;
    const later = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const play = () => {
      setStarted(true);
      setPlaying(true);
      setShown(0);
      setScore(0);
      let t = 350;
      demoChat.forEach((m, i) => {
        later(t, () => setTyping(m.from));
        t += m.from === "bot" ? 1100 : 900;
        later(t, () => {
          setTyping(null);
          setShown(i + 1);
        });
        t += 450;
      });
      later(t + 150, () => {
        const t0 = performance.now();
        const tick = (now: number) => {
          const k = Math.min(1, (now - t0) / 1200);
          setScore(Math.round(avg * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(tick);
          else setPlaying(false);
        };
        raf = requestAnimationFrame(tick);
      });
    };

    // play once the card is on screen
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        play();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      timers = [];
      cancelAnimationFrame(raf);
    };
  }, [run]);

  const scored = !started || (shown === demoChat.length && !typing);
  const list = compact ? skills.slice(0, 3) : skills;

  return (
    <figure
      ref={ref}
      className={styles.rp}
      aria-label="Minh hoạ một buổi luyện chat với khách ảo"
      data-started={started ? "" : undefined}
      data-scored={scored ? "" : undefined}
    >
      <header className={styles.rpHead}>
        <span className={styles.rpAvatar} aria-hidden="true">
          KH
        </span>
        <span>
          <b>Khách ảo · Chị Lan</b>
          <small>Chủ cửa hàng, đang so sánh nhà cung cấp</small>
        </span>
        <span className={styles.rpLive}>{scored ? "Đã chấm" : "Đang luyện"}</span>
      </header>

      {!compact && (
        <ul className={styles.rpTags} aria-label="Chân dung & cảm xúc">
          {personas.map((p, i) => (
            <li key={p} className={i < 2 ? styles.on : undefined}>
              {p}
            </li>
          ))}
        </ul>
      )}

      <ol className={styles.rpChat} aria-live="off">
        {demoChat.map((m, i) => (
          // unsent messages keep their space (no layout jump); the next one
          // shows a typing bubble in its slot
          <li
            key={i}
            className={m.from === "bot" ? styles.bot : styles.me}
            data-on={i < shown ? "" : undefined}
            data-typing={typing && i === shown ? "" : undefined}
          >
            {m.text}
            {typing && i === shown && (
              <span className={styles.typing} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className={styles.rpScore}>
        <p className={styles.rpTotal}>
          <span>Điểm buổi luyện</span>
          <b>{score}</b>
          <small>/100</small>
        </p>
        <ul className={styles.rpBars}>
          {list.map((s, i) => (
            <li key={s} style={{ "--v": demoScores[i], "--b": i } as React.CSSProperties}>
              <span>{s}</span>
              <i aria-hidden="true" />
              <b>{demoScores[i]}</b>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className={styles.rpNote}>
        <span>Minh hoạ giao diện · số liệu mẫu</span>
        {!compact && (
          <button type="button" className={styles.replay} onClick={() => setRun((r) => r + 1)} disabled={playing}>
            ↻ Luyện lại
          </button>
        )}
      </figcaption>
    </figure>
  );
}
