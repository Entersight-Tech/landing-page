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

// quotes are excerpts of what each client sent, cut with … and never reworded
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
      "“Tại KYE, chúng tôi không để nỗi lo công nghệ giới hạn biên độ sáng tạo. … Với sự hỗ trợ tuyệt đối 24/7, đội ngũ KYE có thể tự do hiện thực hóa những kỳ vọng khắt khe nhất của tệp khách Elite…”", // slop-ok: the client's own words
    role: "Founder · CEO Kye Agency",
    name: "Mr. KYE NGUYỄN",
  },
  {
    id: "oni",
    photo: caseOni,
    logo: logoOni,
    brand: "Oni Homestay",
    quote:
      "“Mọi quy trình từ quản lý phòng đến dòng tiền đều được tự động hóa 100%. Giờ đây, thay vì vùi đầu vào sổ sách, tôi có thể thảnh thơi du lịch trong khi hệ thống vẫn gửi báo cáo chi tiết mỗi ngày.”",
    role: "Founder · Oni Homestay",
    name: "Ms. TRẦN BẢO NHI",
  },
  {
    id: "sma",
    photo: caseSma,
    logo: logoSma,
    brand: "SMA Agency",
    quote:
      "“Từ góc nhìn của một digital performance agency, chúng tôi nhận thấy các doanh nghiệp khi áp dụng những đề xuất từ Entersight có thể xác định rõ điểm nghẽn trong vận hành và cải thiện hiệu quả marketing lên đến 20–30% trong giai đoạn tối ưu ban đầu.”",
    role: "Founder · CEO SMA Agency",
    name: "Mr. VŨ ANH PHÚC",
  },
];

/** Speaker photo beside the quote; tabs switch between clients. */
export default function Cases() {
  const [active, setActive] = useState(0);
  const count = TESTIMONIALS.length;
  const go = (i: number) => setActive((i + count) % count);
  const t = TESTIMONIALS[active];

  return (
    <section className={styles.section} id="cases" aria-labelledby="cases-title">
      <div className="container">
        <header className={styles.head}>
          <h2 id="cases-title" className="h2 reveal">
            Đừng chỉ nghe chúng tôi kể.
          </h2>
        </header>

        <div className={styles.stage}>
          <div className={styles.photos}>
            {TESTIMONIALS.map((p, i) => (
              <div key={p.id} className={styles.photo} data-active={i === active || undefined}>
                <Image
                  src={p.photo}
                  alt={i === active ? `${p.name} — ${p.brand}` : ""}
                  fill
                  sizes="(max-width: 760px) 70vw, 360px"
                />
              </div>
            ))}
          </div>

          <div className={styles.body}>
            <figure key={t.id} className={styles.quoteBox}>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.attr}>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </figcaption>
            </figure>

            <div className={styles.switcher} role="tablist" aria-label="Chọn khách hàng">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
