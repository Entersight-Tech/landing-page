import Image from "next/image";
import styles from "./Cases.module.css";
import onihome from "../../public/figma/onihome.jpg";

export default function Cases() {
  return (
    <section className="section" id="cases">
      <div className="container">
        <div className={styles.head}>
          <span className="eyebrow">Dự án tiêu biểu</span>
          <h2 className="h-title">
            CHUYỂN <span className="accent">ÁP LỰC VẬN HÀNH</span>
            <br />
            THÀNH <span className="accent">ĐÒN BẨY TĂNG TRƯỞNG</span>
          </h2>
        </div>

        {/* Case 1 — Oni Homestay */}
        <article className={`${styles.case} reveal`}>
          <div className={styles.media}>
            <div className={styles.mediaInnerLight}>
              <Image src={onihome} alt="Oni Home" className={styles.logo} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.tags}>
              <span>ETS AI OPERATION</span>
              <span>LƯU TRÚ</span>
            </div>
            <h3 className={styles.caseTitle}>
              Homestay check-in tự động — Hẹn hò riêng tư không lễ tân
            </h3>
            <p className={styles.pain}>
              Áp lực vận hành 24/7 &amp; chi phí nhân sự lễ tân quá cao, khó
              kiểm soát tài chính và quản lý dữ liệu khách hàng.
            </p>
            <ul className={styles.results}>
              <li>Tối ưu 100% chi phí lễ tân</li>
              <li>Rút ngắn 80% thời gian tư vấn và booking</li>
              <li>
                Tích hợp thanh toán đa nền tảng (Visa, MasterCard, Momo, VNPay,
                VietQR…), quản trị dòng tiền tự động
              </li>
            </ul>
            <blockquote className={styles.quote}>
              “Entersight không chỉ làm ra một trang web đẹp, chúng tôi trao cho
              khách hàng một cỗ máy kiếm tiền tự động.”
              <cite>
                <strong>Nguyễn Anh Quốc Huy</strong>
                <span>Founder · Oni Homestay</span>
              </cite>
            </blockquote>
          </div>
        </article>

        {/* Case 2 — KYE Agency */}
        <article className={`${styles.case} ${styles.reverse} reveal`}>
          <div className={styles.media}>
            <div className={styles.mediaInnerGradient}>
              <span className={styles.kye}>KYE</span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.tags}>
              <span>ETS AI OPERATION</span>
              <span>THỜI TRANG</span>
            </div>
            <h3 className={styles.caseTitle}>
              AI Fashion Creative Platform — Sáng tạo bứt phá cùng KYE Agency
            </h3>
            <p className={styles.pain}>
              Bài toán sản xuất nội dung thời trang với số lượng lớn nhưng vẫn
              phải giữ trọn vẹn bản sắc và độ chính xác của từng thiết kế.
            </p>
            <ul className={styles.results}>
              <li>Tăng 5x tốc độ output nội dung</li>
              <li>
                Chuẩn xác 100% chi tiết (ren, lưới, họa tiết) &amp; giữ nguyên
                diện mạo mẫu gốc
              </li>
              <li>Hiệu quả 70% Virtual Try-on ngay giai đoạn Demo</li>
            </ul>
            <blockquote className={styles.quote}>
              “Dự án chứng minh rằng công nghệ AI có thể đáp ứng những yêu cầu
              khắt khe nhất của giới sáng tạo khi được xây dựng dựa trên sự thấu
              hiểu người dùng.”
              <cite>
                <strong>Nguyễn Văn Công</strong>
                <span>CEO &amp; Founder · KYE Agency</span>
              </cite>
            </blockquote>
          </div>
        </article>
      </div>
    </section>
  );
}
