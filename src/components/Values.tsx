import styles from "./Values.module.css";

const values = [
  { big: "E", rest: "n", title: "Evolutionary", note: "(Hiện đại/cách mạng hoá)" },
  { big: "T", rest: "er", title: "Tailor-made", note: "(Cá nhân hoá)" },
  { big: "S", rest: "ight", title: "Sincere", note: "(Tận tâm)" },
];

/** SVZ's coloured "culture" block, in brand purple: the three values stack
 *  into the word En·Ter·Sight. */
export default function Values() {
  return (
    <section className={styles.section} id="values">
      <div className={styles.panel}>
        <div className={styles.intro}>
          <p className="label" data-scramble="in">
            <b>08</b> — Về Entersight
          </p>
          <h2 className={`display ${styles.title} reveal`} data-split>
            Giá trị <i className="mini">cốt lõi</i>
          </h2>
          <p className={`${styles.quote} reveal`}>
            “Entersight tin rằng gốc rễ của sự bứt phá nằm ở việc đổi mới tư duy,
            lớn mạnh nhờ giải pháp thực tế và bền vững bởi sự đồng hành tận tâm.”
          </p>
        </div>

        <ul className={styles.stack}>
          {values.map((v, i) => (
            <li
              className={`${styles.row} reveal`}
              key={v.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span className={styles.chunk} aria-hidden="true">
                {v.big}
                {v.rest}
              </span>
              <span className={styles.meaning}>
                <strong>{v.title}</strong>
                <span>{v.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
