import Contact from "./Contact";
import styles from "./Outro.module.css";
import Asterisk from "./Asterisk";

const sitemap = [
  { label: "Dịch vụ", href: "#solutions" },
  { label: "Dự án", href: "#case-studies" },
  { label: "LauLau Creative", href: "#work" },
  { label: "Cách làm việc", href: "#transformation" },
  { label: "Liên hệ", href: "#contact" },
];

const products = [
  { label: "ETStar", href: "/etstar" },
  { label: "EnterLMS", href: "/lms" },
  { label: "MUSE Studio", href: "/fashion-studio" },
];

const connect = [
  { label: "Email", href: "mailto:info@entersight-tech.com" },
  { label: "Facebook", href: "https://www.facebook.com/entersight", external: true },
  { label: "Zalo", href: "https://zalo.me/0941233481", external: true },
];

export default function Outro() {
  return (
    <>
      <Contact />

      <footer className={styles.footer}>
        <div className={`container ${styles.cols}`}>
          <div className={styles.col}>
            <span className={styles.colLabel}>Sitemap</span>
            {sitemap.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>Sản phẩm</span>
            {products.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            <span className={styles.colLabel}>Kết nối</span>
            {connect.map((l) => (
              <a
                key={l.label}
                href={l.href}
               
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <div className={`${styles.col} ${styles.pitch}`}>
            <span className={styles.colLabel}>Entersight</span>
            <p>
              Marketing, vận hành và nội dung cho doanh nghiệp vừa và nhỏ — làm
              bằng AI, đo bằng số thật.
            </p>
            <a href="#top" className="btn">
              Về đầu trang
            </a>
          </div>
        </div>

        {/* oversized wordmark bleeding off the bottom edge */}
        <div className={styles.wordmark} aria-hidden="true">
          <span>Enter</span>
          <Asterisk className={styles.ast} />
          <span>sight</span>
        </div>

        <div className={`container ${styles.base}`}>
          <span>© {new Date().getFullYear()} Entersight. All rights reserved.</span>
          <span>info@entersight-tech.com</span>
        </div>
      </footer>
    </>
  );
}
