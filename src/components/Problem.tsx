import styles from "./Problem.module.css";

const items = [
  {
    num: "01",
    title: "Chi phí leo thang",
    desc: "Ngân sách marketing bị bào mòn bởi những hoạt động kém hiệu quả và quy trình vận hành lỗi thời.",
    icon: (
      <>
        <path d="M4 20h16" />
        <path d="M5 20v-6M10 20V8M15 20v-9M20 20V5" />
        <path d="M4 13l5-6 4 3 7-7" />
        <path d="M16 3h4v4" />
      </>
    ),
  },
  {
    num: "02",
    title: "Nhân sự quá tải",
    desc: "Nhân viên tiêu tốn 80% thời gian cho các công việc lặp đi lặp lại, không tạo ra giá trị thật.",
    icon: (
      <>
        <circle cx="8" cy="8" r="3.2" />
        <path d="M2.5 20c0-3.3 2.5-5.8 5.5-5.8s5.5 2.5 5.5 5.8" />
        <path d="M15 7h6M15 11h6M15 15h4" />
      </>
    ),
  },
  {
    num: "03",
    title: "Dữ liệu rời rạc",
    desc: "Quyết định dựa trên cảm tính khiến doanh nghiệp mất dấu khách hàng ngay tại những điểm chạm quan trọng.",
    icon: (
      <>
        <path d="M3 8.5h7l2 2.2h9" />
        <path d="M3 8.5l1.4 9.3a2 2 0 002 1.7h11.2a2 2 0 002-1.7L20.8 10" />
        <path d="M6 8.5V6.2a1.6 1.6 0 011.6-1.6h3.2L13 6.6h4.4A1.6 1.6 0 0119 8.2v2.3" />
      </>
    ),
  },
  {
    num: "04",
    title: "Quy trình cồng kềnh",
    desc: 'Quy trình rời rạc khiến thông tin nghẽn lại giữa các team, thao tác thủ công trở thành "nút thắt" gây sai sót và chậm trễ.',
    icon: (
      <>
        <circle cx="9.5" cy="9.5" r="2.6" />
        <path d="M9.5 4v2.1M9.5 12.9V15M4 9.5h2.1M12.9 9.5H15M5.6 5.6l1.5 1.5M11.9 11.9l1.5 1.5M5.6 13.4l1.5-1.5M11.9 7.1l1.5-1.5" />
        <circle cx="17.5" cy="17.5" r="1.7" />
        <path d="M17.5 13.8v1.4M17.5 19.8v1.4M13.8 17.5h1.4M19.8 17.5h1.4" />
      </>
    ),
  },
];

export default function Problem() {
  return (
    <section className={styles.section} id="problem">
      <span className={styles.watermark} aria-hidden="true" />
      <span className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>
          NGÂN SÁCH MARKETING
          <br />
          CỦA DOANH NGHIỆP ĐANG{" "}
          <span className={styles.accent}>&quot;BỐC HƠI&quot;</span> ?
        </h2>

        <div className={styles.grid}>
          {items.map((it, i) => (
            <article
              className={`${styles.card} reveal`}
              key={it.num}
              style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
            >
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </span>
              <div className={styles.cardBody}>
                <span className={styles.num}>{it.num}</span>
                <h3 className={styles.cardTitle}>{it.title}</h3>
                <p className={styles.desc}>{it.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <h3 className={styles.ctaTitle}>
            Tiếp thị thông minh — Vận hành tinh gọn
          </h3>
          <a href="#contact" className={styles.ctaBtn}>
            Bắt đầu ngay với Entersight
          </a>
        </div>
      </div>

      <span className={styles.stripe} aria-hidden="true" />
    </section>
  );
}
