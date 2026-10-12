"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "./Cases.module.css";

import caseKye from "../../public/figma/case-kye.png";
import caseOni from "../../public/figma/founder-oni.png";
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

/**
 * SVZ "testimonials": a giant marquee runs behind the speaker's cut-out
 * photo; the quote and a brand switcher sit underneath.
 */
export default function Cases() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;
  const go = (i: number) => setActive((i + count) % count);
  const t = TESTIMONIALS[active];

  return (
    <section className={styles.section} id="cases">
      <header className={`container ${styles.head}`}>
        <p className="label" data-scramble="in">
          <b>08</b> — Khách hàng
        </p>
        <h2 className={`${styles.heading} reveal`} data-split>
          <span className="lime">10+ doanh nghiệp SMEs</span> đã chuyển mình cùng Entersight
        </h2>
      </header>

      <div className={styles.stage}>
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>Khách hàng nói gì —&nbsp;</span>
            ))}
          </div>
        </div>

        <div className={styles.photos}>
          {TESTIMONIALS.map((p, i) => (
            <div key={p.id} className={styles.photo} data-active={i === active || undefined}>
              <Image
                src={p.photo}
                alt={i === active ? `${p.name} — ${p.brand}` : ""}
                fill
                sizes="(max-width: 760px) 60vw, 340px"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.body}`}>
        <figure key={t.id} className={styles.quoteBox}>
          <blockquote className={styles.quote}>{t.quote}</blockquote>
          <figcaption className={styles.attr}>
            <strong>{t.name}</strong>
            <span>{t.role}</span>
          </figcaption>
        </figure>

        <div className={styles.switcher} role="tablist" aria-label="Chọn khách hàng">
          <button type="button" className={styles.arrow} onClick={() => go(active - 1)} aria-label="Khách hàng trước">
            ←
          </button>
          {TESTIMONIALS.map((p, i) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={styles.brand}
              onClick={() => go(i)}
            >
              <Image src={p.logo} alt="" className={styles.brandLogo} />
              {p.brand}
            </button>
          ))}
          <button type="button" className={styles.arrow} onClick={() => go(active + 1)} aria-label="Khách hàng tiếp theo">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
