"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Asterisk from "./Asterisk";

const SERVICES = [
  "AI Operation",
  "Data Marketing",
  "Creative",
  "Generative AI",
  "Dashboard & Analytics",
];

export default function Hero() {
  const dotRef = useRef<HTMLSpanElement>(null);

  // the lime dot drifts toward the pointer, like SVZ's red orb
  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let x = 0, y = 0, tx = 0, ty = 0, frame = 0;
    const tick = () => {
      x += (tx - x) * 0.06;
      y += (ty - y) * 0.06;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX - window.innerWidth / 2) * 0.35;
      ty = (e.clientY - window.innerHeight / 2) * 0.35;
      if (!frame) frame = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={styles.hero} id="top">
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.shapes} aria-hidden="true">
        <Asterisk className={styles.astA} />
        <Asterisk className={styles.astB} />
        <span className={styles.bar} />
      </div>

      <div className={styles.center}>
        <p className={`label ${styles.kicker}`}>Entersight — Marketing × AI</p>

        <h1 className={`display ${styles.title}`}>
          <span className={styles.line}>
            <span>
              <i className="mini">số hoá</i>{"\u00a0"}Quy trình marketing
            </span>
          </span>{" "}
          <span className={styles.line}>
            <span>
              <span className="lime">đúng đích</span> <i className="mini">cho SMEs</i>
            </span>
          </span>
          <span ref={dotRef} className={styles.dot} aria-hidden="true" />
        </h1>

        <ul className={styles.services} aria-label="Năng lực">
          {SERVICES.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>

      <div className={styles.foot}>
        <p className={styles.sub}>
          Entersight kiến tạo hệ sinh thái tiếp thị số toàn diện, giúp SMEs tái
          cấu trúc vận hành, làm chủ mọi điểm chạm khách hàng và xây dựng nền
          tảng tăng trưởng bền vững.
        </p>
        <span className={`label ${styles.scroll}`}>Cuộn để khám phá</span>
        <div className={styles.actions}>
          <a href="#case-studies" className="btn" data-scramble>
            Dự án thực tế
          </a>
          <a href="#contact" className="btn btn--solid" data-scramble>
            Tư vấn triển khai
          </a>
        </div>
      </div>
    </section>
  );
}
