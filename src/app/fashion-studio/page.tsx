import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import ScrollReveal from "@/components/ScrollReveal";
import DemoForm from "./DemoForm";
import { CloneMock, StudioMock, VideoMock } from "./Mocks";
import { PRODUCT, faqs, imageModes, kyeStats, quality, scriptRoles, workspace } from "./data";
import styles from "./fashion-studio.module.css";
import logo from "../../../public/figma/logo-reverse.png";
import library from "../../../public/fashion-studio/app-library.webp";
import search from "../../../public/fashion-studio/app-search.webp";
import blouses from "../../../public/fashion-studio/look-blouses.webp";
import stripes from "../../../public/fashion-studio/look-stripes.webp";

const title = `${PRODUCT} — Ảnh & video thời trang bằng AI | Entersight`;
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
  { label: "Video", href: "#video" },
  { label: "Chất lượng", href: "#quality" },
  { label: "KYE Agency", href: "#kye" },
];

/** [ 01 — Name ] section label from the design system. */
function Label({ no, children }: { no: string; children: React.ReactNode }) {
  return (
    <span className="label">
      <b>{no}</b> — {children}
    </span>
  );
}

export default function FashionStudio() {
  return (
    <div className={styles.page} id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollReveal />

      <header className={styles.bar}>
        <a href="#top" className={styles.wordmark} aria-label={`${PRODUCT} — về đầu trang`}>
          <Asterisk className={styles.wordmarkStar} />
          MUSE<span>Studio</span>
        </a>
        <Link href="/" className={styles.by} aria-label="Entersight — trang chủ">
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
            <div className={styles.heroCopy}>
              <Label no={PRODUCT}>AI Fashion Studio</Label>
              <h1 className={`display ${styles.h1}`}>
                <span className="mini">ảnh &amp; video</span> thời trang <span className="mini">từ</span> một{" "}
                <span className="lime">khung chat</span>
              </h1>
              <p className={styles.lead}>
                Đính kèm ảnh sản phẩm, chọn một chip, gửi. MUSE lên model, thử đồ, đổi pose, quay video affiliate có
                kịch bản và clone video từ clip mẫu. Mọi kết quả tự vào Thư viện, tìm lại bằng tiếng Việt.
              </p>
              <div className={styles.ctas}>
                <a href="#demo" className="btn btn--solid">
                  Liên hệ setup cho cửa hàng
                </a>
                <a href="#image" className="btn">
                  Xem tính năng
                </a>
              </div>
            </div>
            <div className={`reveal ${styles.heroMock}`}>
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

        {/* ---------- 01 image studio ---------- */}
        <section id="image" className={styles.section}>
          <div className={`container ${styles.split}`}>
            <div className={`reveal ${styles.intro}`}>
              <Label no="01">Studio · Ảnh</Label>
              <h2 className={`display ${styles.h2}`}>
                bảy việc, <span className="mini">một</span> khung chat
              </h2>
              <p className={styles.body}>
                Đổi chip không mất ảnh đã đính kèm, nên một bộ ảnh đi liền mạch từ ảnh sản phẩm tới lên model, đổi
                pose rồi makeup. Mỗi lần gửi là một cặp hỏi–đáp: mở lại tab vẫn thấy nguyên mạch việc đã làm.
              </p>
            </div>
            <ol className={styles.modes}>
              {imageModes.map((m, i) => (
                <li key={m.name} className="reveal">
                  <span className={styles.modeNo}>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{m.name}</h3>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- 02 video ---------- */}
        <section id="video" className={styles.panel}>
          <div className={`container ${styles.panelIn}`}>
            <div className={`reveal ${styles.intro}`}>
              <Label no="02">Studio · Video</Label>
              <h2 className={`display ${styles.h2}`}>
                từ sản phẩm <span className="mini">đến</span> <span className="lime">video affiliate</span>
              </h2>
              <p className={styles.body}>
                Nhập điểm bán của sản phẩm, MUSE viết kịch bản theo năm vai trò, mỗi scene là một chuyển động quay
                được. Người mẫu nói thành tiếng, kể cả tiếng Việt. Scene nào yếu thì sinh lại đúng scene đó, rồi
                ghép thành một video.
              </p>
              <ul className={styles.roles}>
                {scriptRoles.map((r) => (
                  <li key={r.role}>{r.role}</li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <VideoMock />
            </div>
          </div>
        </section>

        {/* ---------- 03 clone ---------- */}
        <section className={styles.section}>
          <div className={`container ${styles.split} ${styles.splitRev}`}>
            <div className="reveal">
              <CloneMock />
            </div>
            <div className={`reveal ${styles.intro}`}>
              <Label no="03">Clone Video</Label>
              <h2 className={`display ${styles.h2}`}>
                ba ô, <span className="mini">một</span> nút bấm
              </h2>
              <p className={styles.body}>
                Clip đang viral, người mẫu của brand, sản phẩm cần bán. MUSE chép lại chuyển động của clip mẫu lên
                người mẫu đang mặc đồ của bạn. Clip dài được chia đoạn quay song song; lịch sử clone tự bám lại job
                đang chạy khi bạn quay lại.
              </p>
            </div>
          </div>
        </section>

        {/* ---------- 04 quality ---------- */}
        <section id="quality" className={styles.section}>
          <div className="container">
            <div className={`reveal ${styles.intro} ${styles.introWide}`}>
              <Label no="04">Chất lượng</Label>
              <h2 className={`display ${styles.h2}`}>
                đúng chất liệu, <span className="mini">đúng</span> <span className="lime">gương mặt</span>
              </h2>
            </div>
            <ol className={styles.quality}>
              {quality.map((q) => (
                <li key={q.k} className="reveal">
                  <span className={styles.modeNo}>{q.k}</span>
                  <h3>{q.title}</h3>
                  <p>{q.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- 05 workspace ---------- */}
        <section className={styles.section}>
          <div className="container">
            <div className={`reveal ${styles.intro} ${styles.introWide}`}>
              <Label no="05">Thư viện &amp; tìm kiếm</Label>
              <h2 className={`display ${styles.h2}`}>
                kết quả <span className="mini">tự</span> về một kho
              </h2>
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

        {/* ---------- 06 KYE case ---------- */}
        <section id="kye" className={styles.section}>
          <div className={`container ${styles.case}`}>
            <div className={`reveal ${styles.caseImg}`}>
              <div className="wipe">
                <Image src={stripes} alt="" fill sizes="(max-width: 900px) 100vw, 520px" />
              </div>
            </div>
            <div className={`reveal ${styles.intro}`}>
              <Label no="06">KYE Agency</Label>
              <h2 className={`display ${styles.h2}`}>
                nền tảng <span className="mini">đã</span> <span className="lime">chạy thật</span>
              </h2>
              <p className={styles.body}>
                MUSE kế thừa phần lõi đang vận hành cùng agency styling KYE từ 04/2026: thư viện gắn thẻ AI, tìm kiếm
                tiếng Việt, thử đồ ảo và photoshoot AI.
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
              <Label no="07">Hỏi đáp</Label>
              <h2 className={`display ${styles.h2}`}>trước khi bắt đầu</h2>
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
              <Label no="08">Liên hệ</Label>
              <h2 className={`display ${styles.h2}`}>
                MUSE <span className="mini">cho</span> <span className="lime">cửa hàng của bạn</span>
              </h2>
              <p className={styles.body}>
                Để lại số điện thoại. Entersight liên hệ để setup MUSE Studio cho cửa hàng của bạn và chạy thử
                trên chính ảnh sản phẩm của bạn.
              </p>
            </div>
            <DemoForm />
          </div>
        </section>
      </main>

      <footer className={`container ${styles.foot}`}>
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
