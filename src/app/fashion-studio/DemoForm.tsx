"use client";

import { useState, type FormEvent } from "react";
import { validateLead } from "@/lib/lead";
import styles from "./fashion-studio.module.css";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

/** Demo request: same /api/lead pipeline as the home page contact form. */
export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = {
      ...Object.fromEntries(new FormData(e.currentTarget)),
      message: "Đăng ký demo Fashion Studio",
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
      <p className={styles.formDone}>
        Đã nhận đăng ký. Entersight sẽ liên hệ để hẹn lịch demo.
      </p>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <input className={styles.input} name="name" placeholder="Họ và tên" autoComplete="name" required />
      <input
        className={styles.input}
        name="phone"
        placeholder="Số điện thoại"
        inputMode="tel"
        autoComplete="tel"
        required
      />
      <input className={styles.input} name="company" placeholder="Agency / thương hiệu" autoComplete="organization" />
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className={styles.hp} aria-hidden="true" />
      <button className={styles.btnDark} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Đang gửi…" : "Đặt lịch demo"}
      </button>
      {status === "error" && (
        <p className={styles.formError} role="alert">
          {error || (
            <>
              Chưa gửi được. Gọi / Zalo <a href={`tel:${HOTLINE}`}>0941 233 481</a>.
            </>
          )}
        </p>
      )}
    </form>
  );
}
