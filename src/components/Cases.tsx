"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Cases.module.css";

import caseKye from "../../public/figma/case-kye.png";
import caseOni from "../../public/figma/case-oni.png";
import caseSma from "../../public/figma/case-sma.png";
import badgeKye from "../../public/figma/badge-kye.png";
import badgeOni from "../../public/figma/badge-oni.png";
import badgeSma from "../../public/figma/badge-sma.png";

type Testimonial = {
  id: string;
  photo: StaticImageData;
  badge: StaticImageData;
  brand: string;
  quote: string;
  role: string;
  name: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "kye",
    photo: caseKye,
    badge: badgeKye,
    brand: "KYE Agency",
    quote:
      "“Tại KYE, chúng tôi không để nỗi lo công nghệ giới hạn biên độ sáng tạo. Giải pháp AI Fashion Transform chính là cầu nối để công nghệ chạm đến cảm xúc một cách tự nhiên nhất. Với sự hỗ trợ tuyệt đối 24/7, đội ngũ KYE có thể tự do hiện thực hóa những kỳ vọng khắt khe nhất của tệp khách Elite bằng một chuẩn mực chuyên nghiệp và tốc độ vượt trội.”",
    role: "Founder · CEO Kye Agency",
    name: "Mr. KYE NGUYỄN",
  },
  {
    id: "oni",
    photo: caseOni,
    badge: badgeOni,
    brand: "Oni Homestay",
    quote:
      "“Từ một ý tưởng chưa từng nghĩ tới, Entersight đã hiện thực hóa hệ thống vận hành chuyên nghiệp cho mô hình lưu trú nhỏ của tôi tại Huế. Mọi quy trình từ quản lý phòng đến dòng tiền đều được tự động hóa 100%. Giờ đây, thay vì vùi đầu vào sổ sách, tôi có thể thảnh thơi du lịch trong khi hệ thống vẫn gửi báo cáo chi tiết mỗi ngày. Hiệu suất rõ rệt, quản trị thông minh.”",
    role: "Founder · Oni Homestay",
    name: "Ms. TRẦN BẢO NHI",
  },
  {
    id: "sma",
    photo: caseSma,
    badge: badgeSma,
    brand: "SMA Agency",
    quote:
      "“Entersight mang đến góc nhìn chiến lược rõ ràng cho các doanh nghiệp trong quá trình tăng trưởng. Từ góc nhìn của một digital performance agency, chúng tôi nhận thấy các doanh nghiệp khi áp dụng những đề xuất từ Entersight có thể xác định rõ điểm nghẽn trong vận hành và cải thiện hiệu quả marketing lên đến 20–30% trong giai đoạn tối ưu ban đầu.”",
    role: "Founder · CEO SMA Agency",
    name: "Mr. VŨ ANH PHÚC",
  },
];

function QuoteGlyph({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 80"
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="31" cy="29" r="23" />
      <path d="M14 42 L48 42 L26 70 Z" />
      <circle cx="99" cy="29" r="23" />
      <path d="M82 42 L116 42 L94 70 Z" />
    </svg>
  );
}

function Asterisk({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="13"
        strokeLinecap="round"
        transform="rotate(8 50 50)"
      >
        <line x1="50" y1="8" x2="50" y2="92" />
        <line x1="14" y1="29" x2="86" y2="71" />
        <line x1="86" y1="29" x2="14" y2="71" />
      </g>
    </svg>
  );
}

export default function Cases() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;

  const go = (i: number) => setActive((i + count) % count);

  return (
    <section className={styles.section} id="cases">
      <Asterisk className={`${styles.asterisk} ${styles.astTopRight}`} />
      <Asterisk className={`${styles.asterisk} ${styles.astTopRightSmall}`} />
      <Asterisk className={`${styles.asterisk} ${styles.astBottomLeft}`} />

      <div className="container">
        <h2 className={`${styles.heading} reveal`}>
          <span className={styles.lime}>10+ DOANH NGHIỆP</span> SMEs
          <br />
          ĐÃ CHUYỂN MÌNH CÙNG ENTERSIGHT
        </h2>

        <div className={`${styles.carousel} reveal`}>
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <div
                  className={styles.slide}
                  key={t.id}
                  aria-hidden={i !== active}
                >
                  <article className={styles.card}>
                    <div className={styles.photoCol}>
                      <Image
                        src={t.badge}
                        alt={t.brand}
                        className={styles.badge}
                      />
                      <span className={styles.badgeDot} aria-hidden="true" />
                      <div className={styles.photoBox}>
                        <Image
                          src={t.photo}
                          alt={`${t.name} — ${t.brand}`}
                          fill
                          sizes="(max-width: 900px) 230px, 340px"
                          className={styles.photo}
                        />
                      </div>
                    </div>

                    <div className={styles.body}>
                      <QuoteGlyph className={styles.quoteMark} />
                      <p className={styles.quote}>{t.quote}</p>
                      <div className={styles.attr}>
                        <span className={styles.role}>{t.role}</span>
                        <strong className={styles.name}>{t.name}</strong>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navDark}`}
              onClick={() => go(active - 1)}
              aria-label="Khách hàng trước"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="11 18 5 12 11 6" />
              </svg>
            </button>

            <div className={styles.dots} role="tablist" aria-label="Chọn khách hàng">
              {TESTIMONIALS.map((t, i) => (
                <button
                  type="button"
                  key={t.id}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={t.brand}
                  aria-selected={i === active}
                  role="tab"
                />
              ))}
            </div>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.navLight}`}
              onClick={() => go(active + 1)}
              aria-label="Khách hàng tiếp theo"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
