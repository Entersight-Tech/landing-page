import Image from "next/image";
import styles from "./Hero.module.css";
import hero from "../../public/figma/hero.png";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="eyebrow">AI Marketing &amp; Operation</span>
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
            <a href="#contact" className="btn btn-primary">
              Bắt đầu ngay
            </a>
            <a href="#solutions" className="btn btn-outline">
              Khám phá giải pháp
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.blob} aria-hidden />
          <div className={styles.imgWrap}>
            <Image
              src={hero}
              alt="Chuyên gia Entersight"
              priority
              className={styles.img}
            />
          </div>
          <div className={styles.badge}>
            <strong>10+</strong>
            <span>Doanh nghiệp SMEs đồng hành</span>
          </div>
        </div>
      </div>
    </section>
  );
}
