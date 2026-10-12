"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Navigation.module.css";
import logo from "../../public/figma/logo-mono-reverse.png";

// grouped two-per-column like SVZ's top bar
const groups = [
  [
    { label: "Thách thức", href: "#problem" },
    { label: "Giải pháp", href: "#solutions" },
  ],
  [
    { label: "Lộ trình", href: "#transformation" },
    { label: "Dự án", href: "#case-studies" },
    { label: "Creative", href: "#work" },
  ],
  [
    { label: "Khách hàng", href: "#cases" },
    { label: "Về Entersight", href: "#values" },
  ],
];
const links = groups.flat();

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
          {groups.map((g, i) => (
            <div key={i} className={styles.group}>
              {g.map((l) => (
                <a key={l.href} href={l.href} data-scramble>
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </nav>

        <div className={styles.right}>
          <a href="#contact" className={styles.cta} data-scramble>
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
              <span className={styles.sheetIdx}>0{i + 1}</span>
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
