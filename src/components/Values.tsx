import styles from "./Values.module.css";

const values = [
  { big: "E", rest: "n", title: "Evolutionary", note: "(Hiện đại / cách mạng hoá)" },
  { big: "T", rest: "er", title: "Tailor-made", note: "(Cá nhân hoá)" },
  { big: "S", rest: "ight", title: "Sincere", note: "(Tận tâm)" },
];

export default function Values() {
  return (
    <section className="section" id="values">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Giá trị cốt lõi</span>
          <h2 className="h-title">
            Định nghĩa nên <span className="accent">Entersight</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {values.map((v, i) => (
            <div className={`${styles.card} reveal`} key={v.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className={styles.letter}>
                {v.big}
                <span>{v.rest}</span>
              </div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.note}>{v.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
