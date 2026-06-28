import styles from "./Partners.module.css";

const logos = [
  "/figma/partner-buttery.png",
  "/figma/partner-sma.png",
  "/figma/partner-vemanti.png",
  "/figma/partner-mtl.png",
  "/figma/partner-kye.png",
  "/figma/partner-dctech.png",
];

export default function Partners() {
  return (
    <section className={styles.section} id="partners">
      <div className={styles.bar} aria-hidden="true" />
      <div className="container">
        <h2 className={`h-title ${styles.title}`}>ĐỐI TÁC DOANH NGHIỆP</h2>
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
