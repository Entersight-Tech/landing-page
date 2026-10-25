import Image, { type StaticImageData } from "next/image";
import styles from "./Solutions.module.css";
import lmsImg from "../app/lms/opengraph-image.jpg";
import etstarImg from "../app/etstar/opengraph-image.jpg";

type Service = { name: string; what: string; example: { label: string; href: string } };

const services: Service[] = [
  {
    name: "Tự động hoá vận hành",
    what: "Đặt phòng, chốt đơn, chăm sóc khách, báo cáo cuối ngày — việc nào đang làm tay, chúng tôi đưa lên hệ thống và gắn AI vào đúng chỗ cần.",
    example: { label: "Oni Homestay: check-in không cần lễ tân", href: "#case-oni" },
  },
  {
    name: "Marketing theo dữ liệu",
    what: "Nối quảng cáo với đơn hàng để biết đồng nào đang có lời, cắt tệp sai, viết lại kịch bản chốt lead.",
    example: { label: "MỘT: ROAS trung bình 8.0", href: "#case-mot" },
  },
  {
    name: "Creative & nội dung",
    what: "Nhận diện, key visual, social, video — do đội LauLau Creative làm, có AI tạo ảnh để ra nhanh hơn mà vẫn giữ chất thương hiệu.",
    example: { label: "Xem portfolio LauLau Creative", href: "#work" },
  },
  {
    name: "Dashboard & báo cáo",
    what: "Gom số bán hàng, quảng cáo và vận hành về một màn hình. Sáng ra mở điện thoại là biết hôm qua thế nào.",
    example: { label: "Nói chuyện về dữ liệu của bạn", href: "#contact" },
  },
];

type Product = { name: string; line: string; href: string; image: StaticImageData | string; position?: string };

const products: Product[] = [
  {
    name: "ETStar",
    line: "Thêm review thật trên Google Maps: khách quét QR, AI giúp viết, khách tự đăng.",
    href: "/etstar",
    image: etstarImg,
    position: "left center",
  },
  {
    name: "EnterLMS",
    line: "Sale mới luyện với khách ảo do AI đóng vai, trước khi gặp khách thật.",
    href: "/lms",
    image: lmsImg,
    position: "left center",
  },
  {
    name: "MUSE Studio",
    line: "Lên model, try-on, đổi pose và video thời trang trong một khung chat tiếng Việt.",
    href: "/fashion-studio",
    image: "/fashion-studio/look-knit.webp",
  },
];

export default function Solutions() {
  return (
    <section className={`${styles.section} light`} id="solutions" aria-labelledby="solutions-title">
      <div className="container">
        <header className={styles.head}>
          <h2 id="solutions-title" className="h2 reveal">
            Việc chúng tôi nhận làm
          </h2>
          <p className="lede reveal">
            Bốn mảng, một đầu mối: bạn không phải tự ghép agency quảng cáo, bên
            làm phần mềm và người làm nội dung. Một đội làm từ đầu đến cuối, nhìn
            chung một bảng số.
          </p>
        </header>

        <ol className={styles.services}>
          {services.map((s) => (
            <li key={s.name} className={`${styles.service} reveal`}>
              <h3 className={styles.name}>{s.name}</h3>
              <p className={styles.what}>{s.what}</p>
              <a href={s.example.href} className={styles.example}>
                {s.example.label} <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ol>

        <div className={styles.productsHead} id="products">
          <h3 className={`${styles.productsTitle} reveal`}>
            Và vài sản phẩm chúng tôi tự làm, dùng được ngay.
          </h3>
        </div>

        <ul className={styles.products}>
          {products.map((p, i) => (
            <li key={p.name} className="reveal" style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}>
              <a href={p.href} className={styles.product}>
                <span className={styles.media}>
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 860px) 92vw, 30vw"
                    style={{ objectPosition: p.position }}
                  />
                </span>
                <span className={styles.productName}>
                  {p.name} <span aria-hidden="true">↗</span>
                </span>
                <span className={styles.productLine}>{p.line}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
