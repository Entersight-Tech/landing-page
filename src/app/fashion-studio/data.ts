// Copy for the MUSE Studio page. Every capability here maps to code in
// Entersight-Tech/fashion-ai (modes.ts, CloneStudio.tsx, script-generator.ts,
// input-gate.ts, qc.ts); numbers are real limits from that code, not targets.

export const PRODUCT = "MUSE Studio";
export const APP_URL = "https://muse.entersight-tech.com";
export const LOGIN_URL = `${APP_URL}/login`;

/** lib/engines/modes.ts — the 7 image modes, in chip order. */
export const imageModes = [
  { name: "Lên Model", text: "Thả 1–5 ảnh sản phẩm, nhận ảnh người mẫu mặc đúng món đó." },
  { name: "Try-On", text: "Ảnh model + ảnh sản phẩm. Mọi thứ còn lại tự động." },
  { name: "Đổi Pose", text: "Giữ form đồ và chất liệu, chỉ đổi dáng theo ảnh tham chiếu." },
  { name: "Makeup & Tóc", text: "Thay lớp makeup, kiểu tóc theo ảnh mẫu, bật riêng từng lớp." },
  { name: "Đổi Model", text: "Giữ đồ, pose và bối cảnh, chỉ thay người." },
  { name: "Sửa ảnh", text: "Mô tả một dòng thay đổi nhỏ, nhân vật giữ nguyên." },
  { name: "Packshot", text: "Từ ảnh trên người mẫu về ảnh sản phẩm nền phẳng." },
];

/** lib/studio/script-generator.ts — ROLE_ORDER and its Vietnamese labels. */
export const scriptRoles = [
  { role: "Mở đầu", line: "Giữ chân người xem trong 2 giây đầu." },
  { role: "Vấn đề", line: "Chạm vào nỗi lo của người mua." },
  { role: "Lợi ích", line: "Nêu điểm bán từ USP bạn nhập." },
  { role: "Thể hiện", line: "Cho thấy sản phẩm trên người mẫu." },
  { role: "Kêu gọi", line: "Bảo người xem làm gì tiếp." },
];

/** The four quality layers (README "Bốn vấn đề của KYE", ARCHITECTURE_MUSE §4–5). */
export const quality = [
  {
    k: "01",
    title: "Gác cổng trước khi tốn credit",
    text: "Ảnh quá nhỏ, mờ, cháy sáng hoặc không thấy mặt bị chặn ngay, kèm hướng dẫn chụp lại. Chưa gọi AI, chưa mất credit nào.",
  },
  {
    k: "02",
    title: "Người mẫu khoá seed",
    text: "Model tạo một lần trong Elements, mang theo seed và bộ makeup mặc định sang mọi mode. Cùng một gương mặt qua từng bộ ảnh.",
  },
  {
    k: "03",
    title: "QC tự động, làm lại một lần",
    text: "Mỗi ảnh được chấm gương mặt, bàn tay và độ khớp với sản phẩm gốc. Lỗi nặng thì tự tạo lại với seed khác trước khi trả về.",
  },
  {
    k: "04",
    title: "Báo giá trước khi bấm",
    text: "Số credit hiện trước nút Gửi, kèm trường hợp xấu nhất nếu QC phải làm lại. Ảnh cần xem lại được gắn nhãn, không bị giấu.",
  },
];

/** Library side, inherited from KYE and still running in MUSE. */
export const workspace = [
  ["Thư viện ảnh AI", "Mỗi ảnh có tên, tag, màu, chất liệu, phong cách. Ảnh outfit tách thành từng món."],
  ["Smart Search", "Gõ “váy cúp ngực đen” như nói chuyện, hoặc tải ảnh lên để tìm món tương tự."],
  ["Trải nghiệm khách hàng", "Thử nhiều sản phẩm trên ảnh của chính khách, tinh chỉnh nhiều vòng, lưu lịch sử."],
  ["Elements", "Models, poses, bối cảnh, makeup & tóc, photo style: tạo một lần, dùng mọi nơi."],
  ["Moodboard", "Gom ảnh cảm hứng theo concept, chia sẻ với cộng sự."],
  ["Ảnh người mẫu", "Quản lý ảnh người mẫu và KOL thật, chia sẻ bằng đường link."],
];

// All-time counts from the KYE account audit log, 11 Apr – 14 Oct 2026.
export const kyeStats = [
  { n: "4.513", label: "ảnh trong thư viện, gắn thẻ bằng AI" },
  { n: "6.999", label: "món đồ AI tách ra từ ảnh outfit" },
  { n: "408", label: "ảnh photoshoot AI từ 44 phiên Studio" },
  { n: "129", label: "lượt thử đồ ảo trên ảnh khách" },
];

export const faqs = [
  {
    q: "MUSE Studio khác gì công cụ AI tạo ảnh phổ thông?",
    a: "MUSE làm việc trên ảnh sản phẩm thật của bạn: giữ đúng form, chất liệu, hoạ tiết, và giữ cùng một người mẫu qua mọi bộ ảnh. Kết quả tự vào Thư viện, tìm lại được bằng tiếng Việt.",
  },
  {
    q: "Tôi cần chuẩn bị gì để bắt đầu?",
    a: "Ảnh sản phẩm (càng đủ góc trước, ngang, sau càng tốt) và, nếu có, ảnh người mẫu của brand. Ảnh chưa đạt chuẩn sẽ được báo trước khi tạo, kèm cách chụp lại.",
  },
  {
    q: "Chi phí tính thế nào?",
    a: "Trả theo output: một credit xấp xỉ một ảnh 2K. Số credit, thời gian ước tính của video, hiện trước khi bạn bấm Gửi. Entersight tư vấn gói theo khối lượng thực tế của brand.",
  },
  {
    q: "Ai có thể đăng nhập?",
    a: "Tài khoản được Entersight cấp theo email Google của brand. Để lại thông tin, chúng tôi bật quyền dùng thử và hướng dẫn buổi đầu.",
  },
];
