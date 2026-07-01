import Image from "next/image";
import styles from "./Transformation.module.css";
import consultingImg from "../../public/figma/transformation-consulting.png";
import digitizeImg from "../../public/figma/transformation-digitize.png";
import optimizeImg from "../../public/figma/transformation-optimize.png";
import dataImg from "../../public/figma/transformation-data.png";

const steps = [
  {
    title: "Tư Vấn",
    desc: "Khảo sát hiện trạng vận hành của doanh nghiệp. Tư vấn, đào tạo, xây dựng quy trình nâng cao khả năng vận hành & thiết kế lộ trình số hoá phù hợp",
    image: consultingImg,
    alt: "Tư vấn lộ trình chuyển đổi số",
  },
  {
    title: "Số Hoá",
    desc: "Số hoá vận hành của doanh nghiệp lên phần mềm theo các danh mục số hoá được thiết kế phù hợp với doanh nghiệp",
    image: digitizeImg,
    alt: "Số hoá vận hành doanh nghiệp",
  },
  {
    title: "Tối Ưu Hoá",
    desc: "Tích hợp AI, thiết lập hệ thống, đào tạo và chuyển giao năng lực công nghệ cho doanh nghiệp",
    image: optimizeImg,
    alt: "Tối ưu hoá vận hành bằng AI",
  },
  {
    title: "Dữ Liệu Hoá",
    desc: "Kết nối tất cả dữ liệu vận hành từ các ứng dụng trong và ngoài nền tảng để xây dựng báo cáo quản trị",
    image: dataImg,
    alt: "Dữ liệu hoá và báo cáo quản trị",
  },
];

export default function Transformation() {
  return (
    <section className={styles.section} id="transformation">
      <div className={`container ${styles.inner}`}>
        <h2 className={`h-title ${styles.title} reveal`}>
          ĐỒNG HÀNH CÙNG DOANH NGHIỆP
          <br />
          <span className="accent">XUYÊN SUỐT</span> LỘ TRÌNH CHUYỂN ĐỔI SỐ
        </h2>

        <a href="#contact" className={`${styles.cta} reveal`}>
          Tư Vấn Triển Khai Ngay
        </a>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <article
              className={`${styles.card} reveal`}
              key={s.title}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={styles.media}>
                <Image src={s.image} alt={s.alt} sizes="(max-width: 640px) 80vw, (max-width: 980px) 40vw, 274px" />
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
