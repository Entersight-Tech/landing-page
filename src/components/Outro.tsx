import Image from "next/image";
import Contact from "./Contact";
import styles from "./Outro.module.css";
import logoFull from "../../public/figma/logo-full.png";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#values" },
  { label: "How it Works", href: "#solutions" },
  { label: "Services", href: "#cases" },
];

export default function Outro() {
  return (
    <div className={styles.closing}>
      {/* faded Entersight mark watermark, bottom-left */}
      <svg
        className={styles.watermark}
        viewBox="0 0 120 132"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6 6h84L60 40H6z" />
        <path d="M90 6 60 40V8z" opacity="0.7" />
        <path d="M18 52h84L72 86H18z" />
        <path d="M102 52 72 86V54z" opacity="0.7" />
        <path d="M72 86v40L50 100z" opacity="0.55" />
      </svg>

      {/* Section 1 — "SẴN SÀNG BỨT PHÁ CÙNG ENTERSIGHT?" (lead capture) */}
      <Contact />

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
              mang đến góc nhìn chiến lược rõ ràng cho hành trình tăng trưởng của
              doanh nghiệp.
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
                  <path d="M14.5 8.5h2.2V5.4c-.38-.05-1.69-.16-3.21-.16-3.18 0-5.36 1.94-5.36 5.5v2.66H5.3v3.46h2.83V25h3.48v-8.14h2.72l.43-3.46h-3.15v-2.32c0-1 .27-1.68 1.71-1.68z" />
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
  );
}
