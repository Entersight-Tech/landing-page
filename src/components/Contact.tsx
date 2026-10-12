"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";
import { LIMITS, validateLead } from "@/lib/lead";

type Status = "idle" | "sending" | "sent" | "error";

const HOTLINE = "0941233481";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
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
      // validation messages are shown as-is; anything else gets the fallback
      setError(res.status === 400 && data.error ? data.error : "");
      setStatus("error");
    } catch {
      setError("");
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <p className="label" data-scramble="in">
            <b>10</b> — Liên hệ
          </p>
          <h2 className={`display ${styles.title} reveal`} data-split>
            <i className="mini">sẵn sàng</i>{"\u00a0"}bứt phá <span className="lime">cùng Entersight?</span>
          </h2>
          <p className={`${styles.sub} reveal`}>
            Để lại thông tin, đội ngũ Entersight sẽ phác thảo lộ trình tối ưu
            riêng cho mô hình kinh doanh của bạn.
          </p>
          <ul className={`${styles.direct} reveal`}>
            <li>
              <span>Email</span>
              <a href="mailto:info@entersight-tech.com">info@entersight-tech.com</a>
            </li>
            <li>
              <span>Zalo / Hotline</span>
              <a href={`https://zalo.me/${HOTLINE}`}>0941 233 481</a>
            </li>
          </ul>
        </div>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>
            Đăng Ký Nhận Tư Vấn <span>Miễn Phí</span>
          </h3>

          {status === "sent" ? (
            <p className={styles.thanks} role="status">
              Cảm ơn bạn! Entersight đã nhận thông tin và sẽ liên hệ trong thời
              gian sớm nhất.
            </p>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label>
                Họ và tên
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nguyễn Văn A"
                  maxLength={LIMITS.name}
                  required
                />
              </label>
              <label>
                Số điện thoại
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="0912 345 678"
                  required
                />
              </label>
              <label>
                Tên doanh nghiệp
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Công ty TNHH…"
                  maxLength={LIMITS.company}
                />
              </label>
              <label>
                Vấn đề bạn đang gặp phải
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Viết vấn đề của bạn"
                  maxLength={LIMITS.message}
                />
              </label>
              {/* honeypot — hidden from people, bots tend to fill it */}
              <input
                className={styles.honeypot}
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              {status === "error" && (
                <p className={styles.error} role="alert">
                  {error ||
                    "Chưa gửi được yêu cầu. Bạn vui lòng thử lại, hoặc gọi / nhắn Zalo "}
                  {!error && (
                    <a href={`https://zalo.me/${HOTLINE}`}>{HOTLINE.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}</a>
                  )}
                  {!error && "."}
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Đang gửi…" : "Gửi Yêu Cầu Tư Vấn →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
