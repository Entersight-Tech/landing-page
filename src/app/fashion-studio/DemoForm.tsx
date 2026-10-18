"use client";

import { useState, type FormEvent } from "react";
import { LIMITS, validateLead } from "@/lib/lead";
import styles from "./fashion-studio.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

/** Setup request: same /api/lead pipeline as the home page contact form. */
export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = {
      ...Object.fromEntries(new FormData(e.currentTarget)),
      message: "Liên hệ setup MUSE Studio cho cửa hàng",
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
      <p className={styles.formDone} role="status">
        Đã nhận thông tin. Entersight sẽ liên hệ để setup MUSE Studio cho cửa hàng của bạn.
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
      <label className={styles.wide}>
        Cửa hàng / brand
        <input name="company" placeholder="Tên thương hiệu" autoComplete="organization" maxLength={LIMITS.company} />
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
        {status === "sending" ? "Đang gửi…" : "Liên hệ setup"}
      </button>
    </form>
  );
}
