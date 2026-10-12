"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Problem.module.css";

const items = [
  {
    title: "Chi phí leo thang",
    desc: "Ngân sách marketing bị bào mòn bởi những hoạt động kém hiệu quả và quy trình vận hành lỗi thời.",
  },
  {
    title: "Nhân sự quá tải",
    desc: (
      <>
        Nhân viên tiêu tốn <strong>80% thời gian</strong> cho các công việc lặp
        đi lặp lại, không tạo ra giá trị thật.
      </>
    ),
  },
  {
    title: "Dữ liệu rời rạc",
    desc: "Quyết định dựa trên cảm tính khiến doanh nghiệp mất dấu khách hàng ngay tại những điểm chạm quan trọng.",
  },
  {
    title: "Quy trình cồng kềnh",
    desc: 'Thông tin nghẽn lại giữa các team, thao tác thủ công trở thành "nút thắt" gây sai sót và chậm trễ.',
  },
];

const WORD = Array.from("NGÂN SÁCH".normalize("NFC"));
// letter indexes that evaporate, two per pain point
const DRAIN = [2, 7, 0, 5, 3, 8, 1, 6];

/**
 * The budget evaporates: a pinned stage where every scroll step reveals one
 * pain point and burns two more letters off the giant "NGÂN SÁCH".
 */
export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.static = "";
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = section.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -r.top / span)) : 1;
      setStep(Math.round(p * items.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const shown = step;
  const gone = new Set(DRAIN.slice(0, step * 2));

  return (
    <section
      ref={ref}
      className={styles.section}
      id="problem"
      aria-labelledby="problem-title"
    >
      <div className={styles.stage}>
        <div className={`container ${styles.top}`}>
          <span className="label" data-scramble="in">
            <b>01</b> — Thách thức của SMEs
          </span>
          <span className={styles.counter} aria-hidden="true">
            <b>{String(shown).padStart(2, "0")}</b> / 04 <i>điểm rò rỉ</i>
          </span>
        </div>

        <h2
          id="problem-title"
          className={styles.title}
          aria-label="Ngân sách marketing của doanh nghiệp đang bốc hơi?"
        >
          <span className={styles.word} aria-hidden="true">
            {WORD.map((ch, i) =>
              ch === " " ? (
                <span key={i} className={styles.gap} />
              ) : (
                <span key={i} className={styles.ch} data-c={ch} data-gone={gone.has(i) || undefined}>
                  {ch}
                </span>
              ),
            )}
          </span>
          <span className={`container ${styles.line}`} aria-hidden="true">
            marketing <i className="mini">của doanh nghiệp đang</i>{" "}
            <span className="lime">bốc hơi?</span>
          </span>
        </h2>

        <div className={`container ${styles.bottom}`}>
          <ol className={styles.list} data-step={shown}>
            {items.map((it, i) => (
              <li
                key={it.title}
                className={styles.item}
                data-state={i + 1 === shown ? "on" : i + 1 < shown ? "past" : undefined}
              >
                <span className={styles.idx}>
                  <i className={styles.tick} />
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.itemTitle}>{it.title}</h3>
                <p className={styles.desc}>{it.desc}</p>
              </li>
            ))}
            <li className={styles.hint} aria-hidden="true">
              Cuộn để xem ngân sách rò rỉ ở đâu ↓
            </li>
          </ol>

          <div className={styles.cta}>
            <p>
              Tiếp thị thông minh <span>—</span> Vận hành tinh gọn
            </p>
            <a href="#contact" className="btn btn--solid" data-scramble>
              Bắt đầu ngay với Entersight
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
