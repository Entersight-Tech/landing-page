import styles from "./Problem.module.css";

const items = [
  {
    num: "01",
    title: "Chi phí leo thang",
    desc: "Ngân sách marketing bị bào mòn bởi những hoạt động kém hiệu quả và quy trình vận hành lỗi thời.",
    icon: (
      <path d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
    ),
  },
  {
    num: "02",
    title: "Dữ liệu rời rạc",
    desc: "Quyết định dựa trên cảm tính khiến doanh nghiệp mất dấu khách hàng ngay tại những điểm chạm quan trọng.",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  },
  {
    num: "03",
    title: "Nhân sự quá tải",
    desc: "Nhân viên tiêu tốn 80% thời gian cho các công việc lặp đi lặp lại, không tạo ra giá trị thật.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7M17 11a3 3 0 100-6M22 21a5 5 0 00-4-4.9" />
      </>
    ),
  },
  {
    num: "04",
    title: "Quy trình cồng kềnh",
    desc: 'Quy trình rời rạc khiến thông tin nghẽn lại giữa các team, thao tác thủ công trở thành "nút thắt" gây sai sót và chậm trễ.',
    icon: (
      <>
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="16" r="2.5" />
        <path d="M9 4v1.5M9 12.5V14M4 9h1.5M12.5 9H14M5.4 5.4l1 1M11.6 11.6l1 1M5.4 12.6l1-1M11.6 6.4l1-1" />
      </>
    ),
  },
];

export default function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Vấn đề</span>
          <h2 className="h-title">
            NGÂN SÁCH MARKETING CỦA DOANH NGHIỆP
            <br />
            ĐANG <span className="accent">&quot;BỐC HƠI&quot;</span>?
          </h2>
        </div>

        <div className={styles.grid}>
          {items.map((it, i) => (
            <article className={`${styles.card} reveal`} key={it.num} style={{ transitionDelay: `${(i % 2) * 0.1}s` }}>
              <span className={styles.num}>{it.num}</span>
              <div className={styles.body}>
                <h3 className={styles.title}>{it.title}</h3>
                <p className={styles.desc}>{it.desc}</p>
              </div>
              <div className={styles.icon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
