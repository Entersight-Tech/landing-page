"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import logoReverse from "../../public/figma/logo-reverse.png";

const links = [
  { label: "Về Entersight", href: "#top" },
  { label: "Giá Trị Cốt Lõi", href: "#values" },
  { label: "Painpoints", href: "#problem" },
  { label: "Giải Pháp", href: "#solutions" },
  { label: "Khách Hàng", href: "#cases" },
  { label: "Đối Tác", href: "#partners" },
  { label: "Liên Hệ", href: "#contact" },
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.glass} aria-hidden />
        <a href="#top" className={styles.logo} aria-label="Entersight">
          <Image
            src={logoReverse}
            alt="Entersight"
            className={styles.logoImg}
            priority
          />
        </a>

        <nav
          id="site-menu"
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
        >
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={styles.signup}>
            ĐĂNG KÍ NGAY
            <svg
              className={styles.arrow}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h9M8.5 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <button
            className={styles.burger}
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="site-menu"
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
