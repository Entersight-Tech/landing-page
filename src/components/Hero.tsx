import Image from "next/image";
import styles from "./Hero.module.css";
import heroPerson from "../../public/figma/hero-person.png";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
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

        <div className={styles.visual}>
          <div className={styles.glow} aria-hidden />
          <div className={styles.bubble} aria-hidden />
          <Image
            src={heroPerson}
            alt="Chuyên gia Entersight ứng dụng công nghệ AI"
            priority
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
