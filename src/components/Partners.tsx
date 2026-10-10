import styles from "./Partners.module.css";

const logos = [
  { src: "/figma/partner-buttery.png", name: "Buttery" },
  { src: "/figma/partner-sma.png", name: "SMA Agency" },
  { src: "/figma/partner-vemanti.png", name: "Vemanti" },
  { src: "/figma/partner-mtl.png", name: "MTL" },
  { src: "/figma/partner-kye.png", name: "KYE Agency" },
  { src: "/figma/partner-dctech.png", name: "DCTech" },
];

/** Slim trust bar right under the hero: who already works with Entersight. */
export default function Partners() {
  return (
    <section className={styles.section} id="partners" aria-label="Đối tác doanh nghiệp">
      <div className={`container ${styles.inner}`}>
        <p className={styles.label}>
          Đối tác &amp; khách hàng{" "}
          <br />
          đồng hành cùng Entersight
        </p>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...logos, ...logos].map((l, i) => (
              <div className={styles.cell} key={i} aria-hidden={i >= logos.length}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.src} alt={i < logos.length ? l.name : ""} className={styles.logo} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
