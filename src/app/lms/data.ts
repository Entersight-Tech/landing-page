// Copy for /lms. Every claim here is something the LMS does in code today
// (product overview doc, checked 17/10/2026) — no invented client numbers.
// Anything shown as a score or a chat is sample data and labelled so.

/** Product name — change it here only. */
export const PRODUCT = "EnterLMS";
export const APP_URL = "https://lms.entersight-tech.com";

/** Strip under the hero: facts about the product, not client results. */
export const facts = [
  { value: "6", unit: "kỹ năng", label: "bán hàng được AI chấm sau mỗi buổi luyện" },
  { value: "4", unit: "cấp", label: "lộ trình, từ Newbie đến Quản lý" },
  { value: "100", unit: "%", label: "bài học, quiz do AI soạn phải qua người duyệt" },
  { value: "3", unit: "vai trò", label: "đào tạo, quản lý và nhân viên sale, mỗi người một màn hình" },
];

/** Problem → what EnterLMS does about it. */
export const whys = [
  {
    pain: "Trưởng nhóm giỏi nhất bị kéo đi dạy lại từ đầu mỗi đợt tuyển.",
    fix: "AI soạn bài học, slide và quiz từ tài liệu và ca chốt đơn của công ty. Trưởng nhóm chỉ sửa và duyệt.",
  },
  {
    pain: "Đọc tài liệu xong, nhân viên mới vẫn tập trên khách thật, và làm mất khách thật.",
    fix: "Luyện chat với khách ảo khó tính, chê đắt, hỏi xoáy kỹ thuật cho tới khi vững tay.",
  },
  {
    pain: "Doanh số thấp nhưng không biết đội yếu ở khám phá nhu cầu, xử lý giá hay chốt đơn.",
    fix: "Mỗi câu quiz và mỗi buổi luyện đều chấm theo kỹ năng; Analytics chỉ ra chỗ yếu của cả đội.",
  },
];

/** The main journey, from the overview doc. Each step has a mock in page.tsx. */
export const steps = [
  {
    who: "Đội đào tạo",
    title: "Nạp kiến thức và ca thật",
    body: "Thêm bảng giá, quy trình, FAQ vào Knowledge Base. Tải lên đoạn chat bán hàng (.txt, .docx) và gắn nhãn thành công hay thất bại.",
  },
  {
    who: "AI",
    title: "Phân tích từng ca",
    body: "AI ẩn danh hoá hội thoại, rút chân dung khách, tìm khoảnh khắc then chốt và kỹ thuật đã dùng.",
  },
  {
    who: "Quản lý",
    title: "Duyệt bài AI soạn",
    body: "Bài học, slide, infographic và quiz nằm ở bản nháp. Người có chuyên môn sửa, duyệt rồi mới xuất bản.",
  },
  {
    who: "Nhân viên sale",
    title: "Học, thi và luyện",
    body: "Mỗi người biết hôm nay cần học gì, làm bài thi có giờ và luyện chat với khách ảo.",
  },
];

/** The default skill catalogue (6), editable per organisation. */
export const skills = [
  "Khám phá nhu cầu",
  "Xây dựng quan hệ",
  "Định khung giá trị",
  "Xử lý từ chối giá",
  "Tạo cấp bách",
  "Chốt đơn",
];

/** Sample roleplay scores for the demo card — not real user data. */
export const demoScores = [72, 85, 64, 58, 70, 66];

/** Sample team averages for the analytics mock — not real user data. */
export const teamScores = [74, 81, 62, 51, 68, 59];

export const demoChat: { from: "bot" | "me"; text: string }[] = [
  { from: "bot", text: "Bên chị đang dùng chỗ khác rẻ hơn 15%. Sao chị phải đổi?" },
  { from: "me", text: "Dạ, chị cho em hỏi bên hiện tại có hỗ trợ đổi trả trong 30 ngày không ạ?" },
  { from: "bot", text: "Không, nhưng chị chưa cần đổi trả bao giờ." },
  { from: "me", text: "Vậy em gửi chị so sánh chi phí cả năm, tính cả bảo hành, để chị xem chênh lệch thật nhé." },
];

export const personas = ["Khó tính", "Hỏi kỹ thuật", "Chê đắt", "Đang so sánh", "Vội"];

export const levels = ["Newbie", "Thử việc", "Chính thức", "Quản lý"];

/** What a manager gets, next to the analytics mock. */
export const managerPoints = [
  { title: "Analytics theo kỹ năng", body: "Tỉ lệ đạt, phân bố điểm, xu hướng, radar kỹ năng, bảng xếp hạng." },
  { title: "Xem lại từng buổi luyện", body: "Đọc lại cả cuộc chat cùng điểm AI; duyệt, sửa điểm hoặc trả về." },
  { title: "Bài thi qua thử việc", body: "Lịch mở/đóng, giới hạn giờ, điểm đạt, đảo câu; ghi lại chuyển tab và rời cửa sổ." },
  { title: "Lộ trình 4 cấp", body: "Mỗi khoá gắn một cấp, AI chỉnh độ khó theo cấp; ghi danh cả nhóm một lần." },
];

/** Short feature tiles. `for` says whose screen it is on. */
export const features: { title: string; body: string; for: "Đào tạo" | "Nhân viên" }[] = [
  { for: "Đào tạo", title: "Knowledge Base", body: "Kiến thức của từng khoá, được đưa vào mọi nội dung AI tạo." },
  { for: "Đào tạo", title: "Kịch bản bán hàng", body: "Chat thật, nhãn thành công / thất bại, chân dung và cảm xúc khách." },
  { for: "Đào tạo", title: "Bài học có hình", body: "Slide và infographic do AI vẽ, hoặc video bạn tải lên." },
  { for: "Đào tạo", title: "Quiz", body: "Trắc nghiệm có giải thích và câu tự luận AI chấm, gắn kỹ năng." },
  { for: "Đào tạo", title: "Mời thi qua email", body: "Lời mời kèm lịch .ics; báo cáo kết quả sau khi đóng." },
  { for: "Đào tạo", title: "Bộ kỹ năng riêng", body: "Mặc định 6 kỹ năng; mỗi công ty sửa theo cách bán của mình." },
  { for: "Nhân viên", title: "Một chỗ để học", body: "Khoá, bài, quiz, bài thi được giao; trình đọc có mục lục." },
  { for: "Nhân viên", title: "Trợ lý hỏi đáp", body: "Trả lời từ bài học đã xuất bản, kèm trích dẫn nguồn." },
  { for: "Nhân viên", title: "Hồ sơ kỹ năng", body: "Điểm, biểu đồ kỹ năng, khoá gợi ý và thẻ chứng nhận bài thi." },
];

export const principles = [
  { title: "AI soạn, người duyệt", body: "Không bài học hay quiz nào tới nhân viên khi chưa được duyệt." },
  { title: "Ẩn danh trước khi phân tích", body: "Thông tin khách trong đoạn chat được làm sạch trước khi thành bài học." },
  { title: "Trả lời có nguồn", body: "Trợ lý chỉ dựa trên bài học đã xuất bản và chỉ rõ nguồn." },
  { title: "Dữ liệu theo tổ chức", body: "Mỗi công ty có kiến thức, kỹ năng và cấu hình riêng." },
];

/** Qualifier checklist next to the form. */
export const fitFor = [
  "Bạn tuyển sale thường xuyên và trưởng nhóm đang phải kèm từ đầu",
  "Đội bán qua chat, có sẵn đoạn hội thoại chốt đơn thành công lẫn thất bại",
  "Bạn muốn biết đội yếu kỹ năng nào trước khi mở khoá đào tạo tiếp",
];

export const faqs = [
  {
    q: "Tôi cần chuẩn bị gì để bắt đầu?",
    a: "Tài liệu nội bộ (bảng giá, quy trình sale, FAQ) dạng chữ và một số đoạn chat bán hàng thật dạng .txt hoặc .docx, càng có cả ca thành công lẫn thất bại càng tốt.",
  },
  {
    q: "Dùng cho onboarding ngoài đội sale được không?",
    a: "Hiện AI, bộ kỹ năng và chân dung khách được thiết kế cho bán hàng. Nếu bạn cần cho vị trí khác, hãy để lại thông tin để chúng tôi trao đổi cụ thể.",
  },
  {
    q: "Điểm do AI chấm có chính xác không?",
    a: "AI chấm điểm tổng và theo từng kỹ năng ngay khi kết thúc buổi luyện. Quản lý có thể xem lại toàn bộ hội thoại, sửa điểm hoặc trả về.",
  },
  {
    q: "Dữ liệu khách trong đoạn chat có bị lộ không?",
    a: "Hội thoại được ẩn danh hoá trước khi AI phân tích, và dữ liệu tách riêng theo từng tổ chức.",
  },
  {
    q: "Chi phí thế nào?",
    a: "Tuỳ quy mô đội và mức dùng AI. Đặt lịch demo, chúng tôi gửi báo giá sau khi hiểu nhu cầu của bạn.",
  },
];
