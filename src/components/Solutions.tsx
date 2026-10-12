import Image, { type StaticImageData } from "next/image";
import styles from "./Solutions.module.css";
import brain from "../../public/figma/brain.png";
import dataImg from "../../public/figma/solution-data.png";
import creativeImg from "../../public/figma/solution-creative.png";
import genaiImg from "../../public/figma/solution-genai.png";
import dashboardImg from "../../public/figma/solution-dashboard.png";

type Solution = {
  title: string;
  tagline: string;
  bullets: string[];
  image: StaticImageData;
};

const solutions: Solution[] = [
  {
    title: "AI Operation",
    tagline: "Tự động hóa quy trình & Chăm sóc khách hàng.",
    bullets: [
      "Xử lý dữ liệu thông minh trong vài giây, giảm sai sót thủ công.",
      "Tối ưu hóa nguồn lực, vận hành bộ máy tinh gọn nhưng hiệu suất tối đa.",
    ],
    image: brain,
  },
  {
    title: "Data Marketing",
    tagline: "Tiếp thị thông minh dựa trên dữ liệu thực.",
    bullets: [
      "Cá nhân hóa trải nghiệm khách hàng trên đa điểm chạm.",
      "Phân tích sâu hành vi thị trường để tối ưu tỷ lệ chuyển đổi (ROI).",
      'Triển khai chiến dịch trúng đích, ngừng lãng phí ngân sách "mù".',
    ],
    image: dataImg,
  },
  {
    title: "Creative",
    tagline: "Sáng tạo bản sắc, chạm điểm rơi cảm xúc.",
    bullets: [
      "Sản xuất hình ảnh, video và phát triển nội dung marketing đa kênh.",
      "Branding: Thiết kế nhận diện và quản trị hệ sinh thái digital đa nền tảng.",
      "Xây dựng chiến lược sáng tạo và tối ưu quảng cáo để tăng trưởng doanh thu.",
    ],
    image: creativeImg,
  },
  {
    title: "Generative AI Platform",
    tagline: "Hệ thống sản xuất nội dung quy mô lớn.",
    bullets: [
      "x5 tốc độ output nội dung mà không tăng chi phí nhân sự.",
      "Tự động hóa quy trình thiết kế và phát triển ý tưởng sáng tạo.",
      "Đảm bảo tính đồng nhất thương hiệu trên mọi nền tảng số.",
    ],
    image: genaiImg,
  },
  {
    title: "Dashboard & Analytics",
    tagline: "Quản trị doanh nghiệp theo thời gian thực.",
    bullets: [
      "Hệ thống báo cáo minh bạch, nắm bắt mọi chỉ số kinh doanh 24/7.",
      "Ra quyết định chính xác dựa trên số liệu thực.",
      "Theo dõi sức khỏe thương hiệu và hiệu quả chiến dịch tức thời.",
    ],
    image: dashboardImg,
  },
];

/** SVZ "THE HUB": a light rounded panel holding a bento of the five products. */
export default function Solutions() {
  return (
    <section className={styles.section} id="solutions">
      <div className={styles.panel}>
        <header className={styles.head}>
          <p className="label" data-scramble="in">
            <b>03</b> — Giải pháp
          </p>
          <h2 className={`display ${styles.title} reveal`} data-split>
            <i className="mini">một</i>{"\u00a0"}điểm chạm <span className={styles.blue}>mọi giải pháp</span>
          </h2>
          <p className={`${styles.quote} reveal`}>
            Entersight không chỉ giúp bạn kể câu chuyện hay, chúng tôi xây dựng
            một bộ máy mạnh mẽ để hiện thực hóa câu chuyện đó bằng công nghệ số.
          </p>
        </header>

        <div className={styles.bento}>
          {solutions.map((s, i) => (
            <article
              key={s.title}
              id={`sol-${i}`}
              className={`${styles.tile} ${styles[`t${i}`]} reveal`}
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              tabIndex={0}
            >
              <div className={`${styles.media} wipe`}>
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 640px"
                />
              </div>
              <div className={styles.body}>
                <span className={styles.idx}>ETS / 0{i + 1}</span>
                <h3 className={styles.name}>{s.title}</h3>
                <p className={styles.tagline}>{s.tagline}</p>
                <ul className={styles.bullets}>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <a href="#contact" className={`${styles.tile} ${styles.t5} ${styles.ctaTile} reveal`} data-scramble>
            <span className={styles.idx}>Bắt đầu</span>
            <span className={styles.ctaText}>Tư vấn triển khai</span>
            <span className={styles.ctaArrow} aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
