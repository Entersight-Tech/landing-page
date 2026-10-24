import styles from "./Transformation.module.css";

const steps = [
  {
    title: "Ngồi lại và xem bạn đang làm thế nào",
    desc: "Chúng tôi hỏi về quy trình hiện tại, xem số liệu bạn đang có và chỉ ra chỗ tốn thời gian, tốn tiền nhất.",
  },
  {
    title: "Đưa việc lên hệ thống",
    desc: "Những việc đang làm bằng tay và bảng tính được chuyển lên phần mềm, theo đúng cách doanh nghiệp bạn vận hành.",
  },
  {
    title: "Gắn AI và dạy đội bạn dùng",
    desc: "Thêm AI vào chỗ thật sự đỡ việc, rồi đào tạo để đội của bạn tự chạy được, không phụ thuộc chúng tôi.",
  },
  {
    title: "Đo, báo cáo, chỉnh tiếp",
    desc: "Nối dữ liệu từ các ứng dụng về một báo cáo quản trị, để quyết định dựa trên số chứ không dựa trên cảm giác.",
  },
];

export default function Transformation() {
  return (
    <section className={`${styles.section} light`} id="transformation" aria-labelledby="process-title">
      <div className="container">
        <header className={styles.head}>
          <span className="eyebrow">Làm việc cùng nhau thế nào</span>
          <h2 id="process-title" className="h2 reveal">
            Bắt đầu từ cách bạn đang làm, không phải từ một gói dịch vụ có sẵn.
          </h2>
        </header>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li
              className={`${styles.step} reveal`}
              key={s.title}
              style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
            >
              <span className={styles.num}>Bước {i + 1}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
