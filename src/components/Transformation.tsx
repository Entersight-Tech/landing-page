import styles from "./Transformation.module.css";

const steps = [
  {
    title: "Tư Vấn",
    desc: "Khảo sát hiện trạng vận hành của doanh nghiệp. Tư vấn, đào tạo, xây dựng quy trình nâng cao khả năng vận hành & thiết kế lộ trình số hoá phù hợp",
  },
  {
    title: "Số Hoá",
    desc: "Số hoá vận hành của doanh nghiệp lên phần mềm theo các danh mục số hoá được thiết kế phù hợp với doanh nghiệp",
  },
  {
    title: "Tối Ưu Hoá",
    desc: "Tích hợp AI, thiết lập hệ thống, đào tạo và chuyển giao năng lực công nghệ cho doanh nghiệp",
  },
  {
    title: "Dữ Liệu Hoá",
    desc: "Kết nối tất cả dữ liệu vận hành từ các ứng dụng trong và ngoài nền tảng để xây dựng báo cáo quản trị",
  },
];

/** SVZ "how we work": the four phases step down a staircase as you read. */
export default function Transformation() {
  return (
    <section className={styles.section} id="transformation">
      <div className={`container ${styles.inner}`}>
        <header className={styles.head}>
          <p className="label" data-scramble="in">
            <b>04</b> — Lộ trình
          </p>
          <h2 className={`display ${styles.title} reveal`} data-split>
            <i className="mini">đồng hành</i>{"\u00a0"}xuyên suốt <span className="lime">lộ trình</span> chuyển đổi số
          </h2>
          <p className={`${styles.lede} reveal`}>
            Từ khảo sát hiện trạng đến báo cáo quản trị — một đội ngũ đi cùng
            doanh nghiệp qua bốn giai đoạn.
          </p>
          <a href="#contact" className="btn reveal" data-scramble>
            Tư vấn triển khai ngay
          </a>
        </header>

        <ol className={styles.stairs}>
          {steps.map((s, i) => (
            <li
              className={`${styles.step} reveal`}
              key={s.title}
              style={{ "--i": i, transitionDelay: `${i * 0.1}s` } as React.CSSProperties}
            >
              <span className={styles.num} aria-hidden="true">
                0{i + 1}
              </span>
              <div>
                <span className={styles.phase}>Giai đoạn {i + 1}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
