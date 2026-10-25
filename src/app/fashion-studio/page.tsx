import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import ScrollReveal from "@/components/ScrollReveal";
import DemoForm from "./DemoForm";
import { CloneMock, StudioMock, VideoMock } from "./Mocks";
import { PRODUCT, faqs, imageModes, kyeStats, lookbooks, quality, scriptRoles, workspace } from "./data";
import styles from "./fashion-studio.module.css";
import logo from "../../../public/figma/logo-reverse.png";
import library from "../../../public/fashion-studio/app-library.webp";
import search from "../../../public/fashion-studio/app-search.webp";
import blouses from "../../../public/fashion-studio/look-blouses.webp";
import stripes from "../../../public/fashion-studio/look-stripes.webp";
import suitInputOutfit from "../../../public/fashion-studio/real/suit-input-outfit.webp";
import suitInputBg from "../../../public/fashion-studio/real/suit-input-bg.webp";
import suitResultClose from "../../../public/fashion-studio/real/suit-result-close.webp";
import suitResultFull from "../../../public/fashion-studio/real/suit-result-full.webp";
import mintInputOutfit from "../../../public/fashion-studio/real/mint-input-outfit.webp";
import mintInputModel from "../../../public/fashion-studio/real/mint-input-model.webp";
import mintInputBg from "../../../public/fashion-studio/real/mint-input-bg.webp";
import mintResultFull from "../../../public/fashion-studio/real/mint-result-full.webp";
import mintResultAngle from "../../../public/fashion-studio/real/mint-result-angle.webp";
import mintResultDetail from "../../../public/fashion-studio/real/mint-result-detail.webp";

/** Lookbook images by the keys used in data.ts. */
const real = {
  "suit-input-outfit": suitInputOutfit,
  "suit-input-bg": suitInputBg,
  "suit-result-close": suitResultClose,
  "suit-result-full": suitResultFull,
  "mint-input-outfit": mintInputOutfit,
  "mint-input-model": mintInputModel,
  "mint-input-bg": mintInputBg,
  "mint-result-full": mintResultFull,
  "mint-result-angle": mintResultAngle,
  "mint-result-detail": mintResultDetail,
};

const title = `${PRODUCT}: ảnh & video thời trang bằng AI | Entersight`;
const description =
  "MUSE Studio: lên model, try-on, đổi pose, video affiliate có kịch bản và clone video từ clip mẫu, trong một khung chat tiếng Việt. Đang vận hành cùng KYE Agency.";

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
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: PRODUCT,
  applicationCategory: "DesignApplication",
  operatingSystem: "Web",
  inLanguage: "vi",
  description,
  url: "https://www.entersight-tech.com/fashion-studio",
  provider: {
    "@type": "Organization",
    name: "Entersight",
    url: "https://www.entersight-tech.com",
    email: "info@entersight-tech.com",
    telephone: "+84941233481",
  },
};

const nav = [
  { label: "Ảnh", href: "#image" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Video", href: "#video" },
  { label: "Chất lượng", href: "#quality" },
  { label: "KYE Agency", href: "#kye" },
];

export default function FashionStudio() {
  return (
    <div className={styles.page} id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollReveal />

      <header className={styles.bar}>
        <a href="#top" className={styles.wordmark} aria-label={`${PRODUCT}, về đầu trang`}>
          <Asterisk className={styles.wordmarkStar} />
          MUSE<span>Studio</span>
        </a>
        <Link href="/" className={styles.by} aria-label="Entersight, trang chủ">
          <span>bởi</span>
          <Image src={logo} alt="Entersight" />
        </Link>
        <nav className={styles.links} aria-label={PRODUCT}>
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#demo" className={`btn btn--solid ${styles.barCta}`}>
          Liên hệ setup
        </a>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Asterisk className={styles.heroStar} />
          <div className={`container ${styles.heroGrid}`}>
            <div className={styles.heroHead}>
              <h1 className={styles.h1}>
                Ảnh &amp; video
                <br className={styles.brWide} /> thời trang <span className="lime">qua chat</span>
              </h1>
            </div>
            <div className={styles.heroCopy}>
              <p className={styles.lead}>
                MUSE Studio là studio AI cho shop thời trang. Đính kèm ảnh sản phẩm, chọn việc cần làm, gửi. MUSE lên model, thử đồ, đổi pose, quay video affiliate có
                kịch bản và clone video từ clip mẫu. Mọi kết quả tự vào Thư viện, tìm lại bằng tiếng Việt.
              </p>
              <div className={styles.ctas}>
                <a href="#demo" className="btn btn--solid">
                  Liên hệ setup cho cửa hàng
                </a>
                <a href="#image" className="btn">
                  Xem 7 chế độ ảnh
                </a>
              </div>
            </div>
            <div className={styles.heroMock}>
              <StudioMock />
            </div>
          </div>
        </section>

        {/* ---------- facts ---------- */}
        <section className={styles.facts} aria-label={`${PRODUCT} trong 4 con số`}>
          <ul className="container">
            <li>
              <b>7</b>
              <span>chế độ ảnh trong một màn hình</span>
            </li>
            <li>
              <b>1–8</b>
              <span>ảnh mỗi lần gửi, mặc định 1</span>
            </li>
            <li>
              <b>5</b>
              <span>vai trò kịch bản cho mỗi video affiliate</span>
            </li>
            <li>
              <b>30s</b>
              <span>clip mẫu tối đa để clone</span>
            </li>
          </ul>
        </section>

        {/* ---------- image studio ---------- */}
        <section id="image" className={styles.section}>
          <div className={`container ${styles.split}`}>
            <div className={`reveal ${styles.intro}`}>
              <h2 className={styles.h2}>Bảy việc với ảnh, một khung chat</h2>
              <p className={styles.body}>
                Chuyển sang việc khác, ảnh đã đính kèm vẫn còn đó: từ ảnh sản phẩm lên model, đổi pose rồi makeup mà
                không phải tải ảnh lại. Mỗi lần gửi được lưu thành một cặp hỏi–đáp, mở lại tab vẫn thấy đủ việc đã làm.
              </p>
            </div>
            <ul className={styles.modes}>
              {imageModes.map((m) => (
                <li key={m.name} className="reveal">
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- lookbook (real runs) ---------- */}
        <section id="lookbook" className={styles.section}>
          <div className="container">
            <div className={`reveal ${styles.intro} ${styles.introWide}`}>
              <h2 className={styles.h2}>
                Ảnh của shop vào, <span className="lime">lookbook</span> ra
              </h2>
              <p className={styles.body}>
                Hai lần chạy MUSE trên ảnh có sẵn của shop: ảnh đưa vào khung chat, rồi ảnh MUSE trả về. Không dựng
                set, không thuê địa điểm.
              </p>
            </div>
            {lookbooks.map((lb) => (
              <article key={lb.title} className={styles.lookbook}>
                <div className={`reveal ${styles.lbHead}`}>
                  <h3>{lb.title}</h3>
                  <p>{lb.text}</p>
                </div>
                <div className={styles.lbFlow}>
                  <div className={`reveal ${styles.lbIn}`}>
                    <span className={styles.lbStep}>Đầu vào</span>
                    <ul style={{ gridTemplateColumns: `repeat(${lb.inputs.length}, minmax(0, 1fr))` }}>
                      {lb.inputs.map((im) => (
                        <li key={im.key}>
                          <div className="wipe">
                            <Image src={real[im.key]} alt={im.alt} sizes="(max-width: 960px) 30vw, 140px" />
                          </div>
                          <span>{im.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <svg className={styles.lbArrow} viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M4 16h22M18 8l8 8-8 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className={`reveal ${styles.lbOut}`}>
                    <span className={styles.lbStep}>Kết quả MUSE</span>
                    <ul>
                      {lb.results.map((im) => (
                        <li key={im.key}>
                          <div className="wipe">
                            <Image src={real[im.key]} alt={im.alt} sizes="(max-width: 960px) 75vw, 360px" />
                          </div>
                          <span>{im.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- video ---------- */}
        <section id="video" className={styles.panel}>
          <div className={`container ${styles.panelIn}`}>
            <div className={`reveal ${styles.intro}`}>
              <h2 className={styles.h2}>
                Từ sản phẩm đến <span className="lime">video affiliate</span>
              </h2>
              <p className={styles.body}>
                Nhập điểm bán của sản phẩm, MUSE viết kịch bản theo năm vai trò, mỗi scene là một chuyển động quay
                được. Người mẫu nói thành tiếng, kể cả tiếng Việt. Scene nào yếu thì sinh lại đúng scene đó, rồi
                ghép thành một video.
              </p>
              <ol className={styles.roles} aria-label="Thứ tự vai trò trong kịch bản">
                {scriptRoles.map((r) => (
                  <li key={r.role}>{r.role}</li>
                ))}
              </ol>
            </div>
            <div className="reveal">
              <VideoMock />
            </div>
          </div>
        </section>

        {/* ---------- clone ---------- */}
        <section className={styles.section}>
          <div className={`container ${styles.split} ${styles.splitRev}`}>
            <div className="reveal">
              <CloneMock />
            </div>
            <div className={`reveal ${styles.intro}`}>
              <h2 className={styles.h2}>Clone video: ba ô, một nút bấm</h2>
              <p className={styles.body}>
                Clip đang viral, người mẫu của brand, sản phẩm cần bán. MUSE chép lại chuyển động của clip mẫu lên
                người mẫu đang mặc đồ của bạn. Clip dài được chia đoạn và quay song song; tắt trang rồi quay lại, video
                đang chạy vẫn hiện trong lịch sử.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- quality ---------- */}
        <section id="quality" className={styles.section}>
          <div className="container">
            <div className={`reveal ${styles.intro} ${styles.introWide}`}>
              <h2 className={styles.h2}>Đúng chất liệu, đúng gương mặt</h2>
            </div>
            <ul className={styles.quality}>
              {quality.map((q) => (
                <li key={q.title} className="reveal">
                  <h3>{q.title}</h3>
                  <p>{q.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- workspace ---------- */}
        <section className={styles.section}>
          <div className="container">
            <div className={`reveal ${styles.intro} ${styles.introWide}`}>
              <h2 className={styles.h2}>Một thư viện, tìm bằng tiếng Việt</h2>
            </div>
            <figure className={`reveal ${styles.shot}`}>
              <div className="wipe">
                <Image
                  src={library}
                  alt="Màn hình Thư viện hình ảnh: tìm kiếm bằng ngôn ngữ tự nhiên, bộ lọc và tải ảnh lên với AI"
                  sizes="(max-width: 1320px) 100vw, 1240px"
                />
              </div>
              <figcaption>Thư viện của KYE Agency: lọc theo danh mục, màu, chất liệu, bộ sưu tập.</figcaption>
            </figure>
            <figure className={`reveal ${styles.shot} ${styles.shotNarrow}`}>
              <div className="wipe">
                <Image
                  src={search}
                  alt="Smart Search xác nhận từ khoá “đầm ren”: Đầm/Dress, chất liệu Ren, ~240 kết quả khớp"
                  sizes="(max-width: 800px) 100vw, 760px"
                />
              </div>
              <figcaption>Smart Search tách “đầm ren” thành danh mục và chất liệu, báo trước số kết quả.</figcaption>
            </figure>
            <ul className={styles.workspace}>
              {workspace.map(([t, d]) => (
                <li key={t} className="reveal">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- KYE case ---------- */}
        <section id="kye" className={styles.section}>
          <div className={`container ${styles.case}`}>
            <div className={`reveal ${styles.caseImg}`}>
              <div className="wipe">
                <Image src={stripes} alt="" fill sizes="(max-width: 900px) 100vw, 520px" />
              </div>
            </div>
            <div className={`reveal ${styles.intro}`}>
              <h2 className={styles.h2}>
                Đang chạy ở KYE Agency từ 04/2026
              </h2>
              <p className={styles.body}>
                MUSE dùng chung phần lõi với hệ thống của agency styling KYE: thư viện gắn thẻ AI, tìm kiếm tiếng
                Việt, thử đồ ảo và photoshoot AI.
              </p>
              <ul className={styles.stats}>
                {kyeStats.map((s) => (
                  <li key={s.n}>
                    <b>{s.n}</b>
                    <span>{s.label}</span>
                  </li>
                ))}
              </ul>
              <p className={styles.source}>Nhật ký tài khoản KYE Agency, 11/04 – 14/10/2026.</p>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className={styles.section}>
          <div className={`container ${styles.split}`}>
            <div className={`reveal ${styles.intro}`}>
              <h2 className={styles.h2}>Hỏi đáp trước khi bắt đầu</h2>
            </div>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <details key={f.q} className="reveal">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CTA ---------- */}
        <section id="demo" className={styles.cta}>
          <Asterisk className={styles.ctaStar} />
          <div className={styles.ctaImg} aria-hidden="true">
            <Image src={blouses} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" />
          </div>
          <div className={`container ${styles.ctaIn}`}>
            <div>
              <h2 className={styles.h2}>
                Chạy thử trên <span className="lime">ảnh của shop bạn</span>
              </h2>
              <p className={styles.body}>
                Để lại số điện thoại. Entersight gọi lại, setup MUSE Studio cho cửa hàng và chạy thử trên chính ảnh
                sản phẩm của bạn.
              </p>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>

      <footer className={`container ${styles.foot}`}>
        <Link href="/" aria-label="Entersight, trang chủ">
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
