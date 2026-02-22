export default function Projects() {
    return (
        <section id="projects">
            <div className="section-label reveal">Dự án tiêu biểu</div>
            <h2 className="section-title reveal">Những giải pháp AI<br />chúng tôi đã kiến tạo</h2>
            <div className="projects-list">
                <div className="project-item reveal">
                    <div className="project-num">01 / 02</div>
                    <div>
                        <div className="project-name">ONI HOMESTAY</div>
                        <div className="project-tag-inline">
                            <span className="ptag">Lưu trú</span>
                            <span className="ptag">AI Automation</span>
                        </div>
                    </div>
                    <div className="project-info">
                        <div className="project-problem">Bài toán</div>
                        <div className="project-solution">Quản lý lịch đặt phòng và chăm sóc khách hàng 24/7 mà không cần tăng chi phí nhân sự. Tích hợp AI toàn bộ quy trình từ booking, check-in đến giải đáp thắc mắc của khách.</div>
                    </div>
                    <a href="#" className="project-link">
                        Trải nghiệm
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1V8" /></svg>
                    </a>
                </div>
                <div className="project-item reveal delay-1">
                    <div className="project-num">02 / 02</div>
                    <div>
                        <div className="project-name">KYE AGENCY</div>
                        <div className="project-tag-inline">
                            <span className="ptag">Thời trang</span>
                            <span className="ptag">Generative AI</span>
                        </div>
                    </div>
                    <div className="project-info">
                        <div className="project-problem">Bài toán</div>
                        <div className="project-solution">Xây dựng AI Fashion Creative Platform với Generative AI hỗ trợ nhà thiết kế lên ý tưởng, phối đồ và tạo concept thời trang độc đáo trong thời gian ngắn nhất.</div>
                    </div>
                    <a href="#" className="project-link">
                        Khám phá
                        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 11L11 1M11 1H4M11 1V8" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
