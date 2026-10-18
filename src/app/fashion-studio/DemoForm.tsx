"use client";

import { useState, type FormEvent } from "react";
import { LIMITS, validateLead } from "@/lib/lead";
import styles from "./fashion-studio.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

/** Trial request: same /api/lead pipeline as the home page contact form. */
export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    // MUSE logins are whitelisted by Google email, so the email rides in the message
    const email = (data.email ?? "").trim();
    const fields = {
      ...data,
      message: `Đăng ký dùng thử MUSE Studio${email ? ` — email Google: ${email}` : ""}`,
    };
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
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setError(res.status === 400 && body.error ? body.error : "");
      setStatus("error");
    } catch {
      setError("");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className={styles.formDone} role="status">
        Đã nhận đăng ký. Entersight sẽ liên hệ để bật tài khoản dùng thử.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      onChange={() => status === "error" && setStatus("idle")}
      noValidate
    >
      <label>
        Họ và tên
        <input name="name" placeholder="Nguyễn Văn A" autoComplete="name" maxLength={LIMITS.name} required />
      </label>
      <label>
        Số điện thoại / Zalo
        <input name="phone" type="tel" placeholder="0912 345 678" inputMode="tel" autoComplete="tel" required />
      </label>
      <label>
        Brand / agency
        <input name="company" placeholder="Tên thương hiệu" autoComplete="organization" maxLength={LIMITS.company} />
      </label>
      <label>
        Email Google để đăng nhập
        <input name="email" type="email" placeholder="ban@brand.vn" autoComplete="email" maxLength={120} />
      </label>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
      {status === "error" && (
        <p className={styles.formError} role="alert">
          {error || (
            <>
              Chưa gửi được. Gọi / Zalo <a href={`tel:${HOTLINE}`}>0941 233 481</a>.
            </>
          )}
        </p>
      )}
      <button className="btn btn--solid" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Đang gửi…" : "Đăng ký dùng thử"}
      </button>
    </form>
  );
}
