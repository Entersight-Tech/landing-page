"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Cases.module.css";

import caseKye from "../../public/figma/case-kye.png";
import caseOni from "../../public/figma/case-oni.png";
import caseSma from "../../public/figma/case-sma.png";
import logoKye from "../../public/figma/logo-kye.png";
import logoOni from "../../public/figma/logo-oni.png";
import logoSma from "../../public/figma/logo-sma.png";

type Testimonial = {
  id: string;
  photo: StaticImageData;
  logo: StaticImageData;
  brand: string;
  quote: string;
  role: string;
  name: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "kye",
    photo: caseKye,
    logo: logoKye,
    brand: "KYE Agency",
    quote:
      "“Tại KYE, chúng tôi không để nỗi lo công nghệ giới hạn biên độ sáng tạo. Giải pháp AI Fashion Transform chính là cầu nối để công nghệ chạm đến cảm xúc một cách tự nhiên nhất. Với sự hỗ trợ tuyệt đối 24/7, đội ngũ KYE có thể tự do hiện thực hóa những kỳ vọng khắt khe nhất của tệp khách Elite bằng một chuẩn mực chuyên nghiệp và tốc độ vượt trội.”",
    role: "Founder · CEO Kye Agency",
    name: "Mr. KYE NGUYỄN",
  },
  {
    id: "oni",
    photo: caseOni,
    logo: logoOni,
    brand: "Oni Homestay",
    quote:
      "“Từ một ý tưởng chưa từng nghĩ tới, Entersight đã hiện thực hóa hệ thống vận hành chuyên nghiệp cho mô hình lưu trú nhỏ của tôi tại Huế. Mọi quy trình từ quản lý phòng đến dòng tiền đều được tự động hóa 100%. Giờ đây, thay vì vùi đầu vào sổ sách, tôi có thể thảnh thơi du lịch trong khi hệ thống vẫn gửi báo cáo chi tiết mỗi ngày. Hiệu suất rõ rệt, quản trị thông minh.”",
    role: "Founder · Oni Homestay",
    name: "Ms. TRẦN BẢO NHI",
  },
  {
    id: "sma",
    photo: caseSma,
    logo: logoSma,
    brand: "SMA Agency",
    quote:
      "“Entersight mang đến góc nhìn chiến lược rõ ràng cho các doanh nghiệp trong quá trình tăng trưởng. Từ góc nhìn của một digital performance agency, chúng tôi nhận thấy các doanh nghiệp khi áp dụng những đề xuất từ Entersight có thể xác định rõ điểm nghẽn trong vận hành và cải thiện hiệu quả marketing lên đến 20–30% trong giai đoạn tối ưu ban đầu.”",
    role: "Founder · CEO SMA Agency",
    name: "Mr. VŨ ANH PHÚC",
  },
];

function QuoteGlyph({ className }: { className: string }) {
  // Solid double quotation mark (no cut-outs) so it never reads as a hole.
  return (
    <svg
      className={className}
      viewBox="0 0 150 120"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M58 22 C58 8 46 2 32 2 C16 2 4 16 4 36 C4 54 16 66 34 66 C28 90 20 104 4 116 C30 108 58 86 64 52 C66 42 64 30 58 22 Z" />
      <path d="M132 22 C132 8 120 2 106 2 C90 2 78 16 78 36 C78 54 90 66 108 66 C102 90 94 104 78 116 C104 108 132 86 138 52 C140 42 138 30 132 22 Z" />
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
                      <span className={styles.badge}>
                        <Image
                          src={t.logo}
                          alt={t.brand}
                          className={styles.badgeLogo}
                        />
                      </span>
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
