"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const stats = [
  { value: "50%", label: "Giảm chi phí vận hành" },
  { value: "3x", label: "Tốc độ xử lý công việc" },
  { value: "27/7", label: "Hệ thống tự động thực thi" },
  { value: "20+", label: "Dự án vận hành thành công" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="section" id="contact">
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            SẴN SÀNG BỨT PHÁ
            <br />
            <span>CÙNG ENTERSIGHT?</span>
          </h2>
          <p className={styles.sub}>
            Để lại thông tin, đội ngũ Entersight sẽ phác thảo lộ trình tối ưu
            riêng cho mô hình kinh doanh của bạn.
          </p>

          <div className={styles.stats}>
            {stats.map((s) => (
              <div className={styles.stat} key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>
            Đăng Ký Nhận Tư Vấn <span>Miễn Phí</span>
          </h3>

          {sent ? (
            <p className={styles.thanks}>
              Cảm ơn bạn! Entersight sẽ liên hệ trong thời gian sớm nhất.
            </p>
          ) : (
            <form
              className={styles.form}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <label>
                Họ và tên
                <input type="text" placeholder="Nguyễn Văn A" required />
              </label>
              <label>
                Số điện thoại
                <input type="tel" placeholder="0123 456 789" required />
              </label>
              <label>
                Tên doanh nghiệp
                <input type="text" placeholder="Công ty TNHH…" />
              </label>
              <label>
                Vấn đề bạn đang gặp phải
                <textarea rows={3} placeholder="Viết vấn đề của bạn" />
              </label>
              <button type="submit" className={styles.submit}>
                Gửi Yêu Cầu Tư Vấn →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
