import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DemoForm from "./DemoForm";
import styles from "./fashion-studio.module.css";
import logo from "../../../public/figma/logo-full.png";
import library from "../../../public/fashion-studio/app-library.webp";
import search from "../../../public/fashion-studio/app-search.webp";
import studio from "../../../public/fashion-studio/app-studio.webp";
import stripes from "../../../public/fashion-studio/look-stripes.webp";
import jackets from "../../../public/fashion-studio/look-jackets.webp";
import blouses from "../../../public/fashion-studio/look-blouses.webp";
import knit from "../../../public/fashion-studio/look-knit.webp";

// One geometric sans for every role (the reference system's single-family rule).
// Be Vietnam Pro instead of DM Sans: DM Sans ships no Vietnamese subset.
const sans = Be_Vietnam_Pro({
  variable: "--nf-fs",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const title = "Fashion Studio — Studio AI cho stylist thời trang | Entersight";
const description =
  "Thư viện ảnh gắn thẻ AI, tìm kiếm bằng tiếng Việt, Virtual Try-On và photoshoot AI trong một màn hình. Đang vận hành cùng KYE Agency.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fashion-studio" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/fashion-studio",
    siteName: "Entersight",
    title,
    description,
    images: [{ url: "/fashion-studio/app-library.webp", width: 1680, height: 780 }],
  },
};

// All-time counts from the KYE account audit log, 11 Apr – 14 Oct 2026.
const stats = [
  { n: "4.513", label: "ảnh trong thư viện KYE, gắn thẻ bằng AI" },
  { n: "6.999", label: "món đồ AI tách ra từ ảnh outfit" },
  { n: "408", label: "ảnh photoshoot AI từ 44 phiên Studio" },
  { n: "129", label: "lượt thử đồ ảo trên ảnh khách" },
];

const pillars = [
  {
    img: stripes,
    title: "Thư viện ảnh AI",
    text: "Mỗi ảnh có tên, tag, màu, chất liệu, phong cách. Ảnh outfit được tách thành từng món.",
    tags: ["Gắn thẻ tự động", "Gom nhóm sản phẩm"],
  },
  {
    img: knit,
    title: "Smart Search",
    text: "Gõ “váy cúp ngực đen” như nói chuyện, hoặc tải ảnh lên để tìm món tương tự.",
    tags: ["Tiếng Việt", "Tìm bằng ảnh"],
  },
  {
    img: blouses,
    title: "Virtual Try-On",
    text: "Đặt quần áo, makeup, tóc, phụ kiện lên ảnh của chính khách hàng.",
    tags: ["1–10 sản phẩm", "Chỉnh 5 vòng"],
  },
  {
    img: jackets,
    title: "Fashion Studio Pro",
    text: "Photoshoot AI 3 bước: chọn người mẫu, chọn trang phục, cấu hình và tạo ảnh.",
    tags: ["2K / 4K", "Tối đa 4 góc máy"],
  },
];

const pains = [
  "Ảnh lookbook nằm rải rác trong Drive, Zalo và máy cá nhân",
  "Tìm một chiếc đầm ren đen mất cả buổi lục thư mục",
  "Khách khó hình dung outfit trên chính cơ thể mình",
  "Mỗi bộ ảnh concept cần người mẫu, studio và hậu kỳ",
];

const steps = [
  {
    k: "01",
    title: "Talent",
    text: "Chọn người mẫu hoặc KOL từ thư viện Models, dùng lại cho mọi phiên.",
  },
  {
    k: "02",
    title: "Wardrobe",
    text: "Kéo tối đa ~12 món từ thư viện ảnh vào phiên chụp.",
  },
  {
    k: "03",
    title: "Configure & generate",
    text: "Chọn concept, góc máy (≤ 4), độ phân giải 2K/4K. Tạo ảnh, rồi chỉnh từng tấm bằng lời.",
  },
];

const features = [
  ["Tải ảnh & gắn thẻ AI", "Chế độ live, hoặc batch rẻ hơn cho lô lớn"],
  ["Gom nhóm sản phẩm", "AI gợi ý ảnh cùng một món, người duyệt quyết định"],
  ["Quản lý tài sản", "Sửa tên, tag, nhóm; di chuyển, xoá ảnh"],
  ["Smart Search", "Chip danh mục, màu, chất liệu; đặt điều kiện cứng hoặc mềm"],
  ["Virtual Try-On", "Thử đồ trên ảnh khách, lưu kết quả về thư viện"],
  ["Fashion Studio Pro", "Phiên chụp tự lưu, mở lại làm tiếp bất cứ lúc nào"],
  ["Concept & phân tích màu", "Brief chụp ảnh, mùa màu cá nhân, bảng màu makeup"],
  ["Thư viện Models / KOL", "Dùng lại người mẫu, chia sẻ với cộng sự"],
  ["Moodboard", "Gom ảnh cảm hứng, chia sẻ với cộng sự"],
  ["Thư viện prompt", "Lưu câu lệnh hay để dùng lại khi tạo ảnh"],
  ["Chrome extension", "Lưu ảnh từ web thẳng vào thư viện"],
];

const kye = [
  ["847", "lần xác nhận gom nhóm sản phẩm"],
  ["290", "lần chỉnh sửa metadata ảnh"],
  ["12", "moodboard với 150 ảnh"],
  ["8", "người mẫu trong thư viện Models"],
];

export default function FashionStudio() {
  return (
    <div className={`${sans.variable} ${styles.page}`}>
      <header className={styles.nav}>
        <div className={styles.navIn}>
          <Link href="/fashion-studio" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              FS
            </span>
            Fashion Studio
          </Link>
          <nav className={styles.navLinks} aria-label="Điều hướng">
            <a href="#features">Tính năng</a>
            <a href="#workflow">Quy trình</a>
            <a href="#kye">KYE Agency</a>
          </nav>
          <a href="#demo" className={styles.btnPill}>
            Đặt lịch demo
          </a>
        </div>
      </header>

      <main>
        {/* Hero — split: display headline left, pitch + actions right */}
        <section className={`${styles.wrap} ${styles.hero}`}>
          <div>
            <p className={styles.badges}>
              <span className={styles.badgeEmber}>Live</span>
              <span className={styles.tag}>Đang vận hành cùng KYE Agency</span>
            </p>
            <h1 className={styles.display}>Từ kho ảnh đến photoshoot, một studio AI cho stylist.</h1>
          </div>
          <div className={styles.heroSide}>
            <p className={styles.lead}>
              Fashion Studio gom thư viện ảnh, tìm kiếm, thử đồ ảo và chụp ảnh AI vào một màn hình. Mọi
              kết quả AI đều bằng tiếng Việt.
            </p>
            <div className={styles.actions}>
              <a href="#demo" className={styles.btnDark}>
                Đặt lịch demo
              </a>
              <a href="#features" className={styles.btnLight}>
                Xem tính năng
              </a>
            </div>
          </div>
        </section>

        {/* Product shot */}
        <section className={styles.wrap}>
          <figure className={styles.shot}>
            <Image
              src={library}
              alt="Màn hình Thư viện hình ảnh: tìm kiếm bằng ngôn ngữ tự nhiên, bộ lọc và tải ảnh lên với AI"
              sizes="(max-width: 1240px) 100vw, 1200px"
              priority
            />
          </figure>
          <p className={styles.caption}>Thư viện của KYE Agency: 2.124 kết quả, lọc theo danh mục, màu, chất liệu, bộ sưu tập.</p>
        </section>

        {/* Stats row */}
        <section className={`${styles.wrap} ${styles.section}`} aria-label="Số liệu">
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.n}>
                <strong>{s.n}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.source}>Tài khoản KYE Agency, 11/04 – 14/10/2026.</p>
        </section>

        {/* Pillars — image-top category cards */}
        <section id="features" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Bốn trụ cột, một luồng làm việc.</h2>
            <p className={styles.headNote}>Đăng nhập Google, mọi thứ nằm trong một dashboard.</p>
          </div>
          <ul className={styles.pillars}>
            {pillars.map((p) => (
              <li key={p.title} className={styles.card}>
                <div className={styles.cardImg}>
                  <Image src={p.img} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 280px" />
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.h3}>{p.title}</h3>
                  <p>{p.text}</p>
                  <p className={styles.tags}>
                    {p.tags.map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Pain points — dark feature block */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.dark}>
            <div>
              <p className={styles.eyebrowDark}>Vấn đề</p>
              <h2 className={styles.h2Dark}>Stylist giỏi nhưng đang mất giờ vào việc không phải styling.</h2>
            </div>
            <ul className={styles.pains}>
              {pains.map((p) => (
                <li key={p}>
                  <span aria-hidden="true">→</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Smart Search */}
        <section className={`${styles.wrap} ${styles.section} ${styles.split}`}>
          <div>
            <p className={styles.eyebrow}>Smart Search</p>
            <h2 className={styles.h2}>Tìm như nói chuyện.</h2>
            <p className={styles.body}>
              Gõ “đầm ren”, AI tách ra danh mục và chất liệu, báo trước số kết quả khớp. Chỉnh chip, đặt
              điều kiện cứng hoặc mềm, rồi mới tìm. Hoặc tải một tấm ảnh để tìm món tương tự.
            </p>
          </div>
          <figure className={styles.shotSmall}>
            <Image src={search} alt="Smart Search xác nhận từ khoá “đầm ren”: Đầm/Dress, chất liệu Ren, ~240 kết quả khớp" sizes="(max-width: 900px) 100vw, 600px" />
          </figure>
        </section>

        {/* Workflow */}
        <section id="workflow" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Photoshoot AI trong 3 bước.</h2>
            <p className={styles.headNote}>Phiên chụp tự lưu và mở lại được.</p>
          </div>
          <ol className={styles.steps}>
            {steps.map((s) => (
              <li key={s.k} className={styles.step}>
                <span className={styles.stepK}>{s.k}</span>
                <h3 className={styles.h3}>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <figure className={styles.shot}>
            <Image
              src={studio}
              alt="Màn hình AI Studio: danh sách phiên, concept Luxury Editorial, góc chụp 3/4 và chân dung, đầu ra 2K"
              sizes="(max-width: 1240px) 100vw, 1200px"
            />
          </figure>
          <p className={styles.caption}>Giao diện AI Studio (minh hoạ, dữ liệu mẫu).</p>
        </section>

        {/* Breakthrough image */}
        <div className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.breath}>
            <Image src={blouses} alt="" fill sizes="(max-width: 1240px) 100vw, 1200px" />
          </div>
        </div>

        {/* Full feature list */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>11 tính năng, không cần thêm công cụ.</h2>
          </div>
          <ul className={styles.features}>
            {features.map(([t, d]) => (
              <li key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* KYE case */}
        <section id="kye" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.case}>
            <div className={styles.caseText}>
              <p className={styles.badges}>
                <span className={styles.badgeEmber}>Khách hàng đầu tiên</span>
              </p>
              <h2 className={styles.h2}>KYE Agency dựng cả kho ảnh styling trên Fashion Studio.</h2>
              <p className={styles.body}>
                Agency styling KYE dùng Fashion Studio từ 04/2026: tải và gắn thẻ hàng nghìn ảnh sản phẩm,
                gom nhóm theo từng món, thử đồ trên ảnh khách và chạy photoshoot AI cho concept mới.
              </p>
              <ul className={styles.caseStats}>
                {kye.map(([n, l]) => (
                  <li key={l}>
                    <strong>{n}</strong>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.caseImg}>
              <Image src={stripes} alt="" fill sizes="(max-width: 900px) 100vw, 480px" />
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="demo" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.cta}>
            <div>
              <h2 className={styles.h2Dark}>Xem Fashion Studio chạy trên ảnh của bạn.</h2>
              <p className={styles.ctaNote}>Để lại số điện thoại, Entersight sẽ liên hệ hẹn lịch demo trên thư viện mẫu hoặc ảnh của agency bạn.</p>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>

      <footer className={`${styles.wrap} ${styles.foot}`}>
        <Link href="/" aria-label="Entersight — trang chủ">
          <Image src={logo} alt="Entersight" className={styles.footLogo} />
        </Link>
        <span>
          © {new Date().getFullYear()} Entersight ·{" "}
          <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
        </span>
      </footer>
    </div>
  );
}
