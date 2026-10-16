import styles from "./lms.module.css";

/** One run of a display headline: plain caps, a lowercase italic `mini`
 *  connector, or the one highlighted phrase (`hl`). */
export type Run = string | { mini: string } | { hl: string };

/**
 * Design-system display headline whose words rise out of a mask in turn
 * (0.95s, 45ms stagger). The hero plays on load (`onLoad`); section headings
 * play when their revealed block gets [data-in].
 */
export default function Display({
  as: Tag = "h2",
  runs,
  className = "",
  onLoad = false,
}: {
  as?: "h1" | "h2";
  runs: Run[];
  className?: string;
  onLoad?: boolean;
}) {
  let i = 0;
  const words = (text: string, extra?: string) =>
    text.split(" ").map((w, k) => (
      // the space sits outside the mask: trailing spaces inside an
      // inline-block collapse away
      <span key={k}>
        <span className={`${styles.w} ${extra ?? ""}`}>
          <span className={styles.wi} style={{ "--i": i++ } as React.CSSProperties}>
            {w}
          </span>
        </span>{" "}
      </span>
    ));

  return (
    <Tag className={`${styles.display} ${onLoad ? styles.playNow : ""} ${className}`}>
      {runs.map((r, k) =>
        typeof r === "string" ? (
          <span key={k}>{words(r)}</span>
        ) : "mini" in r ? (
          <span key={k} className={styles.mini}>
            <span className={styles.miniIn} style={{ "--i": i++ } as React.CSSProperties}>
              {r.mini}
            </span>
          </span>
        ) : (
          <span key={k} className={styles.hl}>
            {words(r.hl)}
          </span>
        ),
      )}
    </Tag>
  );
}
