"use client";

import { useRef, useState, type PointerEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./CaseStudies.module.css";
import oniImg from "../../public/figma/case-oni.png";
import kyeImg from "../../public/figma/case-kye.jpg";
import motImg from "../../public/figma/case-mot.png";
import quaTetImg from "../../public/figma/case-quatet.png";
import lmsImg from "../app/lms/opengraph-image.jpg";
import etstarImg from "../app/etstar/opengraph-image.jpg";

type CaseStudy = {
  title: string;
  tag: string;
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
    title: "ENTERLMS",
    tag: "ETS PRODUCT",
    subtitle: "Đào tạo sale bằng AI",
    image: lmsImg,
    alt: "EnterLMS — đào tạo sale bằng AI",
    fit: "cover",
    // share images are 1200×630 with the headline on the left
    position: "left center",
    link: "/lms",
    painpoints: [
      "Trưởng nhóm giỏi nhất bị kéo đi dạy lại từ đầu mỗi đợt tuyển.",
      "Nhân viên mới tập trên khách thật — và mất khách thật.",
      "Doanh số thấp nhưng không biết đội yếu ở kỹ năng nào.",
    ],
    solutions: [
      "AI soạn bài học, slide và quiz từ tài liệu và ca chốt đơn của công ty; trưởng nhóm chỉ sửa và duyệt.",
      "Luyện chat với khách ảo khó tính, chê đắt, hỏi xoáy cho tới khi vững tay.",
    ],
    results: [
      "AI chấm 6 kỹ năng bán hàng sau mỗi buổi luyện",
      "Lộ trình 4 cấp, từ Newbie đến Quản lý",
      "100% bài học, quiz do AI soạn đều qua người duyệt",
    ],
  },
  {
    title: "ETSTAR",
    tag: "ETS PRODUCT",
    subtitle: "Tăng review thật trên Google Maps",
    image: etstarImg,
    alt: "ETStar — review thật trên Google Maps",
    fit: "cover",
    // share images are 1200×630 with the headline on the left
    position: "left center",
    link: "/etstar",
    painpoints: [
      "Hồ sơ thiếu thông tin, ít cập nhật nên Google ít đề xuất.",
      "Khách hài lòng thường ra về im lặng — rất ít người tự nhớ viết review.",
      "Review bị bỏ ngỏ nhiều ngày là tín hiệu xấu với cả khách lẫn Google.",
    ],
    solutions: [
      "Khách quét QR, trả lời khảo sát ngắn; AI soạn nháp đánh giá, khách tự chỉnh và tự đăng.",
      "AI soạn phản hồi đa ngôn ngữ theo giọng thương hiệu, cảnh báo sớm review tiêu cực.",
    ],
    results: ["10.000+ địa điểm tin dùng", "50K+ đánh giá AI thu thập", "12+ quốc gia triển khai"],
  },
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
    link: "/fashion-studio",
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

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  return (
    <section className={styles.section} id="case-studies">
      <div className="container">
        <header className={styles.head}>
          <p className="label" data-scramble="in">
            <b>05</b> — Dự án
          </p>
          <h2 className={`display ${styles.title} reveal`} data-split>
            <i className="mini">chuyển</i>{"\u00a0"}áp lực vận hành <i className="mini">thành</i>{"\u00a0"}
            <span className="lime">đòn bẩy tăng trưởng</span>
          </h2>
        </header>

        <ol className={styles.list} onPointerMove={onMove} onPointerLeave={() => setHover(null)}>
          {cases.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.title} className={`${styles.row} reveal`} data-open={isOpen || undefined}>
                <button
                  type="button"
                  className={styles.rowHead}
                  aria-expanded={isOpen}
                  aria-controls={`case-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  onPointerEnter={() => setHover(i)}
                >
                  <span className={styles.idx}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.name}>{c.title}</span>
                  <span className={styles.meta}>
                    <span>{c.subtitle}</span>
                    <span className={styles.tag}>{c.tag}</span>
                  </span>
                  <span className={styles.plus} aria-hidden="true" />
                </button>

                <div id={`case-${i}`} className={styles.drawer} role="region" aria-label={c.title}>
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
                          <span className={styles.colLabel}>{col.label}</span>
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
                          {c.link.startsWith("/") ? "Xem sản phẩm" : "Xem dự án"}
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
