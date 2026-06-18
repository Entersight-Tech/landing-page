"use client";

import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

const links = [
  { label: "Giải pháp", href: "#solutions" },
  { label: "Giá trị cốt lõi", href: "#values" },
  { label: "Dự án", href: "#cases" },
  { label: "Đối tác", href: "#partners" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo}>
          ENTER<span>SIGHT</span>
        </a>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className="btn btn-primary">
            Tư vấn ngay
          </a>
          <button
            className={styles.burger}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
