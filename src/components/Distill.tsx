import styles from "./Distill.module.css";

// One screen, no pinning: the five capabilities as a plain index, each row
// linking into the Solutions carousel.
const ITEMS = [
  { name: "AI Operation", line: "Tự động hóa quy trình" },
  { name: "Data Marketing", line: "Tiếp thị bằng dữ liệu thực" },
  { name: "Creative", line: "Chạm điểm rơi cảm xúc" },
  { name: "Generative AI", line: "Sản xuất nội dung quy mô lớn" },
  { name: "Dashboard & Analytics", line: "Ra quyết định theo thời gian thực" },
];

export default function Distill() {
  return (
    <section className={styles.section} aria-labelledby="distill-title">
      <div className={`container ${styles.stage}`}>
        <div className={styles.head}>
          <span className="label" data-scramble="in">
            <b>02</b> — Công nghệ × Sáng tạo
          </span>
          <h2 id="distill-title" className={`${styles.title} reveal`} data-split>
            Một đối tác, <span className="lime">năm năng lực.</span>
          </h2>
        </div>

        <ol className={`${styles.list} reveal`}>
          {ITEMS.map((it, i) => (
            <li key={it.name} className={styles.row} style={{ "--i": i } as React.CSSProperties}>
              <a href={`#sol-${i}`} className={styles.link}>
                <span className={styles.idx}>0{i + 1}</span>
                <span className={styles.name}>{it.name}</span>
                <span className={styles.line}>{it.line}</span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
