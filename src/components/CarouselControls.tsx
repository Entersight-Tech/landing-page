import styles from "./CarouselControls.module.css";

type Props = {
  count: number;
  active: number;
  onSelect: (i: number) => void;
  /** aria labels: the group, the previous/next buttons, and one per dot */
  label: string;
  prevLabel: string;
  nextLabel: string;
  itemLabels: string[];
};

function Arrow({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {dir === "prev" ? (
        <>
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="11 18 5 12 11 6" />
        </>
      ) : (
        <>
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </>
      )}
    </svg>
  );
}

/** One control style for every carousel on the page: ← • • • → */
export default function CarouselControls({ count, active, onSelect, label, prevLabel, nextLabel, itemLabels }: Props) {
  return (
    <div className={styles.controls}>
      <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={() => onSelect(active - 1)} aria-label={prevLabel}>
        <Arrow dir="prev" />
      </button>

      <div className={styles.dots} role="tablist" aria-label={label}>
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={itemLabels[i]}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => onSelect(i)}
          />
        ))}
      </div>

      <button type="button" className={`${styles.btn} ${styles.next}`} onClick={() => onSelect(active + 1)} aria-label={nextLabel}>
        <Arrow dir="next" />
      </button>
    </div>
  );
}
