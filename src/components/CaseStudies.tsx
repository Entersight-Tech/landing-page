"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./CaseStudies.module.css";
import oniImg from "../../public/figma/case-oni.png";
import kyeImg from "../../public/figma/case-kye.jpg";
import motImg from "../../public/figma/case-mot.png";
import quaTetImg from "../../public/figma/case-quatet.png";

type CaseStudy = {
  title: string;
  tag: string;
  subtitle: string;
  image: StaticImageData;
  alt: string;
  fit: "contain" | "cover";
  link?: string;
  painpoints: string[];
  solutions: string[];
  results: string[];
};

const cases: CaseStudy[] = [
  {
    title: "ONI HOMESTAY",
    tag: "ETS AI OPERATION",
    subtitle: "Homestay check in tự động - Hẹn hò riêng tư không lễ tân",
    image: oniImg,
    alt: "Oni Homestay",
    fit: "contain",
    link: "http://onihomestay.com/",
    painpoints: [
      "Áp lực vận hành 24/7 & chi phí nhân sự lễ tân quá cao, khó kiểm soát tài chính và quản lý dữ liệu khách hàng",
    ],
    solutions: [
      "Tự động hóa toàn bộ phễu vận hành từ đặt phòng (Booking), check-in tự động đến chăm sóc khách hàng đa kênh bằng AI",
    ],
    results: [
      "Tối ưu 100% chi phí lễ tân",
      "Rút ngắn 80% thời gian tư vấn và booking",
      "Tích hợp thanh toán đa nền tảng (Visa, MasterCard, Momo, VNPay, VietQR...), quản trị dòng tiền tự động",
    ],
  },
  {
    title: "KYE AGENCY",
    tag: "ETS AI OPERATION",
    subtitle: "AI Fashion Studio",
    image: kyeImg,
    alt: "Kye Agency",
    fit: "cover",
    painpoints: [
      "Tốc độ sản xuất Concept thủ công chậm (7 ngày/ bộ). AI phổ thông gây lỗi chi tiết vải và biến dạng gương mặt mẫu. Dữ liệu hình ảnh phân tán, khó quản lý.",
    ],
    solutions: [
      "Triển khai nền tảng ETS AI Fashion Studio: Tích hợp thử đồ ảo (Virtual Try-on), sáng tạo bối cảnh (Text-to-Image) và tinh chỉnh chi tiết Pro-level",
    ],
    results: [
      "Tăng 5x tốc độ output nội dung",
      "Chuẩn xác 100% chi tiết (ren, lưới, họa tiết) & giữ nguyên diện mạo mẫu gốc.",
      "Hiệu quả 70% Virtual Try-on ngay giai đoạn Demo.",
    ],
  },
  {
    title: "MỘT",
    tag: "ETS INTEGRATED MARKETING",
    subtitle: "Digital Performance",
    image: motImg,
    alt: "Digital Performance",
    fit: "cover",
    painpoints: [
      "Đốt ngân sách khổng lồ nhưng CR thấp.",
      "Mess ảo, không ra đơn",
      'Thông điệp đại trà, không chạm đúng "nỗi đau"',
      "A/B testing hàng loạt, thiếu mục tiêu",
    ],
    solutions: [
      "Tối ưu phễu đa tầng & cá nhân hóa hành trình mua sắm số.",
      "Thu hẹp tệp mục tiêu & chuẩn hóa kịch bản chuyển đổi Lead.",
      "Tối ưu điểm chạm",
      "Dashboard theo dõi và tối ưu theo thời gian thực",
    ],
    results: [
      "200+ đơn đặt hàng website trong 24H",
      "Max ROAS = 72",
      "Average ROAS: 8.0",
      "Engagement rate >12%",
    ],
  },
  {
    title: "QUÀ TẾT MÁ LÀM",
    tag: "ETS INTEGRATED MARKETING",
    subtitle: "Creative",
    image: quaTetImg,
    alt: "Quà Tết Má Làm",
    fit: "cover",
    painpoints: [
      'Đẹp nhưng không "CHẠM"',
      "Thiếu câu chuyện",
      "Sáng tạo thiếu định hướng",
    ],
    solutions: [
      "Tái định nghĩa giá trị truyền thống bằng ngôn ngữ thị giác đương đại.",
    ],
    results: [
      "Tăng hiệu quả tiếp cận khách hàng qua hình ảnh",
      "Giảm chi phí thuyết phục khách hàng nhờ câu chuyện hình ảnh",
      "Đồng bộ hình ảnh thương hiệu.",
    ],
  },
];

function PainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1v.2h6v-.2c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2Z" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
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

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const count = cases.length;

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
    <section className={styles.band} id="case-studies">
      <div className={`container ${styles.inner}`}>
        <h2 className={`${styles.title} reveal`}>
          <span className={styles.line}>
            <mark className={styles.mark}>CHUYỂN</mark> ÁP LỰC VẬN HÀNH
          </span>
          <span className={styles.line}>
            <mark className={styles.mark}>THÀNH</mark> ĐÒN BẨY TĂNG TRƯỞNG
          </span>
        </h2>

        <div className={`${styles.carousel} reveal`}>
          <div
            className={styles.track}
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
          >
            {cases.map((c, i) => (
              <div
                className={`${styles.slide} ${i === active ? styles.isActive : ""}`}
                key={c.title}
                aria-hidden={i !== active}
              >
                <article className={styles.card}>
                  <div className={styles.left}>
                    <h3 className={styles.cTitle}>{c.title}</h3>
                    <p className={styles.meta}>
                      Tag: {c.tag}
                      <br />
                      {c.subtitle}
                    </p>
                    <div className={styles.logo}>
                      <Image
                        src={c.image}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 860px) 90vw, 408px"
                        style={{ objectFit: c.fit }}
                      />
                    </div>
                    <a
                      href={c.link ?? "#contact"}
                      className={styles.cta}
                      target={c.link ? "_blank" : undefined}
                      rel={c.link ? "noopener noreferrer" : undefined}
                      tabIndex={i === active ? 0 : -1}
                    >
                      Xem Chi Tiết
                    </a>
                  </div>

                  <div className={styles.right}>
                    <div className={`${styles.chip} ${styles.chipDark}`}>
                      <span className={styles.chipIcon}>
                        <PainIcon />
                      </span>
                      <h4 className={styles.chipTitle}>Painpoints</h4>
                      <div className={styles.chipBody}>
                        {c.painpoints.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>

                    <div className={`${styles.chip} ${styles.chipLime}`}>
                      <span className={styles.chipIcon}>
                        <BulbIcon />
                      </span>
                      <h4 className={styles.chipTitle}>Solutions</h4>
                      <div className={styles.chipBody}>
                        {c.solutions.map((s) => (
                          <p key={s}>{s}</p>
                        ))}
                      </div>
                    </div>

                    <div className={`${styles.chip} ${styles.chipResults}`}>
                      <span className={styles.chipIcon}>
                        <FileIcon />
                      </span>
                      <h4 className={styles.chipTitle}>Data-driven results</h4>
                      <ul className={styles.resultsList}>
                        {c.results.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.dots} role="tablist" aria-label="Chọn dự án">
            {cases.map((c, i) => (
              <button
                key={c.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={c.title}
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
              aria-label="Dự án trước"
            >
              <span className={styles.flip}>
                <ArrowRight />
              </span>
            </button>
            <button
              type="button"
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={() => go(active + 1)}
              aria-label="Dự án tiếp theo"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
