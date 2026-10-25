"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import logo from "../../public/figma/logo-mono-reverse.png";

const links = [
  { label: "Dịch vụ", href: "#solutions" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Dự án", href: "#case-studies" },
  { label: "Creative", href: "#work" },
  { label: "Cách làm việc", href: "#transformation" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-menu", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {/* difference blend: white over dark sections, black over light panels */}
      <header className={styles.nav}>
        <a href="#top" className={styles.logo} aria-label="Entersight — về đầu trang">
          <Image src={logo} alt="Entersight" className={styles.logoImg} priority />
        </a>

        <nav className={styles.groups} aria-label="Điều hướng chính">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={styles.cta}>
            Tư vấn miễn phí
          </a>
          <button
            className={styles.burger}
            type="button"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        id="site-menu"
        className={styles.sheet}
        data-open={open || undefined}
        aria-hidden={!open}
      >
        <nav className={styles.sheetLinks}>
          {[...links, { label: "Liên hệ", href: "#contact" }].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${0.08 + i * 0.04}s` : "0s" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <p className={styles.sheetFoot}>
          <a href="mailto:info@entersight-tech.com" tabIndex={open ? 0 : -1}>
            info@entersight-tech.com
          </a>
          <a href="https://zalo.me/0941233481" tabIndex={open ? 0 : -1}>
            Zalo 0941 233 481
          </a>
        </p>
      </div>
    </>
  );
}
