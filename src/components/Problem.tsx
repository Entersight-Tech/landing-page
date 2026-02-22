export default function Problem() {
    return (
        <section id="problem">
            <div className="section-label reveal">Vấn đề</div>
            <h2 className="section-title reveal">Doanh nghiệp của bạn<br />có đang &quot;mắc kẹt&quot;?</h2>
            <div className="problem-grid reveal">
                <div className="problem-item">
                    <div className="problem-num">01</div>
                    <div className="problem-icon">💸</div>
                    <div className="problem-title">Chi phí vận hành cao</div>
                    <div className="problem-desc">Ngân sách marketing eo hẹp nhưng chi phí vận hành lại leo thang không kiểm soát. Lãng phí tiền vào những kênh không hiệu quả.</div>
                </div>
                <div className="problem-item">
                    <div className="problem-num">02</div>
                    <div className="problem-icon">⏳</div>
                    <div className="problem-title">Nhân sự mỏng, quá tải</div>
                    <div className="problem-desc">Đội ngũ tốn quá nhiều thời gian vào các công việc thủ công lặp đi lặp lại. Không còn thời gian cho chiến lược và sáng tạo.</div>
                </div>
                <div className="problem-item" style={{ borderBottom: "none" }}>
                    <div className="problem-num">03</div>
                    <div className="problem-icon">📊</div>
                    <div className="problem-title">Thiếu dữ liệu & insight</div>
                    <div className="problem-desc">Quyết định kinh doanh dựa trên cảm tính thay vì dữ liệu. Không có công cụ để thực sự thấu hiểu khách hàng và sức khỏe doanh nghiệp.</div>
                </div>
                <div className="problem-item" style={{ borderBottom: "none" }}>
                    <div className="problem-num">04</div>
                    <div className="problem-icon">🔄</div>
                    <div className="problem-title">Vận hành cồng kềnh</div>
                    <div className="problem-desc">Quy trình rời rạc, thiếu liên kết giữa các phòng ban. Mỗi bước đều cần nhân sự xử lý thủ công, dễ sai sót và chậm trễ.</div>
                </div>
                <div className="problem-bottom">
                    <div className="problem-bottom-text">Đã đến lúc <span>thay đổi</span><br />cách doanh nghiệp bạn vận hành.</div>
                    <a href="#solutions" className="btn-lime">Xem Giải Pháp &rarr;</a>
                </div>
            </div>
        </section>
    );
}
