import Image from "next/image";
import { imageModes, scriptRoles } from "./data";
import styles from "./fashion-studio.module.css";
import stripes from "../../../public/fashion-studio/look-stripes.webp";
import jackets from "../../../public/fashion-studio/look-jackets.webp";
import blouses from "../../../public/fashion-studio/look-blouses.webp";
import knit from "../../../public/fashion-studio/look-knit.webp";

// Coded product mocks: the MUSE screens they mirror (StudioChat, the video
// project editor, CloneStudio) sit behind a whitelisted login, so the page
// draws their structure in brand tokens instead of shipping screenshots.

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.frame} role="img" aria-label={`Minh hoạ giao diện ${title}`}>
      <div className={styles.frameBar} aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{title}</span>
      </div>
      <div className={styles.frameBody} aria-hidden="true">
        {children}
      </div>
    </div>
  );
}

function Thumb({ src, className }: { src: typeof stripes; className?: string }) {
  return (
    <span className={`${styles.thumb} ${className ?? ""}`}>
      <Image src={src} alt="" fill sizes="160px" />
    </span>
  );
}

/** Studio · Ảnh — mode chips on top, chat thread, composer with credit estimate. */
export function StudioMock() {
  return (
    <Frame title="Studio · Ảnh">
      <div className={styles.chips}>
        {imageModes.slice(0, 5).map((m) => (
          <span key={m.name} className={m.name === "Try-On" ? styles.chipOn : styles.chip}>
            {m.name}
          </span>
        ))}
      </div>
      <div className={styles.thread}>
        <div className={styles.userMsg}>
          <Thumb src={stripes} className={styles.thumbSm} />
          <Thumb src={jackets} className={styles.thumbSm} />
          <p>mặc áo khoác này, nền studio sáng</p>
        </div>
        <div className={styles.museMsg}>
          <div className={styles.outputs}>
            <span className={styles.output}>
              <Thumb src={blouses} />
              <b className={styles.qcOk}>QC đạt</b>
            </span>
            <span className={styles.output}>
              <Thumb src={stripes} />
              <b className={styles.qcWarn}>Cần xem lại</b>
            </span>
          </div>
          <div className={styles.next}>
            <span>Đổi Pose</span>
            <span>Makeup</span>
            <span>Video</span>
          </div>
          <small>2 ảnh · 2 credit · đã lưu vào Thư viện</small>
        </div>
      </div>
      <div className={styles.composer}>
        <div className={styles.slots}>
          <span className={styles.slotReq}>+ Ảnh model</span>
          <span className={styles.slotReq}>+ Ảnh sản phẩm</span>
          <span className={styles.slotOpt}>+ Bối cảnh</span>
        </div>
        <div className={styles.input}>
          <span>Mô tả một dòng (tuỳ chọn)</span>
          <b>↑</b>
        </div>
        <div className={styles.opts}>
          <span>1 ảnh ▾</span>
          <span>Cân bằng ▾</span>
          <span>4:5 ▾</span>
          <em>≈ 1 credit</em>
        </div>
      </div>
    </Frame>
  );
}

/** Studio · Video — affiliate shoot: product + model on top, scenes by script role. */
export function VideoMock() {
  return (
    <Frame title="Studio · Video — Buổi quay">
      <div className={styles.shoot}>
        <div className={styles.shootHead}>
          <Thumb src={jackets} className={styles.thumbMd} />
          <Thumb src={blouses} className={styles.thumbMd} />
          <div>
            <b>Áo khoác dạ dáng dài</b>
            <span>USP: dạ ép hai lớp, không xù, form đứng cho người thấp</span>
          </div>
        </div>
        <ol className={styles.scenes}>
          {scriptRoles.map((r, i) => (
            <li key={r.role}>
              <span className={styles.sceneNo}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.sceneRole}>{r.role}</span>
              <span className={styles.sceneLine}>{r.line}</span>
              <span className={i < 3 ? styles.sceneDone : styles.sceneWait}>{i < 3 ? "Đã quay" : "Chờ"}</span>
            </li>
          ))}
        </ol>
        <div className={styles.say}>
          <span>Lời thoại · scene 03</span>
          “Chín trăm chín mươi nghìn mà mặc ba mùa vẫn đứng form.”
        </div>
      </div>
    </Frame>
  );
}

/** Clone Video — three boxes, one button. */
export function CloneMock() {
  return (
    <Frame title="Clone Video">
      <div className={styles.clone}>
        <div className={styles.cloneIn}>
          <span className={styles.cloneBox}>
            <Thumb src={knit} />
            <b>Clip mẫu</b>
            <small>3–30 giây</small>
          </span>
          <span className={styles.cloneBox}>
            <Thumb src={stripes} />
            <b>Người mẫu</b>
            <small>Từ thư viện</small>
          </span>
          <span className={styles.cloneBox}>
            <Thumb src={jackets} />
            <b>Sản phẩm</b>
            <small>Nhiều món, nhiều góc</small>
          </span>
        </div>
        <div className={styles.cloneRun}>
          <span>3 đoạn, chạy song song · báo trước thời gian và chi phí</span>
          <b>Tạo video ↗</b>
        </div>
      </div>
    </Frame>
  );
}
