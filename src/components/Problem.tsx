"use client";

import { useState } from "react";
import styles from "./Problem.module.css";

const items = [
  {
    num: "01",
    title: "Chi phí leo thang",
    desc: "Ngân sách marketing bị bào mòn bởi những hoạt động kém hiệu quả và quy trình vận hành lỗi thời.",
    icon: "/figma/problem-icon-1.png",
  },
  {
    num: "02",
    title: "Nhân sự quá tải",
    desc: (
      <>
        Nhân viên tiêu tốn <strong>80% thời gian</strong> cho các công việc lặp
        đi lặp lại, không tạo ra giá trị thật.
      </>
    ),
    icon: "/figma/problem-icon-2.png",
  },
  {
    num: "03",
    title: "Dữ liệu rời rạc",
    desc: "Quyết định dựa trên cảm tính khiến doanh nghiệp mất dấu khách hàng ngay tại những điểm chạm quan trọng.",
    icon: "/figma/problem-icon-3.png",
  },
  {
    num: "04",
    title: "Quy trình cồng kềnh",
    desc: 'Quy trình rời rạc khiến thông tin nghẽn lại giữa các team, thao tác thủ công trở thành "nút thắt" gây sai sót và chậm trễ.',
    icon: "/figma/problem-icon-4.png",
  },
];

const EVAPORATE = Array.from("BỐC HƠI".normalize("NFC"));

export default function Problem() {
  // which pain point is hovered/focused — lights up its leak on the budget bar
  const [hot, setHot] = useState<number | null>(null);

  return (
    <section className={styles.section} id="problem">
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.lead}>
          <span className={styles.eyebrow} data-scramble="in">Thách thức của SMEs</span>
          <h2 className={styles.title}>
            Ngân sách marketing của doanh nghiệp đang{" "}
            <span className={styles.vapor} aria-label="bốc hơi">
              <span className={styles.steam} aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              {EVAPORATE.map((ch, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className={ch === " " ? styles.space : styles.char}
                  style={{ animationDelay: `${i * 0.18}s` }}
                >
                  {ch}
                </span>
              ))}
              <span aria-hidden="true" className={styles.q}>
                ?
              </span>
            </span>
          </h2>

          {/* budget bar drains once in view; each leak maps to a pain point */}
          <div className={`${styles.budget} reveal`} aria-hidden="true">
            <div className={styles.budgetHead}>
              <span>Ngân sách marketing</span>
              <span className={styles.budgetLoss}>đang rò rỉ</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.fill} />
              {items.map((it, i) => (
                <span
                  key={it.num}
                  className={styles.leak}
                  data-hot={hot === i || undefined}
                  style={{ left: `${40 + i * 15}%` }}
                >
                  {it.num}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ol className={styles.list}>
          {items.map((it, i) => (
            <li
              key={it.num}
              // hover state lives in data-hot: changing className would wipe
              // the `in` class ScrollReveal adds to .reveal elements
              className={`${styles.item} reveal`}
              data-hot={hot === i || undefined}
              style={{ transitionDelay: `${i * 0.08}s` }}
              tabIndex={0}
              onMouseEnter={() => setHot(i)}
              onMouseLeave={() => setHot(null)}
              onFocus={() => setHot(i)}
              onBlur={() => setHot(null)}
            >
              <span className={styles.num}>{it.num}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={styles.icon} src={it.icon} alt="" aria-hidden="true" />
              <div>
                <h3 className={styles.itemTitle}>{it.title}</h3>
                <p className={styles.desc}>{it.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className={`container ${styles.cta}`}>
        <p className={styles.ctaTitle}>
          Tiếp thị thông minh <span>—</span> Vận hành tinh gọn
        </p>
        <a href="#contact" className={styles.ctaBtn}>
          Bắt đầu ngay với Entersight
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}
