import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Work_Sans } from "next/font/google";
import LeadForm from "./LeadForm";
import {
  BASE_PRICE,
  cases,
  faqs,
  formatVnd,
  included,
  industries,
  mapsList,
  pillars,
  questions,
  stats,
  steps,
  terms,
} from "./data";
import styles from "./review365.module.css";
import logo from "../../../public/figma/logo-full.png";
// generated product shots (Figma AI), backgrounds flattened to white
import mapShot from "../../../public/review365/map.webp";
import phoneShot from "../../../public/review365/phone.webp";
import qrShot from "../../../public/review365/qr.webp";

// Review365 has its own billboard look (white canvas, giant Work Sans 900
// words in lime / lavender, purple outlines) — scoped to this route.
const workSans = Work_Sans({
  variable: "--nf-work",
  weight: ["400", "500", "900"],
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const title = "Review365 — Thu hút khách mới trên Google Maps | Entersight";
const description =
  "Review365 giúp cửa hàng tăng review thật từ khách hàng qua QR & AI, phản hồi đa ngôn ngữ và tối ưu hiển thị Google Maps. Gói Đồng Hành từ 2.500.000đ/tháng.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/review365" },
  openGraph: { type: "website", locale: "vi_VN", url: "/review365", siteName: "Entersight", title, description },
};

const nav = [
  { label: "Cách hoạt động", href: "#how" },
  { label: "Kết quả", href: "#results" },
  { label: "Bảng giá", href: "#pricing" },
  { label: "Hỏi đáp", href: "#faq" },
];

/** Giant decorative word that sits behind a section — the billboard. */
function Billboard({ word, tone }: { word: string; tone: "lime" | "lavender" }) {
  return (
    <span className={`${styles.billboard} ${styles[tone]}`} aria-hidden="true">
      {word}
    </span>
  );
}

function Stars({ value }: { value: string }) {
  return (
    <span className={styles.rating}>
      {value} <span aria-hidden="true">★</span>
    </span>
  );
}

export default function Review365Page() {
  return (
    <div className={`${styles.page} ${workSans.variable}`}>
      <header className={styles.bar}>
        <Link href="/" className={styles.home} aria-label="Entersight — trang chủ">
          <Image src={logo} alt="Entersight" priority />
        </Link>
        <span className={styles.wordmark}>
          Review<b>365</b>
          <small>Google Maps · Review thật</small>
        </span>
        <nav className={styles.links} aria-label="Review365">
          {nav.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.btn}>
            Chẩn đoán miễn phí
          </a>
        </nav>
      </header>

      <main>
        {/* ---------- hero ---------- */}
        <section className={styles.hero}>
          <Billboard word="REVIEW" tone="lime" />
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroCopy}>
              <span className={styles.seal} aria-hidden="true">
                <svg viewBox="0 0 120 120">
                  <defs>
                    <path id="r365-ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
                  </defs>
                  <text>
                    <textPath href="#r365-ring">100% KHÁCH THẬT · 0 REVIEW ẢO ·</textPath>
                  </text>
                </svg>
                <b>★</b>
              </span>
              <p className={styles.tag}>Sản phẩm · Review365</p>
              <h1 className={styles.h1}>Thu hút khách mới trên Google Maps.</h1>
              <p className={styles.lead}>
                Review365 giúp cửa hàng có thêm đánh giá thật từ chính khách của
                mình, phản hồi mọi review đúng lúc và giữ uy tín trên Google Maps —
                không cần đội marketing riêng.
              </p>
              <div className={styles.ctas}>
                <a href="#contact" className={styles.pill}>
                  Chẩn đoán miễn phí <span aria-hidden="true">↗</span>
                </a>
                <a href="#how" className={styles.btn}>
                  Xem cách hoạt động
                </a>
              </div>
              <p className={styles.fine}>Không review ảo · Hóa đơn VAT · Hỗ trợ tiếng Việt</p>
            </div>

            <figure className={styles.phone} aria-label="Minh hoạ: danh sách cửa hàng gần đây trên Google Maps">
              <div className={styles.phoneTop}>
                <span>9:41</span>
                <span className={styles.search}>quán ăn gần đây</span>
              </div>
              <ol className={styles.list}>
                {mapsList.map((s, i) => (
                  <li key={s.name} className={i === 0 ? styles.top : undefined}>
                    <span className={styles.listName}>{s.name}</span>
                    <span className={styles.listMeta}>
                      <Stars value={s.rating} /> · {s.count} review
                    </span>
                    <span className={styles.listReply}>Phản hồi gần nhất: {s.reply}</span>
                  </li>
                ))}
                <li className={styles.you}>
                  <span className={styles.listName}>Cửa hàng của bạn?</span>
                  <span className={styles.listMeta}>
                    <Stars value="3.9" /> · 21 review
                  </span>
                  <span className={styles.listReply}>Ít thông tin để khách quyết định</span>
                </li>
              </ol>
            </figure>
          </div>

          <dl className={`${styles.wrap} ${styles.stats}`}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- problem ---------- */}
        <section className={styles.section}>
          <Billboard word="MAPS" tone="lavender" />
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <p className={styles.tag}>Mỗi ngày, khách vẫn đang tìm</p>
              <h2 className={styles.h2}>
                Cửa hàng làm tốt — nhưng khách mới có tìm thấy và tin bạn?
              </h2>
              <p className={styles.body}>
                Khách không biết bạn tốt đến đâu. Họ chỉ thấy số sao, lời khách cũ
                và tốc độ chủ quán phản hồi — rồi quyết định trong vài giây. Nếu hồ
                sơ yếu, khách sang quán bên cạnh mà bạn không hề biết.
              </p>
              <Image
                src={mapShot}
                alt="Bản đồ giấy với ghim định vị tím và ngôi sao lime"
                className={`${styles.photo} ${styles.problemPhoto}`}
                sizes="(max-width: 860px) 92vw, 520px"
              />
            </div>
            <ol className={styles.questions}>
              {questions.map((q, i) => (
                <li key={q.q}>
                  <span className={styles.num}>0{i + 1}</span>
                  <h3>{q.q}</h3>
                  <p>{q.a}</p>
                </li>
              ))}
            </ol>
          </div>
          <p className={`${styles.wrap} ${styles.warn}`}>
            <b>Mua review ảo là rủi ro thật.</b> Google liên tục gỡ review giả và
            có thể hạn chế hồ sơ vi phạm. Review365 chỉ làm với khách thật — khách
            tự chọn số sao và tự quyết định đăng.
          </p>
        </section>

        {/* ---------- three pillars ---------- */}
        <section className={styles.section} id="how">
          <Billboard word="365" tone="lime" />
          <div className={styles.wrap}>
            <div className={styles.pillarsHead}>
              <div>
                <p className={styles.tag}>Ba việc Review365 làm cùng bạn</p>
                <h2 className={styles.h2}>Thu hút. Chăm sóc. Bảo vệ.</h2>
              </div>
              <Image
                src={phoneShot}
                alt="Điện thoại hiển thị review 5 sao cạnh bát phở"
                className={styles.photo}
                sizes="(max-width: 860px) 92vw, 640px"
              />
            </div>
            <div className={styles.row3}>
              {pillars.map((p) => (
                <article key={p.tag} className={styles.pillar}>
                  <p className={styles.tag}>{p.tag}</p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <p className={styles.caption}>{p.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- QR flow + rollout ---------- */}
        <section className={styles.section}>
          <Billboard word="QR" tone="lavender" />
          <div className={`${styles.wrap} ${styles.split}`}>
            <div className={styles.qrCol}>
              <p className={styles.tag}>Một review thật ra đời thế nào</p>
              <h2 className={styles.h2}>Từ một lần quét QR đến một review trên Maps.</h2>
              <ol className={styles.flow}>
                <li>Khách quét QR tại bàn</li>
                <li>Trả lời khảo sát ngắn — chọn ngôn ngữ của mình</li>
                <li>AI soạn nháp review từ đúng trải nghiệm đó</li>
                <li>Khách xem lại, tự chỉnh và tự đăng lên Google Maps</li>
              </ol>
              <Image
                src={qrShot}
                alt="Standee QR đặt trên bàn cạnh ly cà phê sữa đá"
                className={`${styles.photo} ${styles.qrPhoto}`}
                sizes="(max-width: 860px) 92vw, 560px"
              />
            </div>

            <div>
              <p className={styles.tag}>Lộ trình triển khai</p>
              <ol className={styles.steps}>
                {steps.map((s, i) => (
                  <li key={s.title}>
                    <span className={styles.num}>0{i + 1}</span>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------- results ---------- */}
        <section className={styles.section} id="results">
          <Billboard word="TOP" tone="lime" />
          <div className={styles.wrap}>
            <p className={styles.tag}>Câu chuyện thành công</p>
            <h2 className={styles.h2}>Từ Việt Nam, Nhật Bản đến Đài Loan.</h2>
            <div className={styles.cases}>
              {cases.map((c) => (
                <article key={c.name} className={styles.case}>
                  <header>
                    <h3>{c.name}</h3>
                    <p className={styles.caption}>
                      {c.kind} · {c.place}
                    </p>
                  </header>
                  <p className={styles.caseBig}>
                    {c.reviews}
                    <small>review thật / {c.period}</small>
                  </p>
                  <dl>
                    <div>
                      <dt>Từ khóa {c.keyword}</dt>
                      <dd>{c.rank}</dd>
                    </div>
                    <div>
                      <dt>{c.metric}</dt>
                      <dd>{c.change}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
            <p className={styles.source}>
              Kết quả phụ thuộc ngành hàng, vị trí và mức độ cạnh tranh của từng cửa
              hàng.
            </p>
            <ul className={styles.industries} aria-label="Ngành phù hợp">
              {industries.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- pricing ---------- */}
        <section className={styles.section} id="pricing">
          <Billboard word="GÓI" tone="lavender" />
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <p className={styles.tag}>Gói Đồng Hành</p>
              <h2 className={styles.h2}>Bắt đầu gọn nhẹ, chạy cùng cửa hàng cả mùa kinh doanh.</h2>
              <p className={styles.price}>
                {formatVnd(BASE_PRICE)}
                <small>VNĐ / tháng / chi nhánh · chưa gồm VAT</small>
              </p>
              <table className={styles.terms}>
                <thead>
                  <tr>
                    <th scope="col">Hợp đồng</th>
                    <th scope="col">Chiết khấu</th>
                    <th scope="col">Quy đổi / tháng</th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((t) => (
                    <tr key={t.months}>
                      <th scope="row">
                        {t.months} tháng
                        <small>{t.note}</small>
                      </th>
                      <td>{t.discount ? `${String(t.discount).replace(".", ",")}%` : "—"}</td>
                      <td>≈ {formatVnd(Math.round((BASE_PRICE * (100 - t.discount)) / 100 / 1000) * 1000)}đ</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.includedCol}>
              <p className={styles.tag}>Đã bao gồm</p>
              <ul className={styles.included}>
                {included.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <a href="#contact" className={styles.pill}>
                Tư vấn gói phù hợp <span aria-hidden="true">↗</span>
              </a>
              <p className={styles.fine}>
                Entersight cung cấp, thiết lập và hỗ trợ trực tiếp · Hợp đồng tiếng
                Việt · Hóa đơn VAT
              </p>
            </div>
          </div>
        </section>

        {/* ---------- faq ---------- */}
        <section className={styles.section} id="faq">
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <p className={styles.tag}>Hỏi đáp</p>
              <h2 className={styles.h2}>Những điều chủ cửa hàng hay hỏi.</h2>
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

        {/* ---------- contact ---------- */}
        <section className={`${styles.section} ${styles.contact}`} id="contact">
          <Billboard word="0đ" tone="lime" />
          <div className={`${styles.wrap} ${styles.split}`}>
            <div>
              <p className={styles.tag}>Chẩn đoán Google Maps miễn phí</p>
              <h2 className={styles.h2}>Cửa hàng của bạn đang bỏ lỡ khách mới ở đâu?</h2>
              <p className={styles.body}>
                Để lại thông tin — chúng tôi xem hồ sơ Google Maps hiện tại và gửi
                bạn bản chẩn đoán ngắn, dễ hiểu, không thuật ngữ kỹ thuật. Chưa cần
                cam kết.
              </p>
              <p className={styles.fine}>
                Hoặc nhắn Zalo <a href="https://zalo.me/0941233481">0941 233 481</a> ·{" "}
                <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
              </p>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>

      <footer className={styles.foot}>
        <div className={`${styles.wrap} ${styles.footIn}`}>
        <span>© {new Date().getFullYear()} Entersight · Review365</span>
        <Link href="/#solutions">← Các giải pháp khác của Entersight</Link>
        </div>
      </footer>
    </div>
  );
}
