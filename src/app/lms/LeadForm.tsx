"use client";

import { useState, type FormEvent } from "react";
import { LIMITS, validateLead } from "@/lib/lead";
import styles from "./lms.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

/** Demo request; goes to the same /api/lead sheet, tagged [LMS]. */
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const note = [raw.team && `Quy mô đội sale: ${raw.team}`, raw.message].filter(Boolean).join("\n");
    const fields = { ...raw, message: `[LMS] ${note}`.trim() };
    const checked = validateLead(fields);
    if ("error" in checked) {
      setError(checked.error);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      setError(res.status === 400 && data.error ? data.error : "");
      setStatus("error");
    } catch {
      setError("");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className={styles.thanks} role="status">
        Đã nhận yêu cầu! Chúng tôi sẽ liên hệ để hẹn lịch demo trong ngày làm
        việc.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      // a stale "wrong phone" message shouldn't sit next to a corrected field
      onChange={() => status === "error" && setStatus("idle")}
      noValidate
    >
      <label>
        Họ và tên
        <input name="name" type="text" autoComplete="name" placeholder="Nguyễn Văn A" maxLength={LIMITS.name} required />
      </label>
      <label>
        Số điện thoại / Zalo
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0912 345 678" required />
      </label>
      <label>
        Công ty
        <input name="company" type="text" autoComplete="organization" placeholder="Công ty ABC" maxLength={LIMITS.company} />
      </label>
      <label>
        Số nhân viên sale
        <input name="team" type="text" inputMode="numeric" placeholder="VD: 12" maxLength={40} />
      </label>
      <label className={styles.wide}>
        Bạn đang đào tạo sale thế nào?
        <textarea name="message" rows={3} placeholder="VD: tuyển 5 người mỗi quý, trưởng nhóm kèm 2 tuần, chưa có bài kiểm tra…" maxLength={1000} />
      </label>
      {/* honeypot — hidden from people, bots tend to fill it */}
      <input className={styles.honeypot} name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden />

      {status === "error" && (
        <p className={styles.error} role="alert">
          {error || "Chưa gửi được yêu cầu. Bạn vui lòng thử lại, hoặc nhắn Zalo "}
          {!error && <a href={`https://zalo.me/${HOTLINE}`}>0941 233 481</a>}
          {!error && "."}
        </p>
      )}

      <button type="submit" className={`${styles.btn} ${styles.solid}`} disabled={status === "sending"}>
        {status === "sending" ? "Đang gửi…" : "Đặt lịch demo"}
      </button>
    </form>
  );
}
