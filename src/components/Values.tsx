import styles from "./Values.module.css";

const values = [
  { big: "E", rest: "n", title: "Evolutionary", note: "(Hiện đại/cách mạng hoá)" },
  { big: "T", rest: "er", title: "Tailor-made", note: "(Cá nhân hoá)" },
  { big: "S", rest: "ight", title: "Sincere", note: "(Tận tâm)" },
];

/** Faint 6-spoke asterisk used as background decoration on the dark band. */
function Asterisk({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="-50 -50 100 100" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <rect x="-9" y="-50" width="18" height="100" rx="9" />
        <rect x="-9" y="-50" width="18" height="100" rx="9" transform="rotate(60)" />
        <rect x="-9" y="-50" width="18" height="100" rx="9" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export default function Values() {
  return (
    <section className={styles.section} id="values">
      {/* Purple title band with skyline + noise texture */}
      <div className={styles.band}>
        <div className={styles.bandInner}>
          <h2 className={styles.title}>GIÁ TRỊ CỐT LÕI</h2>
          <p className={styles.quote}>
            “ Entersight tin rằng gốc rễ của sự bứt phá nằm ở việc đổi mới tư duy,
            lớn mạnh nhờ giải pháp thực tế và bền vững bởi sự đồng hành tận tâm. ”
          </p>
        </div>
      </div>

      {/* Dark band with the E / T / S value cards */}
      <div className={styles.dark}>
        <Asterisk className={`${styles.star} ${styles.starOne}`} />
        <Asterisk className={`${styles.star} ${styles.starTwo}`} />
        <Asterisk className={`${styles.star} ${styles.starThree}`} />

        <div className={styles.grid}>
          {values.map((v, i) => (
            <div
              className={`${styles.card} reveal`}
              key={v.title}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.letter}>
                {v.big}
                <span>{v.rest}</span>
              </div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{v.title}</h3>
                <p className={styles.cardNote}>{v.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
