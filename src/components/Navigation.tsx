"use client";

import { useEffect, useRef, useState } from "react";
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
    { label: "Review365", href: "/review365" },
    { label: "MUSE Studio", href: "/muse" },
  ],
  [
    { label: "Khách hàng", href: "#cases" },
    { label: "Về Entersight", href: "#values" },
  ],
];
const links = groups.flat();

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [chapter, setChapter] = useState<{ no: string; name: string } | null>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  // "you are here": once a section's own [ NN — Name ] label has scrolled out
  // of view, repeat it under the logo with a bar for progress through it
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section")).flatMap((el) => {
      const label = el.querySelector<HTMLElement>(".label");
      const no = label?.querySelector("b")?.textContent;
      if (!label || !no) return [];
      const name = (label.textContent ?? "").replace(no, "").replace(/^[\s—-]+/, "").trim();
      return [{ el, label, no, name }];
    });
    let frame = 0;
    let shown = "";
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const cur = sections.findLast((s) => s.el.getBoundingClientRect().top <= vh * 0.4);
      const box = cur?.el.getBoundingClientRect();
      const lb = cur?.label.getBoundingClientRect();
      const labelOnScreen = lb && lb.bottom > 0 && lb.top < vh && lb.height > 0;
      const live = cur && box && box.bottom > vh * 0.4 && !labelOnScreen ? cur : null;
      const key = live ? live.no : "";
      if (key !== shown) {
        shown = key;
        setChapter(live ? { no: live.no, name: live.name } : null);
      }
      if (live && box && barRef.current) {
        const p = Math.min(1, Math.max(0, -box.top / Math.max(1, box.height - vh)));
        barRef.current.style.transform = `scaleX(${p.toFixed(3)})`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

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

      <p className={styles.chapter} data-on={chapter ? "" : undefined} aria-hidden="true">
        <span className={styles.chapterText}>
          <b>{chapter?.no}</b> — {chapter?.name}
        </span>
        <span className={styles.chapterBar}>
          <span ref={barRef} />
        </span>
      </p>

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
