import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";
import { works } from "./work";

/**
 * LauLau Creative, Entersight's in-house studio: a grid of covers, each
 * opening the project's own page at /work/<slug>.
 */
export default function Work() {
  return (
    <section className={styles.section} id="work" aria-labelledby="work-title">
      <div className="container">
        <header className={styles.head}>
          <div>
            <span className="eyebrow">LauLau Creative</span>
            <h2 id="work-title" className="h2 reveal">
              Hình ảnh do đội nhà làm.
            </h2>
          </div>
          <div className={styles.headSide}>
            <p className="lede reveal">
              LauLau Creative là đội sáng tạo của Entersight: nhận diện thương
              hiệu, key visual sự kiện, website, social. Khách hàng từ ngân hàng,
              studio cưới, quán nướng đến ca sĩ.
            </p>
            <Link href="/work" className="btn">
              Toàn bộ portfolio
            </Link>
          </div>
        </header>

        <ul className={styles.grid}>
          {works.map((p, i) => {
            const cover = p.shots[0];
            return (
              <li key={p.slug} className="reveal" style={{ "--d": `${(i % 4) * 0.06}s` } as React.CSSProperties}>
                <Link href={`/work/${p.slug}`} className={styles.card}>
                  <span className={styles.media} data-fit={cover.fit}>
                    <Image src={cover.src} alt="" fill sizes="(max-width: 700px) 92vw, (max-width: 1100px) 46vw, 24vw" />
                  </span>
                  <span className={styles.name}>{p.title}</span>
                  <span className={styles.kind}>
                    {p.client} · {p.kind}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
