import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DemoForm from "./DemoForm";
import styles from "./muse.module.css";
import logo from "../../../public/figma/logo-full.png";
import hero from "../../../public/muse/hero.webp";
import stripes from "../../../public/muse/stripes.webp";
import jackets from "../../../public/muse/jackets.webp";
import blouses from "../../../public/muse/blouses.webp";

// One geometric sans for every role. Be Vietnam Pro: full Vietnamese coverage.
const sans = Be_Vietnam_Pro({
  variable: "--nf-fs",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const title = "MUSE Studio — Ảnh đăng bán và video TikTok không cần buổi chụp | Entersight";
const description =
  "MUSE Studio biến ảnh sản phẩm thời trang thành ảnh người mẫu, ảnh mặc thử gửi khách và video nhảy 9:16. Một màn hình, tiếng Việt, kiểm tra chất lượng tự động.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/muse" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/muse",
    siteName: "Entersight",
    title,
    description,
    images: [{ url: "/muse/hero.webp", width: 1160, height: 1454 }],
  },
};

// Platform track record: KYE Agency account audit log, 11 Apr – 14 Oct 2026.
// MUSE runs on the same back end (sign-in, AI tagging, search, storage).
const stats = [
  { n: "4.513", label: "ảnh sản phẩm được AI gắn thẻ" },
  { n: "6.999", label: "món đồ AI tách ra từ ảnh outfit" },
  { n: "408", label: "ảnh người mẫu AI từ 44 phiên chụp" },
  { n: "129", label: "lượt thử đồ ảo trên ảnh khách" },
];

const jobs = [
  {
    img: jackets,
    title: "Ảnh đăng bán",
    text: "Đưa sản phẩm lên người mẫu của shop, đúng form và chất liệu, sẵn cho trang sản phẩm.",
    tags: ["Shopee", "TikTok Shop", "Facebook"],
  },
  {
    img: blouses,
    title: "Ảnh mặc thử gửi khách",
    text: "Khách hỏi “mặc lên trông thế nào?”: có ảnh mặc thử để gửi ngay trong cuộc chat.",
    tags: ["Zalo", "Messenger"],
  },
  {
    img: null,
    title: "Video nhảy 9:16",
    text: "Chép chuyển động của một clip đang trend sang người mẫu của shop, mặc đúng món đồ.",
    tags: ["TikTok", "Reels", "≤ 60 giây"],
  },
];

const journey = [
  {
    k: "01",
    title: "Kho quần áo",
    text: "Tải ảnh sản phẩm một lần. AI đặt tên, gắn thẻ tiếng Việt và gom các ảnh cùng một món.",
  },
  {
    k: "02",
    title: "Người mẫu",
    text: "Tạo người mẫu riêng của shop: gương mặt, makeup, tóc, pose, bối cảnh. Dùng lại mãi mãi.",
  },
  {
    k: "03",
    title: "Ảnh mặc thử",
    text: "Chọn món đồ và người mẫu, chọn chế độ, bấm chạy. Có ảnh sau 20–90 giây.",
  },
  {
    k: "04",
    title: "Video nhảy",
    text: "Chọn clip mẫu 5–30 giây, người mẫu và món đồ. Có clip 9:16 sau khoảng 3–20 phút.",
  },
];

const pains = [
  "Mỗi mẫu mới lại phải thuê người mẫu, studio và hậu kỳ",
  "Khách nhắn hỏi “mặc lên ra sao” mà shop không có ảnh để gửi",
  "TikTok cần video mỗi ngày, đội quay không kịp số SKU",
  "Mỗi bộ ảnh một gương mặt khác, shop không có nhận diện",
];

const modes = [
  ["Lên Model", "Đưa sản phẩm lên người mẫu"],
  ["Try-On", "Mặc sản phẩm cho người mẫu, phần còn lại tự động"],
  ["Đổi Pose", "Đổi dáng, giữ nguyên form và chất liệu"],
  ["Makeup & Tóc", "Áp kiểu makeup, tóc; bật tắt từng lớp"],
  ["Đổi Model", "Đổi người, giữ trang phục, pose, bối cảnh"],
  ["Sửa ảnh", "Chỉnh nhỏ bằng một dòng mô tả, giữ gương mặt"],
  ["Packshot", "Từ ảnh người mẫu ra ảnh sản phẩm phẳng"],
  ["Ảnh → Video", "Cho người mẫu chuyển động thành clip ngắn"],
  ["Motion Transfer", "Chép chuyển động từ một clip tham chiếu"],
];

const trust = [
  {
    title: "Cùng một gương mặt",
    text: "Mỗi người mẫu được khoá gương mặt và makeup mặc định, nên ảnh và video nào cũng là cùng một người.",
  },
  {
    title: "Kiểm trước khi chạy",
    text: "Ảnh quá nhỏ, mờ, cháy sáng hay không thấy mặt bị chặn lại kèm hướng dẫn chụp lại. Lượt bị chặn không tốn phí.",
  },
  {
    title: "Kiểm sau khi ra ảnh",
    text: "Mỗi kết quả được kiểm gương mặt, khuôn mặt và bàn tay. Lỗi nặng tự chạy lại một lần.",
  },
  {
    title: "Biết chi phí trước",
    text: "Số credit hiện ngay cạnh nút chạy. Không có chi phí bất ngờ sau mỗi lượt.",
  },
];

const kye = [
  ["847", "lần xác nhận gom nhóm sản phẩm"],
  ["290", "lần chỉnh sửa thông tin ảnh"],
  ["12", "moodboard với 150 ảnh"],
  ["8", "người mẫu trong thư viện"],
];

// From the AI Video Automation quotation, 10/2026. Video price includes VAT;
// everything else excludes 10% VAT.
const plans = [
  {
    name: "Sản xuất video AI",
    price: "89.000đ",
    unit: "/ clip",
    note: "Đã gồm VAT",
    featured: true,
    items: [
      "Clip 15–20 giây, 1 phiên bản / clip",
      "Người mẫu AI mặc đúng sản phẩm, đúng phong cách thương hiệu",
      "Kiểm soát chất lượng từng batch, giao hàng tuần",
      "Cam kết 2.000 clip / tháng × 2 tháng (178.000.000đ / tháng)",
    ],
  },
  {
    name: "Thiết lập hệ thống",
    price: "50.000.000đ",
    unit: "một lần",
    note: "Chưa VAT",
    items: [
      "Luồng motion chuẩn hoá theo phong cách thương hiệu",
      "Toàn bộ MUSE Studio: Studio Ảnh, Studio Video, Clone Video, Elements, Thư viện, Moodboard, Thử đồ ảo",
      "Mặt mẫu AI riêng cho thương hiệu — tặng",
    ],
  },
  {
    name: "Vận hành & bảo trì",
    price: "5.240.000đ",
    unit: "/ tháng",
    note: "Chưa VAT · ≈ 200 USD, tỷ giá 26.200đ",
    items: ["Server và hạ tầng AI", "Bảo trì hệ thống"],
  },
];

const addons = [
  ["Motion tham chiếu tự động", "Tự cập nhật thư viện chuyển động từ nguồn tham chiếu bạn chỉ định", "30.000.000đ"],
  ["Sản xuất hàng loạt", "Tạo video theo lô lớn từ danh sách sản phẩm và mẫu đã duyệt", "22.500.000đ"],
  ["Motion nhóm 2 người", "Hai người trong cùng khung hình, cho đồ đôi và đồ gia đình", "37.500.000đ"],
];

const terms = [
  "Chỉnh sửa thẩm mỹ tối đa 2 vòng cho mỗi mẫu hoặc batch",
  "Clip lỗi kỹ thuật được làm lại miễn phí, tối đa 10% số clip mỗi tháng",
  "Clip chưa dùng trong tháng được chuyển sang tối đa 1 tháng kế tiếp",
  "Video thanh toán đầu mỗi tháng; thiết lập và tính năng mở rộng: 50% khi ký, 50% khi nghiệm thu",
  "Bạn có quyền sử dụng toàn bộ video được bàn giao",
];

export default function Muse() {
  return (
    <div className={`${sans.variable} ${styles.page}`}>
      <header className={styles.nav}>
        <div className={styles.navIn}>
          <Link href="/muse" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              M
            </span>
            MUSE Studio
          </Link>
          <nav className={styles.navLinks} aria-label="Điều hướng">
            <a href="#how">Cách hoạt động</a>
            <a href="#studio">Studio</a>
            <a href="#pricing">Bảng giá</a>
          </nav>
          <a href="#demo" className={styles.btnPill}>
            Đặt lịch demo
          </a>
        </div>
      </header>

      <main>
        {/* Hero — headline + actions left, photo right */}
        <section className={`${styles.wrap} ${styles.hero}`}>
          <div className={styles.heroText}>
            <p className={styles.badges}>
              <span className={styles.badgeAccent}>Mới</span>
              <span className={styles.tag}>Studio AI thời trang của Entersight</span>
            </p>
            <h1 className={styles.display}>Không cần buổi chụp. Đồ của shop thành ảnh đăng bán và video TikTok.</h1>
            <p className={styles.lead}>
              MUSE Studio biến ảnh sản phẩm thành ảnh người mẫu, ảnh mặc thử gửi khách và video nhảy 9:16. Một
              màn hình, toàn bộ bằng tiếng Việt, chạy được trên điện thoại.
            </p>
            <div className={styles.actions}>
              <a href="#demo" className={styles.btnDark}>
                Đặt lịch demo
              </a>
              <a href="#pricing" className={styles.btnLight}>
                Xem bảng giá
              </a>
            </div>
          </div>
          <figure className={styles.heroImg}>
            <Image src={hero} alt="Người mẫu mặc bộ nỉ vàng" fill priority sizes="(max-width: 900px) 100vw, 480px" />
          </figure>
        </section>

        {/* Stats row — platform track record */}
        <section className={`${styles.wrap} ${styles.section}`} aria-label="Số liệu">
          <ul className={styles.stats}>
            {stats.map((s) => (
              <li key={s.n}>
                <strong>{s.n}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.source}>
            Cùng nền tảng MUSE đang chạy, tài khoản KYE Agency, 11/04 – 14/10/2026.
          </p>
        </section>

        {/* Three jobs */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Một trang sản phẩm, ba việc.</h2>
            <p className={styles.headNote}>Mở bất kỳ món đồ nào trong Kho là có cả ba.</p>
          </div>
          <ul className={styles.jobs}>
            {jobs.map((j) => (
              <li key={j.title} className={styles.card}>
                <div className={j.img ? styles.cardImg : `${styles.cardImg} ${styles.cardVideo}`}>
                  {j.img ? (
                    <Image src={j.img} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 380px" />
                  ) : (
                    <span className={styles.play} aria-hidden="true">
                      <span>▶</span>
                      9:16
                    </span>
                  )}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.h3}>{j.title}</h3>
                  <p>{j.text}</p>
                  <p className={styles.tags}>
                    {j.tags.map((t) => (
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
              <h2 className={styles.h2Dark}>Số mẫu mỗi tháng nhiều hơn số buổi chụp shop kịp làm.</h2>
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

        {/* Customer journey */}
        <section id="how" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Bốn bước, từ ảnh sản phẩm đến video.</h2>
            <p className={styles.headNote}>Đăng nhập Google, hướng dẫn lần đầu đi trọn cả luồng.</p>
          </div>
          <ol className={styles.journey}>
            {journey.map((s) => (
              <li key={s.k} className={styles.step}>
                <span className={styles.stepK}>{s.k}</span>
                <h3 className={styles.h3}>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.caption}>
            Trang Tổng quan luôn hiện bước tiếp theo. Có thể đóng tab trong lúc chờ, kết quả vẫn về Kho.
          </p>
        </section>

        {/* Studio modes */}
        <section id="studio" className={`${styles.wrap} ${styles.section} ${styles.split}`}>
          <div>
            <p className={styles.eyebrow}>Studio ảnh</p>
            <h2 className={styles.h2}>Một ô chat, chín chế độ.</h2>
            <p className={styles.body}>
              Đính kèm ảnh, chọn một chế độ, thêm một dòng ghi chú nếu cần, rồi gửi. Đổi chế độ không mất ảnh
              đã đính kèm. Mỗi lần chạy ra 1–8 ảnh, vào thẳng Kho. Bạn không phải chọn engine AI: MUSE tự
              chọn cho từng việc.
            </p>
          </div>
          <ul className={styles.modes}>
            {modes.map(([m, d]) => (
              <li key={m}>
                <span className={styles.modeChip}>{m}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video clone */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.clone}>
            <div className={styles.cloneImg}>
              <Image src={stripes} alt="" fill sizes="(max-width: 900px) 100vw, 480px" />
              <span className={styles.cloneBadge}>9:16 · tối đa 60 giây</span>
            </div>
            <div className={styles.cloneText}>
              <p className={styles.eyebrow}>Video nhảy · Clone</p>
              <h2 className={styles.h2}>Clip đang trend, người mẫu của shop, đồ của shop.</h2>
              <p className={styles.body}>
                Chọn một clip mẫu 5–30 giây từ TikTok, một người mẫu và món đồ. MUSE chép lại chuyển động và
                xuất clip 9:16 cho TikTok và Reels, nhiều sản phẩm và nhiều góc trong một clip.
              </p>
              <ul className={styles.cloneFacts}>
                <li>
                  <strong>Nhanh</strong>
                  <span>khi cần số lượng</span>
                </li>
                <li>
                  <strong>Chất lượng</strong>
                  <span>khi cần clip đẹp nhất</span>
                </li>
                <li>
                  <strong>3–20 phút</strong>
                  <span>mỗi clip</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Chất lượng đều, chi phí rõ.</h2>
          </div>
          <ul className={styles.trust}>
            {trust.map((t) => (
              <li key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* KYE case */}
        <section className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.case}>
            <div className={styles.caseText}>
              <p className={styles.badges}>
                <span className={styles.badgeAccent}>Đã chạy thật</span>
              </p>
              <h2 className={styles.h2}>Xây trên nền tảng đã dựng kho ảnh cho KYE Agency.</h2>
              <p className={styles.body}>
                MUSE giữ lại phần đã chạy tốt ở KYE: đăng nhập, gắn thẻ AI, tìm kiếm và lưu trữ. Phần tạo ảnh
                được làm lại thành một studio dạng chat, thêm video và lớp kiểm tra chất lượng.
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
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.head}>
            <h2 className={styles.h2}>Bảng giá sản xuất video AI.</h2>
            <p className={styles.headNote}>Cho thương hiệu cần hàng nghìn clip mỗi tháng.</p>
          </div>
          <ul className={styles.plans}>
            {plans.map((p) => (
              <li key={p.name} className={p.featured ? `${styles.plan} ${styles.planFeatured}` : styles.plan}>
                <h3 className={styles.planName}>{p.name}</h3>
                <p className={styles.planPrice}>
                  <strong>{p.price}</strong> <span>{p.unit}</span>
                </p>
                <p className={styles.planNote}>{p.note}</p>
                <ul className={styles.planItems}>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className={styles.addons}>
            <div className={styles.addonsHead}>
              <h3 className={styles.h3}>Tính năng mở rộng</h3>
              <span className={styles.tag}>Tuỳ chọn · chưa VAT</span>
            </div>
            <ul>
              {addons.map(([n, d, p]) => (
                <li key={n}>
                  <span>
                    <strong>{n}</strong>
                    {d}
                  </span>
                  <b>{p}</b>
                </li>
              ))}
            </ul>
          </div>

          <details className={styles.terms}>
            <summary>Điều kiện áp dụng</summary>
            <ul>
              {terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </details>
          <p className={styles.source}>
            Giá video đã gồm VAT; các hạng mục khác chưa gồm 10% VAT. Cần ít hơn 2.000 clip mỗi tháng? Liên hệ để
            được tư vấn gói phù hợp.
          </p>
        </section>

        {/* Closing CTA */}
        <section id="demo" className={`${styles.wrap} ${styles.section}`}>
          <div className={styles.cta}>
            <div>
              <h2 className={styles.h2Dark}>Xem MUSE chạy trên chính sản phẩm của shop bạn.</h2>
              <p className={styles.ctaNote}>
                Để lại số điện thoại, Entersight sẽ liên hệ hẹn lịch demo với vài món đồ của bạn.
              </p>
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
          © {new Date().getFullYear()} Entersight · <a href="tel:0941233481">0941 233 481</a> ·{" "}
          <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
        </span>
      </footer>
    </div>
  );
}
