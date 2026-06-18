import styles from "./CtaBanner.module.css";

export default function CtaBanner() {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.band}>
          <div className={styles.text}>
            <h3 className={styles.title}>
              Tiếp thị thông minh — <span>Vận hành tinh gọn</span>
            </h3>
            <p className={styles.sub}>Bắt đầu ngay với Entersight.</p>
          </div>
          <a href="#contact" className={styles.cta}>
            Đăng ký tư vấn
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
