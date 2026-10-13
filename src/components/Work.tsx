"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";
import { works } from "./work";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * LauLau Creative — one project per screen. The section background takes on
 * each project's tone as its slide comes into view; "Xem dự án" leads to the
 * project's own shareable page at /work/<slug>.
 */
export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const [tone, setTone] = useState(works[0].tone);

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
          <Link href="/work" className="btn" data-scramble>
            Toàn bộ portfolio
          </Link>
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
              <Link href={`/work/${p.slug}`} className="btn btn--solid" data-scramble>
                Xem dự án
              </Link>
            </div>

            <Link
              href={`/work/${p.slug}`}
              className={`${styles.collage} reveal`}
              aria-label={`Xem dự án ${p.title}`}
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
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
