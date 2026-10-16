"use client";

import { useState, type FormEvent } from "react";
import { LIMITS, validateLead } from "@/lib/lead";
import styles from "./enterreview.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

/** Free Maps check-up request; goes to the same /api/lead sheet, tagged EnterReview. */
export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const note = [raw.maps && `Google Maps: ${raw.maps}`, raw.message].filter(Boolean).join("\n");
    const fields = { ...raw, message: `[EnterReview] ${note}`.trim() };
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
        Đã nhận yêu cầu! Chúng tôi sẽ liên hệ để hẹn lịch chẩn đoán hồ sơ Google
        Maps của bạn trong ngày làm việc.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label>
        Họ và tên
        <input name="name" type="text" autoComplete="name" placeholder="Nguyễn Văn A" maxLength={LIMITS.name} required />
      </label>
      <label>
        Số điện thoại / Zalo
        <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0912 345 678" required />
      </label>
      <label>
        Tên cửa hàng
        <input name="company" type="text" autoComplete="organization" placeholder="Bếp Nhà Mình" maxLength={LIMITS.company} />
      </label>
      <label>
        Link Google Maps (nếu có)
        <input name="maps" type="url" inputMode="url" placeholder="https://maps.app.goo.gl/…" maxLength={300} />
      </label>
      <label className={styles.wide}>
        Số chi nhánh / điều bạn muốn cải thiện
        <textarea name="message" rows={3} placeholder="VD: 2 chi nhánh, ít review, chưa phản hồi khách nước ngoài…" maxLength={1000} />
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

      <button type="submit" className={styles.pill} disabled={status === "sending"}>
        {status === "sending" ? "Đang gửi…" : "Nhận chẩn đoán miễn phí"}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
