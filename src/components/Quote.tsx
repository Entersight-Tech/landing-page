import styles from "./Quote.module.css";

export default function Quote() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.mark}>“</span>
        <p className={styles.quote}>
          Entersight tin rằng gốc rễ của sự bứt phá nằm ở việc{" "}
          <em>đổi mới tư duy</em>, lớn mạnh nhờ <em>giải pháp thực tế</em> và
          bền vững bởi <em>sự đồng hành tận tâm</em>.
        </p>
      </div>
    </section>
  );
}
