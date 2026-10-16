import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import Display from "./Display";
import LeadForm from "./LeadForm";
import { Analytics, HeroStack, StepMock } from "./Mocks";
import Motion from "./Motion";
import Roleplay from "./Roleplay";
import { PRODUCT, facts, faqs, features, fitFor, managerPoints, personas, principles, steps, whys } from "./data";
import styles from "./lms.module.css";
import entersight from "../../../public/figma/logo-full.png";
import logo from "../../../public/lms/enterlms-logo.svg";

const title = `${PRODUCT} — Sale mới vững tay trước khi gặp khách | Entersight`;
const description =
  "EnterLMS biến tài liệu và đoạn chat chốt đơn của công ty bạn thành bài học, bài thi và buổi luyện với khách ảo do AI đóng vai. Chấm theo 6 kỹ năng bán hàng. Đặt lịch demo.";

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
  { label: "Cho quản lý", href: "#managers" },
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
        {/* ---------- hero: the outcome, and the product doing it ---------- */}
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
                <b>{PRODUCT}</b> — Đào tạo sale bằng AI
              </span>
              <Display
                as="h1"
                onLoad
                className={styles.h1}
                runs={["sale mới vững tay", { hl: "trước khi gặp khách" }]}
              />
              <p className={`${styles.lead} ${styles.rise}`} style={d(3)}>
                {PRODUCT} biến tài liệu nội bộ và các đoạn chat chốt đơn của chính
                công ty bạn thành bài học, bài thi và buổi luyện với khách ảo do AI
                đóng vai. Trưởng nhóm chỉ cần duyệt.
              </p>
              <div className={`${styles.ctas} ${styles.rise}`} style={d(4)}>
                <a href="#contact" className={`${styles.btn} ${styles.solid}`}>
                  Đặt lịch demo
                </a>
                <a href="#how" className={styles.btn}>
                  Xem cách hoạt động
                </a>
              </div>
            </div>
            <HeroStack />
          </div>
        </section>

        {/* ---------- product facts ---------- */}
        <section className={styles.factsBand} aria-label={`${PRODUCT} trong 4 con số`}>
          <ul className={`${styles.wrap} ${styles.factsList}`}>
            {facts.map((f, i) => (
              <li key={f.label} data-reveal style={d(i)}>
                <b>
                  <span data-count>{f.value}</span>
                  <small>{f.unit}</small>
                </b>
                <span>{f.label}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------- problem → answer ---------- */}
        <section className={styles.section} id="why">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="01">Vì sao</Label>
              <Display className={styles.h2} runs={["đào tạo sale", { hl: "đang tốn người giỏi nhất" }]} />
            </div>
            <ol className={styles.whys}>
              {whys.map((w, i) => (
                <li key={w.pain} data-reveal style={d(i)}>
                  <span className={styles.num}>0{i + 1}</span>
                  <p className={styles.pain}>{w.pain}</p>
                  <p className={styles.fix}>
                    <b>{PRODUCT}</b>
                    {w.fix}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- how it works: a mock per step ---------- */}
        <section className={`${styles.panel} ${styles.blue}`} id="how">
          <span className={styles.panelStarWrap} aria-hidden="true">
            <span data-spin>
              <Asterisk className={styles.panelStar} />
            </span>
          </span>
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="02">Cách hoạt động</Label>
              <Display className={styles.h2} runs={["từ ca chốt đơn thật", { hl: "đến người bán được" }]} />
            </div>
            <ol className={styles.journey} data-track>
              {steps.map((s, i) => (
                <li key={s.title} className={styles.jStep}>
                  <div className={styles.jText} data-reveal>
                    <span className={styles.stepNo}>0{i + 1}</span>
                    <span className={styles.who}>{s.who}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                  <div className={styles.jMock} data-reveal style={d(1)}>
                    <StepMock step={i} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- roleplay: night panel ---------- */}
        <section className={`${styles.panel} ${styles.night}`} id="roleplay">
          <div className={`${styles.wrap} ${styles.split}`}>
            <div className={styles.intro} data-reveal>
              <Label no="03">Luyện chat với AI</Label>
              <Display className={styles.h2} runs={["luyện với khách ảo,", { hl: "nhận điểm thật" }]} />
              <p className={styles.sub}>
                AI đóng vai khách theo chân dung và cảm xúc rút từ chính các ca của công
                ty: {personas.join(", ").toLowerCase()}. Kết thúc buổi, AI chấm điểm tổng
                và theo 6 kỹ năng; quản lý xem lại và sửa điểm được.
              </p>
            </div>
            <Roleplay />
          </div>
        </section>

        {/* ---------- for managers ---------- */}
        <section className={styles.section} id="managers">
          <div className={`${styles.wrap} ${styles.split} ${styles.splitTop}`}>
            <div className={styles.intro} data-reveal>
              <Label no="04">Cho quản lý</Label>
              <Display className={styles.h2} runs={["biết đội", { hl: "yếu ở đâu" }]} />
              <ul className={styles.points}>
                {managerPoints.map((p) => (
                  <li key={p.title}>
                    <b>{p.title}</b>
                    <span>{p.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={d(1)}>
              <Analytics />
            </div>
          </div>
        </section>

        {/* ---------- features + principles ---------- */}
        <section className={styles.section} id="features">
          <div className={styles.wrap}>
            <div className={styles.intro} data-reveal>
              <Label no="05">Tính năng</Label>
              <Display className={styles.h2} runs={["đủ cho cả", { hl: "vòng onboarding" }]} />
            </div>
            {(
              [
                ["Đào tạo", "Cho đội đào tạo & quản lý", "/admin"],
                ["Nhân viên", "Cho nhân viên sale", "/learn"],
              ] as const
            ).map(([group, head, path]) => (
              <div key={group} className={styles.tileGroup}>
                <h3 className={styles.tileHead}>
                  {head} <small>{path}</small>
                </h3>
                <ul className={styles.tiles}>
                  {features
                    .filter((f) => f.for === group)
                    .map((f, i) => (
                      <li key={f.title} data-reveal style={d(i % 3)}>
                        <b>{f.title}</b>
                        <p>{f.body}</p>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            <ul className={styles.principles} aria-label="An tâm khi dùng AI">
              {principles.map((p, i) => (
                <li key={p.title} data-reveal style={d(i)}>
                  <span className={styles.pdot} aria-hidden="true" />
                  <b>{p.title}</b>
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
              <Label no="06">Hỏi đáp</Label>
              <Display className={styles.h2} runs={["câu hỏi thường gặp"]} />
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
          <div className={`${styles.wrap} ${styles.split} ${styles.splitTop}`}>
            <div className={styles.intro} data-reveal>
              <Label no="07">Đặt lịch demo</Label>
              <Display className={styles.h2} runs={["xem đội của bạn", { hl: "luyện thử" }]} />
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
