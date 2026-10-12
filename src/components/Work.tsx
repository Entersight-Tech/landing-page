"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Work.module.css";
import { works } from "./work";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * LauLau Creative — one project per screen. The section background takes on
 * each project's tone as its slide comes into view; "Xem dự án" opens a
 * full-screen case viewer with every frame of the project.
 */
export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [tone, setTone] = useState(works[0].tone);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const slides = ref.current?.querySelectorAll<HTMLElement>("[data-tone]");
    if (!slides) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setTone((e.target as HTMLElement).dataset.tone!);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open === null) {
      if (d.open) d.close();
      return;
    }
    if (!d.open) d.showModal();
    d.scrollTop = 0;
  }, [open]);

  const w = open === null ? null : works[open];

  return (
    <section
      ref={ref}
      className={styles.section}
      id="work"
      style={{ "--tone": tone } as React.CSSProperties}
      aria-labelledby="work-title"
    >
      <div className={`container ${styles.intro}`} data-tone={works[0].tone} data-page>
        <div className={styles.introHead}>
          <p className="label" data-scramble="in">
            <b>06</b> — LauLau Creative
          </p>
          <h2 id="work-title" className={`display ${styles.title} reveal`} data-split>
            <i className="mini">studio</i>{" "}LauLau <span className="lime">Creative</span>
          </h2>
          <p className={styles.lede}>
            Đội ngũ sáng tạo của Entersight — creative direction, branding,
            UX/UI, visual sự kiện và nội dung số. Mỗi dự án dưới đây là một màn
            hình; cuộn để xem tiếp.
          </p>
        </div>

        <ol className={styles.index}>
          {works.map((p, i) => (
            <li key={p.slug}>
              <a href={`#work-${p.slug}`} className={styles.indexRow} data-scramble>
                <span className={styles.indexNo}>{pad(i + 1)}</span>
                <span className={styles.indexName}>{p.title}</span>
                <span className={styles.indexKind}>{p.kind}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>

      {works.map((p, i) => (
        <article
          key={p.slug}
          id={`work-${p.slug}`}
          className={styles.slide}
          data-tone={p.tone}
          data-page
          aria-label={p.title}
        >
          <span className={styles.ghost} aria-hidden="true">
            {pad(i + 1)}
          </span>

          <div className={`container ${styles.slideInner}`}>
            <div className={`${styles.meta} reveal`}>
              <p className={styles.count}>
                <b>{pad(i + 1)}</b> / {pad(works.length)} <span>— {p.kind}</span>
              </p>
              <h3 className={styles.name}>{p.title}</h3>
              <dl className={styles.facts}>
                <div>
                  <dt>Khách hàng</dt>
                  <dd>{p.client}</dd>
                </div>
                <div>
                  <dt>Năm</dt>
                  <dd>{p.year}</dd>
                </div>
              </dl>
              <p className={styles.summary}>{p.summary}</p>
              <ul className={styles.scope}>
                {p.scope.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <button type="button" className="btn btn--solid" onClick={() => setOpen(i)} data-scramble>
                Xem dự án
              </button>
            </div>

            <button
              type="button"
              className={`${styles.collage} reveal`}
              onClick={() => setOpen(i)}
              aria-label={`Mở bộ hình dự án ${p.title}`}
            >
              {p.shots.slice(0, 3).map((shot, k) => (
                <span
                  key={shot.src}
                  className={`${styles.frame} ${styles[`f${k}`]} wipe`}
                  data-fit={shot.fit}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes={k === 0 ? "(max-width: 900px) 92vw, 52vw" : "(max-width: 900px) 46vw, 24vw"}
                  />
                </span>
              ))}
              <span className={styles.more} aria-hidden="true">
                {p.shots.length} khung hình ↗
              </span>
            </button>
          </div>
        </article>
      ))}

      <dialog
        ref={dialogRef}
        className={styles.viewer}
        style={w ? ({ "--tone": w.tone } as React.CSSProperties) : undefined}
        onClose={() => setOpen(null)}
        aria-label={w ? `Dự án ${w.title}` : "Dự án"}
        data-lenis-prevent
      >
        {w && open !== null && (
          <>
            <header className={styles.viewerBar}>
              <span className={styles.count}>
                <b>{pad(open + 1)}</b> / {pad(works.length)}
              </span>
              <span className={styles.viewerTitle}>{w.title}</span>
              <button type="button" className="btn" onClick={() => setOpen(null)} autoFocus>
                Đóng
              </button>
            </header>

            <div className={styles.viewerBody}>
              <div className={styles.viewerIntro}>
                <p className="label">
                  <b>{w.kind}</b> — {w.client}
                </p>
                <h3 className={styles.viewerName}>{w.title}</h3>
                <p className={styles.summary}>{w.summary}</p>
                {w.links && (
                  <p className={styles.links}>
                    {w.links.map((l) => (
                      <a key={l.href} href={l.href} className="btn" target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </p>
                )}
              </div>

              {w.shots.map((shot, k) => (
                <figure key={shot.src} className={styles.shot}>
                  <Image
                    src={shot.src}
                    alt={`${w.title} — ${shot.caption}`}
                    width={shot.w}
                    height={shot.h}
                    sizes="(max-width: 1240px) 100vw, 1200px"
                  />
                  <figcaption>
                    <b>{pad(k + 1)}</b> {shot.caption}
                  </figcaption>
                </figure>
              ))}

              <nav className={styles.viewerNav} aria-label="Chuyển dự án">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setOpen((open - 1 + works.length) % works.length)}
                >
                  Trước — {works[(open - 1 + works.length) % works.length].title}
                </button>
                <button type="button" className="btn btn--solid" onClick={() => setOpen((open + 1) % works.length)}>
                  Tiếp — {works[(open + 1) % works.length].title}
                </button>
              </nav>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
