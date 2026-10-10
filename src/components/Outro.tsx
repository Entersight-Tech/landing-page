import Image from "next/image";
import Contact from "./Contact";
import styles from "./Outro.module.css";
import logoFull from "../../public/figma/logo-full.png";

const navLinks = [
  { label: "Trang chủ", href: "#top" },
  { label: "Giá trị", href: "#values" },
  { label: "Giải pháp", href: "#solutions" },
  { label: "Lộ trình", href: "#transformation" },
];

export default function Outro() {
  return (
    <div className={styles.closing}>
      {/* Section 1 — "SẴN SÀNG BỨT PHÁ CÙNG ENTERSIGHT?" (lead capture, white bg) */}
      <Contact />

      {/* Sections 2 + 3 share the lime→purple gradient (Figma node 997:1598) */}
      <div className={styles.gradientZone}>
        {/* green asterisk watermark peeking in from the left edge */}
        <svg
          className={styles.watermark}
          viewBox="-60 -60 120 120"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="outro-asterisk" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#77b22e" />
              <stop offset="1" stopColor="#a9e034" />
            </linearGradient>
          </defs>
          <g fill="url(#outro-asterisk)">
            <rect x="-9" y="-52" width="18" height="104" rx="9" />
            <rect x="-9" y="-52" width="18" height="104" rx="9" transform="rotate(60)" />
            <rect x="-9" y="-52" width="18" height="104" rx="9" transform="rotate(120)" />
          </g>
        </svg>

        {/* Section 2 — "Tối ưu vận hành, Tăng trưởng đột phá" banner */}
        <section className={styles.banner}>
          <div className={`container ${styles.bannerCard}`}>
            <div className={styles.phoneWrap}>
              <Image
                src="/figma/contact-phone.png"
                alt="Ứng dụng vận hành Entersight"
                className={styles.phone}
                width={1200}
                height={1200}
                priority
              />
            </div>
            <div className={styles.bannerText}>
              <h2 className={styles.bannerTitle}>
                Tối ưu vận hành,
                <br />
                Tăng trưởng đột phá
              </h2>
              <p className={styles.bannerSub}>
                Từ Marketing số đến hệ sinh thái vận hành thông minh, Entersight
                mang đến góc nhìn chiến lược rõ ràng cho hành trình tăng trưởng
                của doanh nghiệp.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={`container ${styles.footerInner}`}>
            <div className={styles.brand}>
              <a href="#top" className={styles.logo} aria-label="Entersight">
                <Image
                  src={logoFull}
                  alt="Entersight"
                  className={styles.logoImg}
                />
              </a>
              <span className={styles.copyright}>
                Entersight © {new Date().getFullYear()} All Rights reserved
              </span>
            </div>

            <div className={styles.footerRight}>
              <nav className={styles.nav}>
                {navLinks.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className={styles.social}>
                <a
                  className={styles.socialBtn}
                  href="mailto:info@entersight-tech.com"
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className={styles.socialBtn}
                  href="https://www.facebook.com/entersight"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.4 20.8v-6.9h2.32l.35-2.7h-2.67V9.48c0-.78.22-1.31 1.34-1.31h1.43V5.75c-.25-.03-1.1-.11-2.09-.11-2.07 0-3.48 1.26-3.48 3.58v1.98H8.27v2.7h2.33v6.9h2.8z" />
                  </svg>
                </a>
                <a
                  className={styles.socialBtn}
                  href="https://zalo.me/0941233481"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zalo"
                >
                  Zalo
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
