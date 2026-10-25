import styles from "./Problem.module.css";

// said the way owners actually say it on the first call
const items = [
  {
    quote: "Tháng nào cũng đổ tiền quảng cáo, mà không ai nói chắc được đồng nào ra đơn.",
    fix: "Đo từ quảng cáo đến đơn hàng",
  },
  {
    quote: "Inbox lúc nào cũng đầy. Khách hỏi giá xong rồi im.",
    fix: "Kịch bản chốt lead, AI trả lời 24/7",
  },
  {
    quote: "Nhân viên giỏi mất nửa ngày để chép số liệu từ chỗ này sang chỗ kia.",
    fix: "Tự động hoá quy trình lặp lại",
  },
  {
    quote: "Mỗi đợt tuyển người lại phải dạy lại từ đầu.",
    fix: "Đào tạo sale bằng AI",
  },
];

export default function Problem() {
  return (
    <section className={styles.section} id="problem" aria-labelledby="problem-title">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Nghe có quen không?</span>
          <h2 id="problem-title" className="h2 reveal">
            Không thiếu người. Thiếu quy trình.
          </h2>
          <p className="lede reveal">
            Doanh nghiệp chúng tôi gặp thường có đủ người giỏi. Cái thiếu là một
            quy trình chạy được mà không cần chủ phải đứng canh.
          </p>
        </header>

        <ol className={styles.list}>
          {items.map((it, i) => (
            <li
              key={it.fix}
              className={`${styles.item} reveal`}
              style={{ "--d": `${i * 0.07}s` } as React.CSSProperties}
            >
              <p className={styles.quote}>“{it.quote}”</p>
              <p className={styles.fix}>
                <span aria-hidden="true">→</span> {it.fix}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
