import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import Display from "./Display";
import LeadForm from "./LeadForm";
import Motion from "./Motion";
import Roleplay from "./Roleplay";
import {
  PRODUCT,
  adminFeatures,
  compare,
  faqs,
  fitFor,
  levels,
  marquee,
  pains,
  principles,
  salesFeatures,
  steps,
} from "./data";
import styles from "./lms.module.css";
import entersight from "../../../public/figma/logo-full.png";
import logo from "../../../public/lms/enterlms-logo.svg";

const title = `${PRODUCT} — Đào tạo sale bằng AI từ ca chốt đơn thật | Entersight`;
const description =
  "Biến tài liệu nội bộ và đoạn chat bán hàng thật thành bài học, quiz và buổi luyện tập với AI đóng vai khách. Chấm điểm theo 6 kỹ năng bán hàng. Đặt lịch demo.";

// icon.svg, apple-icon.png and opengraph-image.jpg next to this file
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

// set before first paint so blocks that will animate start hidden (no flash);
// skipped under reduced motion, where everything simply shows
const motionFlag = `if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.setAttribute("data-lmsjs","")`;

const nav = [
  { label: "Cách hoạt động", href: "#how" },
  { label: "Luyện chat", href: "#roleplay" },
  { label: "So sánh", href: "#compare" },
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
    <div className={styles.page} data-lms id="top">
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={styles.bar}>
        <a href="#top" className={styles.home} aria-label={`${PRODUCT} — về đầu trang`}>
          <Image src={logo} alt={PRODUCT} priority />
        </a>
        <Link href="/" className={styles.by} aria-label="Entersight — trang chủ">
          <span>bởi</span>
          <Image src={entersight} alt="Entersight" />
        </Link>
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
        <span className={styles.progress} aria-hidden="true" />
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero} data-hero>
          <span className={styles.dot} data-dot aria-hidden="true" />
          <span className={styles.heroStarWrap} aria-hidden="true">
            <span data-spin>
              <Asterisk className={styles.heroStar} />
            </span>
          </span>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className={`${styles.label} ${styles.rise}`} style={d(0)}>
                <b>AI</b> — Đào tạo sale từ ca thật
              </span>
              <Display
                as="h1"
                onLoad
                className={styles.h1}
                runs={[{ mini: "biến" }, "ca chốt đơn thật", { mini: "thành" }, { hl: "giáo trình" }]}
              />
              <p className={`${styles.lead} ${styles.rise}`} style={d(4)}>
                {PRODUCT} đọc tài liệu nội bộ và đoạn chat bán hàng thật của bạn,
                soạn bài học và quiz, rồi cho nhân viên mới luyện với AI đóng vai
                khách — trước khi gặp khách thật.
              </p>
              <div className={`${styles.ctas} ${styles.rise}`} style={d(5)}>
                <a href="#contact" className={`${styles.btn} ${styles.solid}`}>
                  Đặt lịch demo
                </a>
                <a href="#roleplay" className={styles.btn}>
                  Xem AI đóng vai khách
                </a>
              </div>
              <ul className={`${styles.facts} ${styles.rise}`} style={d(6)}>
                <li>6 kỹ năng bán hàng được chấm điểm</li>
                <li>4 cấp: Newbie → Quản lý</li>
                <li>Giao diện tiếng Việt</li>
              </ul>
            </div>
            <div className={`${styles.heroCard} ${styles.rise}`} style={d(3)}>
              <Roleplay compact />
            </div>
          </div>
        </section>

        {/* ---------- marquee ---------- */}
        <div className={styles.marquee} aria-label="Điểm nổi bật">
          <div className={styles.marqueeTrack}>
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {marquee.map((m) => (
                  <li key={m}>
                    {m}
                    <Asterisk className={styles.marqueeStar} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* ---------- problem ---------- */}
        <section className={styles.section} id="problem">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="01">Vấn đề</Label>
              <Display className={styles.h2} runs={["đào tạo sale", { mini: "vẫn đang" }, "tốn người giỏi nhất"]} />
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
          <span className={styles.panelStarWrap} aria-hidden="true">
            <span data-spin>
              <Asterisk className={styles.panelStar} />
            </span>
          </span>
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="02">Cách hoạt động</Label>
              <Display
                className={styles.h2}
                runs={[{ mini: "bạn" }, "nạp kinh nghiệm", { mini: "AI" }, { hl: "soạn giáo trình" }]}
              />
              <p className={styles.sub}>
                Con người duyệt nội dung, nhân viên học và được chấm theo kỹ năng.
                Kết quả quay về Analytics, cho biết đội còn yếu ở đâu để mở khoá tiếp theo.
              </p>
            </div>
            <ol className={styles.steps} data-track>
              {steps.map((s, i) => (
                <li key={s.title}>
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
              <Display
                className={styles.h2}
                runs={[{ mini: "tập với" }, "khách khó", { mini: "mà không" }, { hl: "mất khách thật" }]}
              />
              <p className={styles.sub}>
                AI đóng vai khách theo chân dung và cảm xúc rút ra từ chính các ca
                của công ty. Kết thúc buổi, AI chấm điểm tổng và theo từng kỹ năng;
                quản lý xem lại hội thoại và có thể sửa điểm.
              </p>
            </div>
            <Roleplay />
          </div>
        </section>

        {/* ---------- before / after ---------- */}
        <section className={styles.section} id="compare">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="04">Trước & sau</Label>
              <Display className={styles.h2} runs={["onboarding", { mini: "khi có" }, { hl: PRODUCT }]} />
            </div>
            <div className={styles.compare} role="table" aria-label={`Cách cũ so với ${PRODUCT}`}>
              <div className={styles.cmpHead} role="row">
                <span role="columnheader">Việc</span>
                <span role="columnheader">Cách cũ</span>
                <span role="columnheader">Với {PRODUCT}</span>
              </div>
              {compare.map((c, i) => (
                <div key={c.topic} className={styles.cmpRow} role="row" data-reveal style={d(i)}>
                  <b role="rowheader">{c.topic}</b>
                  <span role="cell" className={styles.old}>
                    <s>{c.old}</s>
                  </span>
                  <span role="cell" className={styles.now}>
                    {c.now}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- features ---------- */}
        <section className={styles.section} id="features">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="05">Tính năng</Label>
              <Display className={styles.h2} runs={["một nền tảng", { mini: "cho" }, { hl: "cả hai phía" }]} />
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
              <Label no="06">Lộ trình</Label>
              <Display className={styles.h2} runs={[{ mini: "từ" }, "ngày đầu", { mini: "đến" }, "trưởng nhóm"]} />
              <p className={styles.subDark}>
                Mỗi khoá học gắn một cấp. AI dùng cấp này để chỉnh độ khó, và bạn ghi
                danh cả nhóm theo cấp chỉ một lần.
              </p>
            </div>
            <ol className={styles.levels}>
              {levels.map((l, i) => (
                <li key={l.name} data-reveal style={d(i * 2)}>
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
              <Label no="07">Nguyên tắc</Label>
              <Display className={styles.h2} runs={["AI làm nhanh", { mini: "con người" }, { hl: "quyết định" }]} />
            </div>
            <ul className={styles.principles}>
              {principles.map((p, i) => (
                <li key={p.title} data-reveal style={d(i)}>
                  <span className={styles.pdot} aria-hidden="true" />
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
              <Label no="08">Hỏi đáp</Label>
              <Display className={styles.h2} runs={["câu hỏi", { mini: "thường" }, "gặp"]} />
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
              <Label no="09">Đặt lịch demo</Label>
              <Display className={styles.h2} runs={[{ mini: "xem" }, "đội của bạn", { hl: "luyện thử" }]} />
              <p className={styles.sub}>
                Demo trên chính kịch bản bán hàng của bạn. {PRODUCT} hợp nhất khi:
              </p>
              <ul className={styles.fit}>
                {fitFor.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className={styles.sub}>
                Hoặc gọi / Zalo <a href="tel:0941233481">0941 233 481</a>.
              </p>
            </div>
            <div data-reveal style={d(1)}>
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={`${styles.wrap} ${styles.footIn}`}>
          <span>
            © {new Date().getFullYear()} {PRODUCT} · một sản phẩm của Entersight
          </span>
          <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
          <Link href="/#solutions">← Các giải pháp khác của Entersight</Link>
        </div>
      </footer>

      <a href="#contact" className={`${styles.btn} ${styles.solid} ${styles.stickyCta}`}>
        Đặt lịch demo
      </a>
      <Motion />
    </div>
  );
}
