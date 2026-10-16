import { demoChat, demoScores, personas, skills } from "./data";
import styles from "./lms.module.css";

/**
 * Mock of a roleplay session: the AI customer, the rep's replies, then the
 * score per skill. Messages and bars play in turn once the card is revealed
 * (pure CSS off [data-in]). `compact` (hero) shows the chat and three skills.
 */
export default function Roleplay({ compact = false }: { compact?: boolean }) {
  const shown = compact ? skills.slice(0, 3) : skills;
  const avg = Math.round(demoScores.reduce((a, b) => a + b, 0) / demoScores.length);

  return (
    <figure
      className={`${styles.rp} ${compact ? styles.rpCompact : ""}`}
      data-reveal
      aria-label="Minh hoạ một buổi luyện chat với khách ảo"
    >
      <header className={styles.rpHead}>
        <span className={styles.rpAvatar} aria-hidden="true">
          KH
        </span>
        <span>
          <b>Khách ảo · Chị Lan</b>
          <small>Chủ cửa hàng, đang so sánh nhà cung cấp</small>
        </span>
        <span className={styles.rpLive}>Đang luyện</span>
      </header>

      {!compact && (
        <ul className={styles.rpTags} aria-label="Chân dung & cảm xúc">
          {personas.map((p, i) => (
            <li key={p} className={i < 2 ? styles.on : undefined}>
              {p}
            </li>
          ))}
        </ul>
      )}

      <ol className={styles.rpChat}>
        {demoChat.map((m, i) => (
          <li
            key={i}
            className={m.from === "bot" ? styles.bot : styles.me}
            style={{ "--m": i } as React.CSSProperties}
          >
            {m.text}
          </li>
        ))}
      </ol>

      <div className={styles.rpScore} style={{ "--m": demoChat.length } as React.CSSProperties}>
        <p className={styles.rpTotal}>
          <span>Điểm buổi luyện</span>
          <b>{avg}</b>
          <small>/100</small>
        </p>
        <ul className={styles.rpBars}>
          {shown.map((s, i) => (
            <li key={s} style={{ "--v": demoScores[i], "--b": i } as React.CSSProperties}>
              <span>{s}</span>
              <i aria-hidden="true" />
              <b>{demoScores[i]}</b>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className={styles.rpNote}>Minh hoạ giao diện · số liệu mẫu</figcaption>
    </figure>
  );
}
