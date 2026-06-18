import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.logo}>
            ENTER<span>SIGHT</span>
          </a>
          <p className={styles.tagline}>
            Số hoá quy trình marketing đúng đích — Tiếp thị thông minh, vận hành
            tinh gọn.
          </p>
        </div>

        <div className={styles.contact}>
          <div className={styles.item}>
            <span className={styles.label}>Email</span>
            <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Hotline</span>
            <a href="tel:0941233481">Lã Thị Kiều Oanh · 0941 233 481</a>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Facebook</span>
            <a
              href="https://www.facebook.com/entersight"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/entersight
            </a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} Entersight Technology. All rights reserved.</span>
        <span>Built with AI Marketing &amp; Operation.</span>
      </div>
    </footer>
  );
}
