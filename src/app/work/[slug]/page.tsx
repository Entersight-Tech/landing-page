import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/components/work";
import { WorkBar, WorkFoot } from "../WorkChrome";
import styles from "../work.module.css";

type Props = { params: Promise<{ slug: string }> };

// every project is prerendered; unknown slugs 404
export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

// phone browser chrome takes the project's tone, the colour at the top
export async function generateViewport({ params }: Props): Promise<Viewport> {
  const { slug } = await params;
  const w = works.find((p) => p.slug === slug);
  return w ? { themeColor: w.tone } : {};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = works.find((p) => p.slug === slug);
  if (!w) return {};
  const title = `${w.title} · LauLau Creative | Entersight`;
  const cover = w.shots[0];
  return {
    title,
    description: w.summary,
    alternates: { canonical: `/work/${w.slug}` },
    openGraph: {
      type: "article",
      locale: "vi_VN",
      url: `/work/${w.slug}`,
      siteName: "Entersight",
      title,
      description: w.summary,
      images: [{ url: cover.src, width: cover.w, height: cover.h }],
    },
    twitter: { card: "summary_large_image", title, description: w.summary, images: [cover.src] },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const i = works.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const w = works[i];
  const next = works[(i + 1) % works.length];

  return (
    <div className={styles.page} style={{ "--tone": w.tone } as React.CSSProperties}>
      <WorkBar />
      <main id="main">
        <article>
          <header className={`container ${styles.hero}`}>
            <div className={styles.heroHead}>
              <h1 className={styles.title}>{w.title}</h1>
              <p className={styles.kind}>{w.kind}</p>
            </div>
            <div className={styles.side}>
              <p className={styles.summary}>{w.summary}</p>
              <dl className={styles.facts}>
                <div>
                  <dt>Khách hàng</dt>
                  <dd>{w.client}</dd>
                </div>
                <div>
                  <dt>Năm</dt>
                  <dd>{w.year}</dd>
                </div>
                <div className={styles.wide}>
                  <dt>Hạng mục</dt>
                  <dd>
                    <ul className={styles.scope}>
                      {w.scope.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
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
          </header>

          <div className={`container ${styles.shots}`}>
            {w.shots.map((shot, k) => (
              <figure key={shot.src} className={styles.shot} data-fit={shot.fit}>
                <Image
                  src={shot.src}
                  alt={`${w.title}: ${shot.caption}`}
                  width={shot.w}
                  height={shot.h}
                  sizes="(max-width: 1320px) 94vw, 1240px"
                  priority={k === 0}
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </article>

        <Link href={`/work/${next.slug}`} className={`container ${styles.next}`}>
          <span>
            <span className={styles.nextTitle}>{next.title}</span>
            <span className={styles.nextKind}>Dự án tiếp theo: {next.kind}</span>
          </span>
          <span className={styles.nextImg}>
            <Image src={next.shots[0].src} alt="" fill sizes="(max-width: 800px) 92vw, 40vw" />
          </span>
        </Link>
      </main>
      <WorkFoot />
    </div>
  );
}
