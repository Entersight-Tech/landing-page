import styles from "./Hero.module.css";
import Asterisk from "./Asterisk";

const logos = [
  { src: "/figma/partner-kye.png", name: "KYE Agency" },
  { src: "/figma/partner-sma.png", name: "SMA Agency" },
  { src: "/figma/partner-vemanti.png", name: "Vemanti" },
  { src: "/figma/partner-buttery.png", name: "Buttery" },
  { src: "/figma/partner-mtl.png", name: "MTL" },
  { src: "/figma/partner-dctech.png", name: "DCTech" },
];

// three results lifted straight from the case studies below
const proof = [
  { value: "0", unit: "lễ tân", note: "Oni Homestay tự vận hành check-in, thanh toán, chăm sóc khách" },
  { value: "5×", unit: "tốc độ", note: "KYE Agency ra nội dung thời trang bằng AI Fashion Studio" },
  { value: "8.0", unit: "ROAS", note: "trung bình chiến dịch performance cho thương hiệu MỘT" },
];

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <Asterisk className={styles.ast} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            Để máy làm <span className="lime">việc lặp lại.</span>
          </h1>
          <p className={styles.sub}>
            Đội của bạn lo khách hàng. Entersight dựng hệ thống vận hành, chạy
            quảng cáo và làm nội dung bằng AI cho doanh nghiệp vừa và nhỏ: từ
            homestay ở Huế không cần lễ tân đến studio thời trang ra lookbook.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className="btn btn--solid">
              Kể vấn đề của bạn
            </a>
            <a href="#case-studies" className="btn">
              Xem dự án đã làm
            </a>
          </div>
        </div>

        <ul className={styles.proof}>
          {proof.map((p) => (
            <li key={p.unit}>
              <strong>
                {p.value} <span>{p.unit}</span>
              </strong>
              <p>{p.note}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={`container ${styles.trust}`}>
        <p>Đã làm cùng</p>
        <ul>
          {logos.map((l) => (
            <li key={l.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.src} alt={l.name} loading="lazy" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
