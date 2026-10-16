import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import LeadForm from "./LeadForm";
import Motion from "./Motion";
import Roleplay from "./Roleplay";
import {
  PRODUCT,
  adminFeatures,
  faqs,
  levels,
  pains,
  principles,
  salesFeatures,
  steps,
} from "./data";
import styles from "./lms.module.css";
import logo from "../../../public/figma/logo-full.png";

const title = `${PRODUCT} — Đào tạo sale bằng AI từ ca chốt đơn thật | Entersight`;
const description =
  "Biến tài liệu nội bộ và đoạn chat bán hàng thật thành bài học, quiz và buổi luyện tập với AI đóng vai khách. Chấm điểm theo 6 kỹ năng bán hàng. Đặt lịch demo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/lms" },
  openGraph: { type: "website", locale: "vi_VN", url: "/lms", siteName: "Entersight", title, description },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: PRODUCT,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  inLanguage: "vi",
  description,
  url: "https://www.entersight-tech.com/lms",
  provider: {
    "@type": "Organization",
    name: "Entersight",
    url: "https://www.entersight-tech.com",
    email: "info@entersight-tech.com",
    telephone: "+84941233481",
  },
};

const nav = [
  { label: "Cách hoạt động", href: "#how" },
  { label: "Luyện chat", href: "#roleplay" },
  { label: "Tính năng", href: "#features" },
  { label: "Hỏi đáp", href: "#faq" },
];

/** [ 01 — Name ] section label from the design system. */
function Label({ no, children }: { no: string; children: React.ReactNode }) {
  return (
    <span className={styles.label}>
      <b>{no}</b> — {children}
    </span>
  );
}

/** Stagger index for a revealed item. */
const d = (i: number) => ({ "--d": i }) as React.CSSProperties;

export default function LmsPage() {
  return (
    <div className={styles.page} data-lms>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={styles.bar}>
        <Link href="/" className={styles.home} aria-label="Entersight — trang chủ">
          <Image src={logo} alt="Entersight" priority />
        </Link>
        <span className={styles.product}>{PRODUCT}</span>
        <nav className={styles.links} aria-label={PRODUCT}>
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className={`${styles.btn} ${styles.solid}`}>
          Đặt lịch demo
        </a>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Asterisk className={styles.heroStar} />
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <Label no="LMS">Đào tạo sale bằng AI</Label>
              <h1 className={`${styles.display} ${styles.h1}`}>
                <span className={styles.mini}>biến</span>ca chốt đơn thật{" "}
                <span className={styles.mini}>thành</span>
                <span className={styles.hl}>giáo trình</span>
              </h1>
              <p className={styles.lead}>
                {PRODUCT} đọc tài liệu nội bộ và đoạn chat bán hàng thật của bạn,
                soạn bài học và quiz, rồi cho nhân viên mới luyện với AI đóng vai
                khách — trước khi gặp khách thật.
              </p>
              <div className={styles.ctas}>
                <a href="#contact" className={`${styles.btn} ${styles.solid}`}>
                  Đặt lịch demo
                </a>
                <a href="#how" className={styles.btn}>
                  Xem cách hoạt động
                </a>
              </div>
              <ul className={styles.facts}>
                <li>6 kỹ năng bán hàng được chấm điểm</li>
                <li>4 cấp: Newbie → Quản lý</li>
                <li>Giao diện tiếng Việt</li>
              </ul>
            </div>
            <Roleplay compact />
          </div>
        </section>

        {/* ---------- problem ---------- */}
        <section className={styles.section} id="problem">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="01">Vấn đề</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                đào tạo sale <span className={styles.mini}>vẫn đang</span>tốn người giỏi nhất
              </h2>
            </div>
            <ol className={styles.pains}>
              {pains.map((p, i) => (
                <li key={p.title} data-reveal style={d(i)}>
                  <span className={styles.num}>0{i + 1}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- how it works: blue panel ---------- */}
        <section className={`${styles.panel} ${styles.blue}`} id="how">
          <Asterisk className={styles.panelStar} />
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="02">Cách hoạt động</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                <span className={styles.mini}>bạn</span>nạp kinh nghiệm{" "}
                <span className={styles.mini}>AI</span>
                <span className={styles.hl}>soạn giáo trình</span>
              </h2>
              <p className={styles.sub}>
                Con người duyệt nội dung, nhân viên học và được chấm theo kỹ năng.
                Kết quả quay về Analytics, cho biết đội còn yếu ở đâu để mở khoá tiếp theo.
              </p>
            </div>
            <ol className={styles.steps}>
              {steps.map((s, i) => (
                <li key={s.title} data-reveal style={d(i)}>
                  <span className={styles.stepNo}>0{i + 1}</span>
                  <span className={styles.who}>{s.who}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            <p className={styles.loop} data-reveal>
              <span aria-hidden="true">↻</span> Analytics → kỹ năng còn yếu → khoá học tiếp theo
            </p>
          </div>
        </section>

        {/* ---------- roleplay: night panel ---------- */}
        <section className={`${styles.panel} ${styles.night}`} id="roleplay">
          <div className={`${styles.wrap} ${styles.rpGrid}`}>
            <div className={styles.intro} data-reveal>
              <Label no="03">Luyện chat với AI</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                <span className={styles.mini}>tập với</span>khách khó{" "}
                <span className={styles.mini}>mà không</span>
                <span className={styles.hl}>mất khách thật</span>
              </h2>
              <p className={styles.sub}>
                AI đóng vai khách theo chân dung và cảm xúc rút ra từ chính các ca
                của công ty. Kết thúc buổi, AI chấm điểm tổng và theo từng kỹ năng;
                quản lý xem lại hội thoại và có thể sửa điểm.
              </p>
            </div>
            <Roleplay />
          </div>
        </section>

        {/* ---------- features ---------- */}
        <section className={styles.section} id="features">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="04">Tính năng</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                một nền tảng <span className={styles.mini}>cho</span>
                <span className={styles.hl}>cả hai phía</span>
              </h2>
            </div>
            <div className={styles.featGrid}>
              <div className={styles.featCol} data-reveal>
                <h3 className={styles.featHead}>
                  Đội đào tạo &amp; quản lý <small>/admin</small>
                </h3>
                <ul>
                  {adminFeatures.map((f) => (
                    <li key={f.title}>
                      <b>{f.title}</b>
                      <span>{f.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.featCol} data-reveal style={d(1)}>
                <h3 className={styles.featHead}>
                  Nhân viên sale <small>/learn</small>
                </h3>
                <ul>
                  {salesFeatures.map((f) => (
                    <li key={f.title}>
                      <b>{f.title}</b>
                      <span>{f.body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- levels ---------- */}
        <section className={styles.section} id="levels">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="05">Lộ trình</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                <span className={styles.mini}>từ</span>ngày đầu{" "}
                <span className={styles.mini}>đến</span>trưởng nhóm
              </h2>
              <p className={styles.subDark}>
                Mỗi khoá học gắn một cấp. AI dùng cấp này để chỉnh độ khó, và bạn ghi
                danh cả nhóm theo cấp chỉ một lần.
              </p>
            </div>
            <ol className={styles.levels}>
              {levels.map((l, i) => (
                <li key={l.name} data-reveal style={d(i)}>
                  <span className={styles.levelNo}>Cấp {i + 1}</span>
                  <h3>{l.name}</h3>
                  <p>{l.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- principles ---------- */}
        <section className={styles.section} id="trust">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="06">Nguyên tắc</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                AI làm nhanh <span className={styles.mini}>con người</span>
                <span className={styles.hl}>quyết định</span>
              </h2>
            </div>
            <ul className={styles.principles}>
              {principles.map((p, i) => (
                <li key={p.title} data-reveal style={d(i)}>
                  <span className={styles.dot} aria-hidden="true" />
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- faq ---------- */}
        <section className={styles.section} id="faq">
          <div className={`${styles.wrap} ${styles.faqGrid}`}>
            <div className={styles.intro} data-reveal>
              <Label no="07">Hỏi đáp</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                câu hỏi <span className={styles.mini}>thường</span>gặp
              </h2>
            </div>
            <div className={styles.faq}>
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- contact: blue panel ---------- */}
        <section className={`${styles.panel} ${styles.blue}`} id="contact">
          <div className={`${styles.wrap} ${styles.contactGrid}`}>
            <div className={styles.intro} data-reveal>
              <Label no="08">Đặt lịch demo</Label>
              <h2 className={`${styles.display} ${styles.h2}`}>
                <span className={styles.mini}>xem</span>đội của bạn{" "}
                <span className={styles.hl}>luyện thử</span>
              </h2>
              <p className={styles.sub}>
                Gửi vài thông tin, chúng tôi hẹn lịch demo trên chính kịch bản bán
                hàng của bạn. Hoặc gọi / Zalo <a href="tel:0941233481">0941 233 481</a>.
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={`${styles.wrap} ${styles.footIn}`}>
          <span>© {new Date().getFullYear()} Entersight · {PRODUCT}</span>
          <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
          <Link href="/#solutions">← Các giải pháp khác của Entersight</Link>
        </div>
      </footer>
      <Motion />
    </div>
  );
}
