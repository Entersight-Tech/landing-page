export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-bg"></div>
            <div className="hero-grid"></div>
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>

            <div className="hero-tag">AI-Powered Marketing & Operations</div>
            <h1 className="hero-h1">
                TỐI ƯU<br />
                <span className="accent-blue">VẬN HÀNH</span><br />
                ĐỘT PHÁ<br />
                <span className="accent-lime">MARKETING</span>
            </h1>
            <div className="hero-bottom">
                <p className="hero-desc">
                    Entersight cung cấp giải pháp toàn diện giúp doanh nghiệp SME tự động hóa quy trình,
                    tối ưu chi phí và tăng trưởng doanh thu mà không cần phình to bộ máy nhân sự.
                </p>
                <div className="hero-ctas">
                    <a href="#cta" className="btn-lime">Nhận Tư Vấn AI Ngay &rarr;</a>
                    <a href="#projects" className="btn-outline">Xem Dự Án Thực Tế</a>
                </div>
            </div>
            <div className="hero-scroll">
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
