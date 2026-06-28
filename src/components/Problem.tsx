import styles from "./Problem.module.css";

const items = [
  {
    num: "01",
    title: "Chi phí leo thang",
    desc: "Ngân sách marketing bị bào mòn bởi những hoạt động kém hiệu quả và quy trình vận hành lỗi thời.",
    icon: "/figma/problem-icon-1.png",
  },
  {
    num: "02",
    title: "Nhân sự quá tải",
    desc: "Nhân viên tiêu tốn 80% thời gian cho các công việc lặp đi lặp lại, không tạo ra giá trị thật.",
    icon: "/figma/problem-icon-2.png",
  },
  {
    num: "03",
    title: "Dữ liệu rời rạc",
    desc: "Quyết định dựa trên cảm tính khiến doanh nghiệp mất dấu khách hàng ngay tại những điểm chạm quan trọng.",
    icon: "/figma/problem-icon-3.png",
  },
  {
    num: "04",
    title: "Quy trình cồng kềnh",
    desc: 'Quy trình rời rạc khiến thông tin nghẽn lại giữa các team, thao tác thủ công trở thành "nút thắt" gây sai sót và chậm trễ.',
    icon: "/figma/problem-icon-4.png",
  },
];

export default function Problem() {
  return (
    <section className={styles.section} id="problem">
      <span className={styles.watermark} aria-hidden="true" />
      <span className={styles.curves} aria-hidden="true" />
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
              <img className={styles.icon} src={it.icon} alt="" aria-hidden="true" />
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
