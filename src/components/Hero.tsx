import Image from "next/image";
import styles from "./Hero.module.css";
import heroPerson from "../../public/figma/hero-model.png";
import orb from "../../public/figma/orb.png";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* centered max-width stage: keeps the model + orb anchored to the
          content on ultra-wide screens while the background stays full-bleed.
          Collapses to display:contents on mobile so the stacked layout works. */}
      <div className={styles.stage}>
        <Image
          src={heroPerson}
          alt="Chuyên gia Entersight ứng dụng công nghệ thực tế ảo"
          priority
          sizes="(max-width: 860px) 70vw, 38vw"
          className={styles.model}
        />
        <Image
          src={orb}
          alt=""
          aria-hidden
          unoptimized
          className={styles.orb}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            SỐ HOÁ <span className={styles.accent}>QUY TRÌNH</span>
            <br />
            MARKETING <span className={styles.accent}>ĐÚNG ĐÍCH</span>
          </h1>
          <p className={styles.sub}>
            Entersight kiến tạo hệ sinh thái tiếp thị số toàn diện, giúp SMEs
            tái cấu trúc vận hành, làm chủ mọi điểm chạm khách hàng và xây dựng
            nền tảng tăng trưởng bền vững.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.cta}>
              Tư Vấn Triển Khai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
