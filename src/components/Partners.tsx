"use client";

import { useEffect, useRef } from "react";
import styles from "./Partners.module.css";
import Asterisk from "./Asterisk";

const logos = [
  { src: "/figma/partner-buttery.png", name: "Buttery" },
  { src: "/figma/partner-sma.png", name: "SMA Agency" },
  { src: "/figma/partner-vemanti.png", name: "Vemanti" },
  { src: "/figma/partner-mtl.png", name: "MTL" },
  { src: "/figma/partner-kye.png", name: "KYE Agency" },
  { src: "/figma/partner-dctech.png", name: "DCTech" },
];

/**
 * The light panel that slides over the pinned hero (SVZ's "WE ARE" card):
 * an oversized "Công nghệ ✱ Sáng tạo" statement that settles as it arrives,
 * then the partner logos.
 */
export default function Partners() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const top = el.getBoundingClientRect().top;
      const t = Math.min(1, Math.max(0, 1 - top / window.innerHeight));
      el.style.setProperty("--in", t.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={ref} className={styles.panel} id="partners" aria-label="Công nghệ và sáng tạo">
      <div className={styles.statement}>
        <p className={styles.word}>Công nghệ</p>
        <Asterisk className={styles.ast} />
        <p className={`${styles.word} ${styles.wordB}`}>Sáng tạo</p>
      </div>

      <div className={styles.trust}>
        <p className={`label ${styles.trustLabel}`}>Đối tác & khách hàng đồng hành</p>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...logos, ...logos].map((l, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={l.src}
                alt={i < logos.length ? l.name : ""}
                aria-hidden={i >= logos.length || undefined}
                className={styles.logo}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
