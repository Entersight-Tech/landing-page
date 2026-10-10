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

export default function Transformation() {
  return (
    <section className={styles.section} id="transformation">
      <div className={`container ${styles.inner}`}>
        <h2 className={`h-title ${styles.title} reveal`}>
          ĐỒNG HÀNH CÙNG DOANH NGHIỆP
          <br />
          <span className="accent">XUYÊN SUỐT</span>{" "}
          <span className={styles.nowrap}>LỘ TRÌNH</span>{" "}
          <span className={styles.nowrap}>CHUYỂN ĐỔI SỐ</span>
        </h2>

        <a href="#contact" className={`${styles.cta} reveal`}>
          Tư Vấn Triển Khai Ngay
        </a>

        {/* the four phases read as one roadmap: numbered nodes on a shared rail */}
        <ol className={styles.roadmap}>
          {steps.map((s, i) => (
            <li
              className={`${styles.step} reveal`}
              key={s.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className={styles.node} aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={styles.body}>
                <span className={styles.phase}>Giai đoạn {i + 1}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
