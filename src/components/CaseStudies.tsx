"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./CaseStudies.module.css";
import oniImg from "../../public/figma/case-oni.png";
import kyeImg from "../../public/figma/case-kye.jpg";
import motImg from "../../public/figma/case-mot.png";
import quaTetImg from "../../public/figma/case-quatet.png";

type CaseStudy = {
  id: string;
  title: string;
  /** the one number shown on the closed row */
  metric: string;
  subtitle: string;
  image: StaticImageData;
  alt: string;
  fit: "contain" | "cover";
  position?: string;
  /** internal product page (same tab) or an external site */
  link?: string;
  painpoints: string[];
  solutions: string[];
  results: string[];
};

const cases: CaseStudy[] = [
  {
    id: "oni",
    title: "Oni Homestay",
    metric: "0 lễ tân, vận hành 24/7",
    subtitle: "Homestay ở Huế, khách tự check-in",
    image: oniImg,
    alt: "Oni Homestay",
    fit: "contain",
    link: "http://onihomestay.com/",
    painpoints: [
      "Phải có người trực 24/7, chi phí lễ tân cao.",
      "Tiền và dữ liệu khách nằm rải rác, khó kiểm soát.",
    ],
    solutions: [
      "Tự động hoá từ đặt phòng, check-in đến chăm sóc khách đa kênh bằng AI.",
    ],
    results: [
      "Không còn chi phí lễ tân",
      "Thời gian tư vấn và đặt phòng giảm 80%",
      "Thanh toán Visa, MasterCard, Momo, VNPay, VietQR; dòng tiền tự đối soát",
    ],
  },
  {
    id: "kye",
    title: "KYE Agency",
    metric: "5× tốc độ ra nội dung",
    subtitle: "Agency thời trang, ảnh lookbook bằng AI",
    image: kyeImg,
    alt: "Kye Agency",
    fit: "cover",
    link: "/fashion-studio",
    painpoints: [
      "Làm một bộ concept thủ công mất 7 ngày.",
      "Công cụ AI phổ thông làm hỏng chi tiết vải và méo mặt người mẫu.",
      "Ảnh nằm rải rác, khó tìm lại.",
    ],
    solutions: [
      "Dựng MUSE Studio: thử đồ ảo (virtual try-on), tạo bối cảnh từ mô tả và chỉnh chi tiết kỹ.",
    ],
    results: [
      "Tốc độ ra nội dung tăng 5 lần",
      "Giữ đúng chi tiết ren, lưới, hoạ tiết và gương mặt mẫu gốc",
      "70% lượt try-on dùng được ngay từ giai đoạn demo",
    ],
  },
  {
    id: "mot",
    title: "MỘT",
    metric: "ROAS trung bình 8.0",
    subtitle: "Thương hiệu bán online, chạy performance",
    image: motImg,
    alt: "Digital Performance",
    fit: "cover",
    painpoints: [
      "Chi nhiều cho quảng cáo nhưng tỉ lệ chuyển đổi thấp.",
      "Tin nhắn nhiều mà không ra đơn.",
      "Thông điệp chung chung, không trúng điều khách lo.",
      "A/B test tràn lan, không rõ đang thử cái gì.",
    ],
    solutions: [
      "Chia phễu theo từng chặng, nội dung riêng cho từng nhóm khách.",
      "Thu hẹp tệp, viết lại kịch bản chốt lead.",
      "Dashboard theo dõi để chỉnh trong ngày, không đợi cuối tháng.",
    ],
    results: [
      "200+ đơn trên website trong 24 giờ",
      "ROAS trung bình 8.0, cao nhất 72",
      "Tỉ lệ tương tác trên 12%",
    ],
  },
  {
    id: "quatet",
    title: "Quà Tết Má Làm",
    metric: "Bộ hình ảnh Tết",
    subtitle: "Thương hiệu quà Tết, làm lại hình ảnh",
    image: quaTetImg,
    alt: "Quà Tết Má Làm",
    fit: "cover",
    painpoints: [
      "Ảnh đẹp nhưng không ai nhớ.",
      "Sản phẩm thiếu một câu chuyện để kể.",
    ],
    solutions: [
      "Kể lại món quà nhà làm bằng hình ảnh hiện đại, đồng bộ trên mọi kênh.",
    ],
    results: [
      "Hình ảnh thương hiệu đồng bộ",
      "Khách hiểu sản phẩm nhanh hơn nhờ câu chuyện rõ ràng",
    ],
  },
];

const COLUMNS = [
  { key: "painpoints", label: "Vấn đề" },
  { key: "solutions", label: "Giải pháp" },
  { key: "results", label: "Kết quả" },
] as const;

/**
 * SVZ portfolio rows: an index of projects; one opens at a time to show the
 * problem → solution → result. On desktop a preview follows the pointer.
 */
export default function CaseStudies() {
  const [open, setOpen] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // links elsewhere on the page ("#case-oni") open the row they point at
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const href = (e.target as Element).closest?.("a")?.getAttribute("href");
      const i = cases.findIndex((c) => href === `#case-${c.id}`);
      if (i >= 0) setOpen(i);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // the preview trails the pointer instead of being glued to it
  const follow = useRef({ x: 0, y: 0, tx: 0, ty: 0, frame: 0, live: false });
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = previewRef.current;
    const f = follow.current;
    if (!el) return;
    f.tx = e.clientX;
    f.ty = e.clientY;
    if (!f.live || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // first move (or reduced motion): jump straight there
      f.x = f.tx;
      f.y = f.ty;
      f.live = true;
      el.style.transform = `translate(${f.x}px, ${f.y}px)`;
      return;
    }
    if (f.frame) return;
    const tick = () => {
      f.x += (f.tx - f.x) * 0.22;
      f.y += (f.ty - f.y) * 0.22;
      el.style.transform = `translate(${f.x.toFixed(1)}px, ${f.y.toFixed(1)}px)`;
      f.frame = Math.abs(f.tx - f.x) + Math.abs(f.ty - f.y) > 0.5 ? requestAnimationFrame(tick) : 0;
    };
    f.frame = requestAnimationFrame(tick);
  };

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <header className={styles.head}>
          <h2 className={`h2 ${styles.title} reveal`}>
            Dự án đã làm
          </h2>
          <p className="lede reveal">
            Bốn doanh nghiệp với bốn vấn đề khác nhau. Mở từng dự án để xem vấn đề,
            cách làm và kết quả.
          </p>
        </header>

        <ol className={styles.list} onPointerMove={onMove} onPointerLeave={() => {
            setHover(null);
            follow.current.live = false;
          }}>
          {cases.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.id} id={`case-${c.id}`} className={`${styles.row} reveal`} data-open={isOpen || undefined}>
                <button
                  type="button"
                  className={styles.rowHead}
                  aria-expanded={isOpen}
                  aria-controls={`case-${c.id}-body`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onPointerEnter={() => setHover(i)}
                >
                  <span className={styles.name}>{c.title}</span>
                  <span className={styles.meta}>
                    <span>{c.subtitle}</span>
                    <span className={styles.metric}>{c.metric}</span>
                  </span>
                  <span className={styles.plus} aria-hidden="true" />
                </button>

                <div id={`case-${c.id}-body`} className={styles.drawer} role="region" aria-label={c.title}>
                  <div className={styles.drawerInner}>
                    <div className={`${styles.thumb} ${isOpen ? "in" : ""} wipe`}>
                      <Image
                        src={c.image}
                        alt={c.alt}
                        fill
                        sizes="(max-width: 860px) 92vw, 380px"
                        style={{ objectFit: c.fit, objectPosition: c.position }}
                      />
                    </div>
                    <div className={styles.cols}>
                      {COLUMNS.map((col) => (
                        <div key={col.key} className={styles.col}>
                          <h3 className={styles.colLabel}>{col.label}</h3>
                          <ul>
                            {c[col.key].map((t) => (
                              <li key={t}>{t}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {c.link && (
                        <a
                          href={c.link}
                          className={`btn ${styles.visit}`}
                          {...(c.link.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {c.link.startsWith("/") ? "Xem sản phẩm" : "Xem website"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* pointer-following preview (desktop, hidden for the open row) */}
      <div
        ref={previewRef}
        className={styles.preview}
        data-show={(hover !== null && hover !== open) || undefined}
        aria-hidden="true"
      >
        {cases.map((c, i) => (
          <div key={c.title} className={styles.previewImg} data-active={hover === i || undefined}>
            <Image src={c.image} alt="" fill sizes="280px" style={{ objectFit: c.fit, objectPosition: c.position }} />
          </div>
        ))}
      </div>
    </section>
  );
}
