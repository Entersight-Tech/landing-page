import type { ReactNode } from "react";
import styles from "./DigitalTransformation.module.css";

type Step = {
  key: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    key: "tuvan",
    title: "Tư Vấn",
    desc: "Khảo sát hiện trạng vận hành của doanh nghiệp. Tư vấn, đào tạo, xây dựng quy trình nâng cao khả năng vận hành & thiết kế lộ trình số hoá phù hợp",
  },
  {
    key: "sohoa",
    title: "Số Hoá",
    desc: "Số hoá vận hành của doanh nghiệp lên phần mềm theo các danh mục số hoá được thiết kế phù hợp với doanh nghiệp",
  },
  {
    key: "toiuuhoa",
    title: "Tối Ưu Hoá",
    desc: "Tích hợp AI, thiết lập hệ thống, đào tạo và chuyển giao năng lực công nghệ cho doanh nghiệp",
  },
  {
    key: "dulieuhoa",
    title: "Dữ Liệu Hoá",
    desc: "Kết nối tất cả dữ liệu vận hành từ các ứng dụng trong và ngoài nền tảng để xây dựng báo cáo quản trị",
  },
];

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 18h10a4 4 0 0 0 0-8 5.5 5.5 0 0 0-10.6-1.6A4 4 0 0 0 7 18Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V10M12 20V4M20 20v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ConsultIllustration() {
  return (
    <div className={styles.illu}>
      <div className={styles.consultBlock} />
      <div className={styles.consultDot} />
      <div className={styles.consultFlag} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 3v18M4 4l16 4-16 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>
      <div className={styles.consultLines}>
        <span className={styles.lineWide} />
        <span className={styles.lineWide} />
        <span className={styles.lineMed} />
      </div>
      <div className={styles.consultLines}>
        <span className={styles.lineWide} />
        <span className={styles.lineWide} />
        <span className={styles.lineNarrow} />
      </div>
      <div className={styles.consultChips}>
        <span className={styles.chipCircle} />
        <span className={styles.chipCircleLime} />
        <span className={styles.chipDots}>•••</span>
      </div>
    </div>
  );
}

function DigitizeIllustration() {
  return (
    <div className={styles.illu}>
      <div className={styles.docCard}>
        <div className={styles.docBadge}>
          <ChartIcon />
        </div>
        <p className={styles.docTitle}>Document File</p>
        <p className={styles.docMeta}>456 GB | 1056 Items</p>
      </div>
      <div className={styles.cloudBadge}>
        <CloudIcon />
      </div>
      <div className={styles.bars}>
        <span style={{ height: "38%" }} />
        <span style={{ height: "68%" }} />
        <span style={{ height: "48%" }} />
        <span style={{ height: "80%" }} />
        <span style={{ height: "56%" }} />
      </div>
    </div>
  );
}

function OptimizeIllustration() {
  return (
    <div className={styles.illu}>
      <div className={styles.gauge}>
        <svg viewBox="0 0 120 70" className={styles.gaugeSvg}>
          <path d="M10 65a50 50 0 0 1 100 0" fill="none" stroke="var(--neutral-300)" strokeWidth="12" strokeLinecap="round" />
          <path d="M10 65a50 50 0 0 1 46-49.4" fill="none" stroke="var(--lime)" strokeWidth="12" strokeLinecap="round" />
          <path d="M56 15.6A50 50 0 0 1 110 65" fill="none" stroke="var(--blue)" strokeWidth="12" strokeLinecap="round" />
        </svg>
        <span className={styles.gaugeLabelLeft}>60%</span>
        <span className={styles.gaugeLabelRight}>40%</span>
        <span className={styles.gaugeCenter}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </div>
      <div className={styles.optRow}>
        <span className={styles.cloudBadgeSmall}>
          <CloudIcon />
        </span>
        <div className={styles.optLines}>
          <span className={styles.lineWide} />
          <span className={styles.lineMed} />
        </div>
      </div>
      <div className={styles.optRow}>
        <span className={styles.bagBadge}>
          <BagIcon />
        </span>
        <div className={styles.optLines}>
          <span className={styles.lineFull} />
        </div>
      </div>
    </div>
  );
}

function DataIllustration() {
  return (
    <div className={styles.illu}>
      <div className={`${styles.docCard} ${styles.docCardBack}`}>
        <div className={styles.docBadge}>
          <ChartIcon />
        </div>
        <p className={styles.docTitle}>Document File</p>
        <p className={styles.docMeta}>456 GB | 1056 Items</p>
      </div>
      <div className={styles.cloudBadge}>
        <CloudIcon />
      </div>
      <div className={`${styles.docCard} ${styles.docCardFront}`}>
        <div className={styles.docBadge}>
          <ChartIcon />
        </div>
        <p className={styles.docTitle}>Document File</p>
        <p className={styles.docMeta}>456 GB | 1056 Items</p>
      </div>
    </div>
  );
}

const illustrations: Record<string, () => ReactNode> = {
  tuvan: ConsultIllustration,
  sohoa: DigitizeIllustration,
  toiuuhoa: OptimizeIllustration,
  dulieuhoa: DataIllustration,
};

export default function DigitalTransformation() {
  return (
    <section className={styles.section} id="digital-transformation">
      <div className="container">
        <div className={`${styles.head} reveal`}>
          <h2 className={styles.title}>
            <span className={styles.lineOne}>ĐỒNG HÀNH CÙNG DOANH NGHIỆP</span>
            <span className={styles.lineTwo}>
              <span className={styles.accent}>XUYÊN SUỐT</span> LỘ TRÌNH CHUYỂN ĐỔI SỐ
            </span>
          </h2>
          <a href="#contact" className={styles.cta}>
            Tư Vấn Triển Khai Ngay
          </a>
        </div>

        <div className={styles.grid}>
          {steps.map((s, i) => {
            const Illustration = illustrations[s.key];
            return (
              <div className={`${styles.card} reveal`} key={s.key} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={styles.visual}>
                  <Illustration />
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
