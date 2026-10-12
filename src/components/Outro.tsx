import Contact from "./Contact";
import styles from "./Outro.module.css";
import Asterisk from "./Asterisk";

const sitemap = [
  { label: "Thách thức", href: "#problem" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Lộ trình", href: "#transformation" },
  { label: "Dự án", href: "#case-studies" },
  { label: "Creative", href: "#work" },
  { label: "Khách hàng", href: "#cases" },
  { label: "Liên hệ", href: "#contact" },
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
              <a key={l.href} href={l.href} data-scramble>
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
                data-scramble
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
          <div className={`${styles.col} ${styles.pitch}`}>
            <span className={styles.colLabel}>Entersight</span>
            <p>
              Hệ sinh thái tiếp thị số toàn diện cho SMEs — nơi công nghệ gặp
              sáng tạo.
            </p>
            <a href="#top" className="btn" data-scramble>
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
          <span>Công nghệ × Sáng tạo</span>
        </div>
      </footer>
    </>
  );
}
