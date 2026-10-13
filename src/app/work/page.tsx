import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/components/work";
import { WorkBar, WorkFoot } from "./WorkChrome";
import styles from "./work.module.css";

const title = "LauLau Creative — Dự án | Entersight";
const description =
  "Portfolio của LauLau Creative, đội ngũ sáng tạo của Entersight: creative direction, branding, UX/UI, visual sự kiện và nội dung số.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { type: "website", locale: "vi_VN", url: "/work", siteName: "Entersight", title, description },
};

const pad = (n: number) => String(n).padStart(2, "0");

export default function WorkIndex() {
  return (
    <div className={styles.page}>
      <WorkBar />
      <main>
        <div className={`container ${styles.indexHead}`}>
          <p className="label">
            <b>{pad(works.length)}</b> — Dự án
          </p>
          <h1 className={styles.title}>
            LauLau <span className="lime">Creative</span>
          </h1>
          <p className={styles.summary}>{description}</p>
        </div>

        <ol className={`container ${styles.grid}`}>
          {works.map((w, i) => (
            <li key={w.slug}>
              <Link href={`/work/${w.slug}`} className={styles.card}>
                <span
                  className={styles.cardImg}
                  style={{ "--card-tone": w.tone } as React.CSSProperties}
                >
                  <Image
                    src={w.shots[0].src}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 92vw, 46vw"
                    priority={i < 2}
                  />
                </span>
                <span className={styles.cardMeta}>
                  <span className={styles.cardTitle}>{w.title}</span>
                  <span className={styles.cardKind}>{w.kind}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
      <WorkFoot />
    </div>
  );
}
