import { levels, skills, teamScores } from "./data";
import styles from "./lms.module.css";

/* Product mock-ups drawn in HTML/SVG. They illustrate real screens of the
   LMS (scripts, AI analysis, review, learner view, analytics); every name
   and number in them is sample data. Each root carries data-ui: it is an
   interface fragment, so its small app-sized type and borders are its own. */

function Chip({ tone, children }: { tone: "ok" | "bad" | "draft" | "done" | "brand"; children: React.ReactNode }) {
  return <span className={`${styles.chip} ${styles[`chip_${tone}`]}`}>{children}</span>;
}

/** Hero: one sales chat becomes a reviewed lesson and a scored skill. */
export function HeroStack() {
  return (
    <figure className={styles.stack} data-ui aria-label="Minh hoạ: từ đoạn chat thật thành bài học đã duyệt">
      <div className={`${styles.mock} ${styles.stackA}`}>
        <span className={styles.file} aria-hidden="true">
          DOCX
        </span>
        <span>
          <b>chat-khach-che-dat.docx</b>
          <small>Kịch bản bán hàng · 42 tin nhắn</small>
        </span>
        <Chip tone="ok">Thành công</Chip>
      </div>

      <div className={`${styles.mock} ${styles.stackB}`}>
        <div className={styles.mockTop}>
          <small>Bài học · Khoá Thử việc</small>
          <span className={styles.flip}>
            <Chip tone="draft">Chờ duyệt</Chip>
            <Chip tone="done">Đã duyệt</Chip>
          </span>
        </div>
        <h4>Xử lý khi khách chê đắt</h4>
        <ul className={styles.bullets}>
          <li>Hỏi điều khách đang so sánh trước khi bàn giá</li>
          <li>Đổi từ giá mua sang chi phí cả năm</li>
          <li>Kết thúc bằng một bước tiếp theo rõ ràng</li>
        </ul>
        <div className={styles.mockFoot}>
          <span>+ 5 câu quiz · 4 slide</span>
          <span className={styles.approve}>Duyệt</span>
        </div>
      </div>

      <div className={`${styles.mock} ${styles.stackC}`}>
        <small>Xử lý từ chối giá</small>
        <b className={styles.big}>
          74<small>/100</small>
        </b>
        <i className={styles.miniBar} style={{ "--v": 74 } as React.CSSProperties} aria-hidden="true" />
      </div>
      <figcaption className={styles.note}>Minh hoạ giao diện · số liệu mẫu</figcaption>
    </figure>
  );
}

/** One mock per journey step. */
export function StepMock({ step }: { step: number }) {
  if (step === 0)
    return (
      <div className={styles.mock} aria-hidden="true" data-ui>
        <div className={styles.mockTop}>
          <small>Kịch bản bán hàng</small>
          <span className={styles.ghostBtn}>+ Tải lên</span>
        </div>
        <ul className={styles.rows}>
          <li>
            <span className={styles.file}>DOCX</span>
            <b>chat-khach-che-dat.docx</b>
            <Chip tone="ok">Thành công</Chip>
          </li>
          <li>
            <span className={styles.file}>TXT</span>
            <b>zalo-khach-hoi-bao-hanh.txt</b>
            <Chip tone="ok">Thành công</Chip>
          </li>
          <li>
            <span className={styles.file}>DOCX</span>
            <b>chat-khach-bo-giua-chung.docx</b>
            <Chip tone="bad">Thất bại</Chip>
          </li>
        </ul>
        <div className={styles.kb}>
          <small>Knowledge Base</small>
          <span>Bảng giá 2026</span>
          <span>Quy trình chốt đơn</span>
          <span>FAQ bảo hành</span>
        </div>
      </div>
    );

  if (step === 1)
    return (
      <div className={styles.mock} aria-hidden="true" data-ui>
        <div className={styles.mockTop}>
          <small>AI phân tích · chat-khach-che-dat.docx</small>
          <Chip tone="brand">Đã ẩn danh</Chip>
        </div>
        <div className={styles.transcript}>
          <p>
            <b>Khách:</b> Bên [công ty A] rẻ hơn 15% đó em.
          </p>
          <p className={styles.key}>
            <b>Sale:</b> Dạ, mình tính thử chi phí cả năm, gồm cả bảo hành nhé chị?
            <span className={styles.keyTag}>Khoảnh khắc then chốt</span>
          </p>
          <p>
            <b>Khách:</b> Ừ, gửi chị xem.
          </p>
        </div>
        <dl className={styles.facts2}>
          <div>
            <dt>Chân dung khách</dt>
            <dd>Chủ cửa hàng, nhạy giá</dd>
          </div>
          <div>
            <dt>Cảm xúc</dt>
            <dd>Nghi ngờ → cởi mở</dd>
          </div>
          <div>
            <dt>Kỹ thuật</dt>
            <dd>Định khung giá trị</dd>
          </div>
        </dl>
      </div>
    );

  if (step === 2)
    return (
      <div className={styles.mock} aria-hidden="true" data-ui>
        <div className={styles.mockTop}>
          <small>Nội dung chờ duyệt · 3</small>
        </div>
        <ul className={styles.rows}>
          <li>
            <b>Bài học: Xử lý khi khách chê đắt</b>
            <span className={styles.flip}>
              <Chip tone="draft">Nháp</Chip>
              <Chip tone="done">Đã duyệt</Chip>
            </span>
          </li>
          <li>
            <b>Quiz: Định khung giá trị · 5 câu</b>
            <Chip tone="draft">Nháp</Chip>
          </li>
          <li>
            <b>Infographic: 3 bước trả lời về giá</b>
            <Chip tone="draft">Nháp</Chip>
          </li>
        </ul>
        <div className={styles.quizQ}>
          <small>Câu 2 · Xử lý từ chối giá</small>
          <p>Khách nói “bên kia rẻ hơn”. Bước đầu tiên nên làm là gì?</p>
          <span className={styles.ans}>Hỏi khách đang so sánh những gì</span>
        </div>
      </div>
    );

  return (
    <div className={styles.mock} aria-hidden="true" data-ui>
      <div className={styles.mockTop}>
        <small>Hôm nay của bạn</small>
        <Chip tone="brand">Thử việc</Chip>
      </div>
      <ul className={styles.todo}>
        <li>
          <span>Bài học · Xử lý khi khách chê đắt</span>
          <i style={{ "--v": 100 } as React.CSSProperties} />
        </li>
        <li>
          <span>Quiz · Định khung giá trị</span>
          <i style={{ "--v": 60 } as React.CSSProperties} />
        </li>
        <li>
          <span>Luyện chat · Khách đang so sánh</span>
          <i style={{ "--v": 0 } as React.CSSProperties} />
        </li>
      </ul>
      <div className={styles.examCard}>
        <span>
          <small>Bài thi qua thử việc</small>
          <b>Mở 09:00 thứ Hai · 30 phút</b>
        </span>
        <span className={styles.ghostBtn}>Vào phòng thi</span>
      </div>
    </div>
  );
}

/** Radar of the six skills for a team, plus the weakest skills. */
export function Analytics() {
  const n = skills.length;
  const R = 92;
  const pt = (i: number, v: number) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [Math.cos(a) * R * (v / 100), Math.sin(a) * R * (v / 100)];
  };
  const poly = (vals: number[]) => vals.map((v, i) => pt(i, v).map((c) => c.toFixed(1)).join(",")).join(" ");
  const weakest = skills
    .map((s, i) => ({ s, v: teamScores[i] }))
    .sort((a, b) => a.v - b.v)
    .slice(0, 3);

  return (
    <figure className={`${styles.mock} ${styles.analytics}`} data-ui aria-label="Minh hoạ Analytics của đội">
      <div className={styles.mockTop}>
        <small>Analytics · Đội sale miền Nam</small>
        <span className={styles.levelTabs} aria-hidden="true">
          {levels.map((l, i) => (
            <span key={l} className={i === 1 ? styles.on : undefined}>
              {l}
            </span>
          ))}
        </span>
      </div>
      <div className={styles.anaBody}>
        <svg viewBox="-170 -118 340 236" className={styles.radar} role="img" aria-label="Radar kỹ năng của đội">
          {[25, 50, 75, 100].map((v) => (
            <polygon key={v} points={poly(Array(n).fill(v))} className={styles.grid} />
          ))}
          {skills.map((s, i) => {
            const [x, y] = pt(i, 100);
            const [lx, ly] = pt(i, 122);
            return (
              <g key={s}>
                <line x1="0" y1="0" x2={x.toFixed(1)} y2={y.toFixed(1)} className={styles.grid} />
                <text
                  x={lx.toFixed(1)}
                  y={(ly + 3).toFixed(1)}
                  textAnchor={Math.abs(lx) < 5 ? "middle" : lx > 0 ? "start" : "end"}
                >
                  {s}
                </text>
              </g>
            );
          })}
          <polygon points={poly(teamScores)} className={styles.area} />
        </svg>
        <div className={styles.weak}>
          <small>Kỹ năng còn yếu</small>
          <ol>
            {weakest.map((w) => (
              <li key={w.s}>
                <span>{w.s}</span>
                <b>{w.v}</b>
              </li>
            ))}
          </ol>
          <div className={styles.pass}>
            <small>Tỉ lệ đạt bài thi</small>
            <b>
              78<small>%</small>
            </b>
          </div>
        </div>
      </div>
      <figcaption className={styles.note}>Minh hoạ giao diện · số liệu mẫu</figcaption>
    </figure>
  );
}
