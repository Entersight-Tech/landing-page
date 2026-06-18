import styles from "./Partners.module.css";

const logos = [
  "/figma/logo1.svg",
  "/figma/logo2.svg",
  "/figma/logo3.svg",
  "/figma/logo4.svg",
  "/figma/logo5.svg",
  "/figma/logo6.svg",
];

export default function Partners() {
  return (
    <section className="section" id="partners">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Đối tác doanh nghiệp</span>
          <h2 className="h-title">
            ĐỒNG HÀNH CÙNG DOANH NGHIỆP
            <br />
            XUYÊN SUỐT <span className="accent">LỘ TRÌNH CHUYỂN ĐỔI SỐ</span>
          </h2>
          <p className={styles.lead}>
            <strong>10+ doanh nghiệp SMEs</strong> đã chuyển mình cùng Entersight.
          </p>
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...logos, ...logos].map((src, i) => (
            <div className={styles.cell} key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className={styles.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
