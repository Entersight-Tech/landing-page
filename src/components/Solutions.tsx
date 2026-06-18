import Image from "next/image";
import styles from "./Solutions.module.css";
import brain from "../../public/figma/brain.png";

const aiBullets = [
  "Tự động hóa quy trình & Chăm sóc khách hàng.",
  "Xử lý dữ liệu thông minh trong vài giây, giảm sai sót thủ công.",
  "Tối ưu hóa nguồn lực, vận hành bộ máy tinh gọn nhưng hiệu suất tối đa.",
];

const more = [
  {
    tag: "ETS Performance",
    title: "Tiếp thị thông minh dựa trên dữ liệu thực",
    desc: 'Triển khai chiến dịch trúng đích, ngừng lãng phí ngân sách "mù".',
  },
  {
    tag: "ETS Creative",
    title: "Sáng tạo bản sắc, chạm điểm rơi cảm xúc",
    desc: "Xây dựng chiến lược sáng tạo và tối ưu quảng cáo để tăng trưởng doanh thu.",
  },
  {
    tag: "ETS Dashboard & Analytics",
    title: "Đo lường mọi điểm chạm trên một màn hình",
    desc: "Báo cáo trực quan theo thời gian thực, ra quyết định dựa trên số liệu.",
  },
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export default function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Giải pháp</span>
          <h2 className="h-title">
            MỘT ĐIỂM CHẠM — <span className="accent">MỌI GIẢI PHÁP</span>
          </h2>
          <p className={styles.intro}>
            Entersight không chỉ giúp bạn kể câu chuyện hay, chúng tôi xây dựng
            một bộ máy mạnh mẽ để hiện thực hóa câu chuyện đó bằng công nghệ số.
          </p>
        </div>

        <div className={`${styles.featured} reveal`}>
          <div className={styles.featuredText}>
            <span className={styles.fTag}>ETS AI OPERATION</span>
            <h3 className={styles.fTitle}>
              Tự động hóa quy trình &amp; Chăm sóc khách hàng
            </h3>
            <ul className={styles.bullets}>
              {aiBullets.map((b) => (
                <li key={b}>
                  <Check />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">
              Tư vấn triển khai
            </a>
          </div>
          <div className={styles.featuredVisual}>
            <Image src={brain} alt="ETS AI Operation" className={styles.brain} />
          </div>
        </div>

        <div className={styles.grid}>
          {more.map((m, i) => (
            <article className={`${styles.card} reveal`} key={m.title} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className={styles.cTag}>{m.tag}</span>
              <h4 className={styles.cTitle}>{m.title}</h4>
              <p className={styles.cDesc}>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
