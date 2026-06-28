"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Solutions.module.css";
import brain from "../../public/figma/brain.png";
import dataImg from "../../public/figma/solution-data.png";
import creativeImg from "../../public/figma/solution-creative.png";
import genaiImg from "../../public/figma/solution-genai.png";
import dashboardImg from "../../public/figma/solution-dashboard.png";

type Slide = {
  title: string;
  tagline: string;
  bullets: string[];
  image: StaticImageData;
  alt: string;
};

const slides: Slide[] = [
  {
    title: "ETS AI OPERATION",
    tagline: "Tự động hóa quy trình & Chăm sóc khách hàng.",
    bullets: [
      "Tự động hóa quy trình & Chăm sóc khách hàng.",
      "Xử lý dữ liệu thông minh trong vài giây, giảm sai sót thủ công.",
      "Tối ưu hóa nguồn lực, vận hành bộ máy tinh gọn nhưng hiệu suất tối đa.",
    ],
    image: brain,
    alt: "ETS AI Operation",
  },
  {
    title: "ETS DATA MARKETING",
    tagline: "Tiếp thị thông minh dựa trên dữ liệu thực.",
    bullets: [
      "Cá nhân hóa trải nghiệm khách hàng trên đa điểm chạm.",
      "Phân tích sâu hành vi thị trường để tối ưu tỷ lệ chuyển đổi (ROI).",
      'Triển khai chiến dịch trúng đích, ngừng lãng phí ngân sách "mù".',
    ],
    image: dataImg,
    alt: "ETS Data Marketing",
  },
  {
    title: "ETS CREATIVE",
    tagline: "Sáng tạo bản sắc, chạm điểm rơi cảm xúc.",
    bullets: [
      "Sản xuất hình ảnh, video và phát triển nội dung marketing đa kênh.",
      "Branding: Thiết kế nhận diện và quản trị hệ sinh thái digital đa nền tảng.",
      "Xây dựng chiến lược sáng tạo và tối ưu quảng cáo để tăng trưởng doanh thu.",
    ],
    image: creativeImg,
    alt: "ETS Creative",
  },
  {
    title: "ETS GENERATIVE AI PLATFORM",
    tagline: "Hệ thống sản xuất nội dung quy mô lớn.",
    bullets: [
      "x5 tốc độ output nội dung mà không tăng chi phí nhân sự.",
      "Tự động hóa quy trình thiết kế và phát triển ý tưởng sáng tạo.",
      "Đảm bảo tính đồng nhất thương hiệu trên mọi nền tảng số.",
    ],
    image: genaiImg,
    alt: "ETS Generative AI Platform",
  },
  {
    title: "ETS DASHBOARD & ANALYTICS",
    tagline: "Quản trị doanh nghiệp theo thời gian thực.",
    bullets: [
      "Hệ thống báo cáo minh bạch, nắm bắt mọi chỉ số kinh doanh 24/7.",
      "Ra quyết định chính xác dựa trên số liệu thực.",
      "Theo dõi sức khỏe thương hiệu và hiệu quả chiến dịch tức thời.",
    ],
    image: dashboardImg,
    alt: "ETS Dashboard & Analytics",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function Solutions() {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = slides.length;

  // Distance to translate the track so the active card aligns to the left
  // edge of the content column, leaving the next card peeking on the right.
  const measure = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const items = track.children;
    const first = items[0] as HTMLElement | undefined;
    if (!first) return 0;
    const second = items[1] as HTMLElement | undefined;
    const step = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
    return step * idx;
  }, []);

  useEffect(() => {
    setOffset(measure(active));
  }, [active, measure]);

  useEffect(() => {
    const onResize = () => setOffset(measure(active));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, measure]);

  const go = (i: number) => setActive(((i % count) + count) % count);

  return (
    <section className={styles.band} id="solutions">
      <span className={styles.watermark} aria-hidden>
        Entersight
      </span>

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.head} reveal`}>
          <h2 className={styles.title}>
            <span className={styles.one}>MỘT ĐIỂM CHẠM</span>
            <span className={styles.divider} aria-hidden />
            <span className={styles.all}>MỌI GIẢI PHÁP</span>
          </h2>
          <p className={styles.quote}>
            &ldquo; Entersight không chỉ giúp bạn kể câu chuyện hay, chúng tôi xây
            dựng một bộ máy mạnh mẽ để hiện thực hóa câu chuyện đó bằng công nghệ
            số &rdquo;
          </p>
        </div>

        <div className={`${styles.carousel} reveal`}>
          <div
            className={styles.track}
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {slides.map((s, i) => (
              <div
                className={`${styles.slide} ${i === active ? styles.isActive : ""}`}
                key={s.title}
                aria-hidden={i !== active}
              >
                <article className={styles.card}>
                  <div className={styles.cardText}>
                    <h3 className={styles.cTitle}>{s.title}</h3>
                    <p className={styles.tagline}>{s.tagline}</p>
                    <ul className={styles.bullets}>
                      {s.bullets.map((b) => (
                        <li key={b}>
                          <Check />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact" className={styles.cta} tabIndex={i === active ? 0 : -1}>
                      Tư vấn triển khai
                      <ArrowUpRight />
                    </a>
                  </div>
                  <div className={styles.cardVisual}>
                    <div className={styles.media}>
                      <Image src={s.image} alt={s.alt} sizes="(max-width: 860px) 90vw, 340px" />
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.dots} role="tablist" aria-label="Chọn giải pháp">
            {slides.map((s, i) => (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={s.title}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <div className={styles.arrows}>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowPrev}`}
              onClick={() => go(active - 1)}
              aria-label="Giải pháp trước"
            >
              <span className={styles.flip}>
                <ArrowRight />
              </span>
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={() => go(active + 1)}
              aria-label="Giải pháp tiếp theo"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
