// Copy for /lms. Every claim here is something the LMS does in code today
// (product overview doc, checked 17/10/2026) — no invented client numbers.

/** Product name — change it here only. */
export const PRODUCT = "EnterLMS";
export const APP_URL = "https://lms.entersight-tech.com";

export const pains = [
  {
    title: "Người giỏi nhất bị kéo đi dạy",
    body: "Mỗi đợt tuyển, trưởng nhóm lại kèm từ đầu: giải thích bảng giá, quy trình, cách trả lời khách. Thời gian đó lẽ ra để chốt đơn.",
  },
  {
    title: "Lý thuyết không dạy được khách thật",
    body: "Đọc tài liệu xong, nhân viên mới vẫn lúng túng khi khách chê đắt hay hỏi xoáy kỹ thuật — và khách thật là nơi họ tập.",
  },
  {
    title: "Không biết đội đang yếu ở đâu",
    body: "Doanh số thấp nhưng không rõ vì khám phá nhu cầu kém, xử lý từ chối giá kém hay chốt đơn kém, nên đào tạo lại không trúng.",
  },
];

/** The main journey, from the overview doc. */
export const steps = [
  {
    who: "Đội đào tạo",
    title: "Nạp kiến thức & kịch bản thật",
    body: "Thêm bảng giá, quy trình, FAQ vào Knowledge Base của khoá học. Tải lên đoạn chat sale thật (.txt/.docx), gắn nhãn thành công hay thất bại.",
  },
  {
    who: "AI",
    title: "Phân tích và soạn nháp",
    body: "AI ẩn danh hoá hội thoại, rút chân dung khách, tìm khoảnh khắc then chốt và kỹ thuật đã dùng, rồi soạn bài học, slide, infographic và quiz.",
  },
  {
    who: "Quản lý",
    title: "Duyệt trước khi xuất bản",
    body: "Bài học và quiz do AI tạo nằm ở trạng thái nháp. Người có chuyên môn sửa, duyệt rồi mới xuất bản tới nhân viên.",
  },
  {
    who: "Nhân viên sale",
    title: "Học, thi và luyện với khách ảo",
    body: "Học bài, làm quiz và bài thi, rồi chat với AI đóng vai khách. Mỗi buổi được chấm điểm tổng và theo từng kỹ năng.",
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

/** Illustrative roleplay scores for the demo card — not real user data. */
export const demoScores = [72, 85, 64, 58, 70, 66];

export const demoChat: { from: "bot" | "me"; text: string }[] = [
  { from: "bot", text: "Bên chị đang dùng chỗ khác rẻ hơn 15%. Sao chị phải đổi?" },
  { from: "me", text: "Dạ, chị cho em hỏi bên hiện tại có hỗ trợ đổi trả trong 30 ngày không ạ?" },
  { from: "bot", text: "Không, nhưng chị chưa cần đổi trả bao giờ." },
  { from: "me", text: "Vậy em gửi chị so sánh chi phí cả năm, tính cả bảo hành, để chị xem chênh lệch thật nhé." },
];

export const personas = ["Khó tính", "Hỏi kỹ thuật", "Chê đắt", "Đang so sánh", "Vội"];

export const levels = [
  { name: "Newbie", body: "Sản phẩm, bảng giá, quy trình cơ bản." },
  { name: "Thử việc", body: "Luyện tình huống thường gặp, bài thi qua thử việc." },
  { name: "Chính thức", body: "Khách khó, từ chối giá, chốt đơn giá trị cao." },
  { name: "Quản lý", body: "Kèm đội, đọc kết quả và chọn khoá tiếp theo." },
];

export const adminFeatures = [
  { title: "Khoá học & Knowledge Base", body: "Khoá theo cấp, kèm mục kiến thức được đưa vào mọi nội dung AI tạo. Sửa kiến thức là sửa giáo trình." },
  { title: "Kịch bản bán hàng", body: "Tải chat thật, gắn nhãn thành công / thất bại, chân dung và cảm xúc khách." },
  { title: "Bài học có slide & infographic", body: "Mục tiêu, nội dung, ý chính; AI vẽ slide, infographic, hoặc bạn tải video lên." },
  { title: "Quiz", body: "Trắc nghiệm 4 đáp án có giải thích, câu tự luận do AI chấm; mỗi câu gắn một kỹ năng." },
  { title: "Bài thi", body: "Lịch mở/đóng, giới hạn giờ, điểm đạt, số lần làm, đảo câu; mời qua email kèm lịch .ics." },
  { title: "Duyệt buổi luyện chat", body: "Xem lại toàn bộ hội thoại và điểm AI; duyệt, sửa điểm hoặc trả về." },
  { title: "Analytics tổ chức", body: "Tỉ lệ đạt, phân bố điểm, xu hướng, radar kỹ năng, bảng xếp hạng, kỹ năng còn yếu." },
  { title: "Kỹ năng & người dùng", body: "Bộ kỹ năng riêng cho từng công ty; ghi danh từng người hoặc cả cấp một lần." },
];

export const salesFeatures = [
  { title: "Một chỗ để học", body: "Khoá học, bài học, quiz, bài thi được giao; trình đọc có mục lục, slide, đánh dấu hoàn thành." },
  { title: "Phòng thi", body: "Đồng hồ đếm ngược, tự nộp khi hết giờ; ghi lại chuyển tab, rời cửa sổ, thoát toàn màn hình." },
  { title: "Luyện chat với AI", body: "Khách ảo theo chân dung và cảm xúc; kết thúc là có điểm theo 6 kỹ năng." },
  { title: "Trợ lý hỏi đáp", body: "Hỏi như hỏi đồng nghiệp; câu trả lời lấy từ bài học đã xuất bản, kèm trích dẫn nguồn." },
  { title: "Hồ sơ kỹ năng", body: "Điểm, biểu đồ kỹ năng, khoá học gợi ý, thành tích và thẻ chứng nhận bài thi." },
];

export const principles = [
  { title: "AI soạn, người duyệt", body: "Không bài học hay quiz nào tới nhân viên khi chưa được duyệt." },
  { title: "Ẩn danh hoá trước khi phân tích", body: "Thông tin khách trong đoạn chat được AI làm sạch trước khi thành giáo trình." },
  { title: "Trả lời có nguồn", body: "Trợ lý chỉ dựa trên bài học công ty đã xuất bản và chỉ rõ nguồn." },
  { title: "Dữ liệu theo từng tổ chức", body: "Mỗi công ty là một tổ chức riêng, với kiến thức, kỹ năng và cấu hình riêng." },
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
    q: "Giao diện có tiếng Việt không?",
    a: "Toàn bộ giao diện bằng tiếng Việt.",
  },
  {
    q: "Chi phí thế nào?",
    a: "Tuỳ quy mô đội và mức dùng AI. Đặt lịch demo, chúng tôi gửi báo giá sau khi hiểu nhu cầu của bạn.",
  },
];

/** Running strip under the hero. */
export const marquee = [
  "AI đóng vai khách",
  "Chấm điểm 6 kỹ năng",
  "Bài học từ ca chốt đơn thật",
  "Slide & infographic do AI vẽ",
  "Quiz & bài thi chống gian lận",
  "Trợ lý hỏi đáp có trích dẫn",
  "Analytics theo kỹ năng",
  "Lộ trình 4 cấp",
  "Giao diện tiếng Việt",
];

/** Before / after, row per part of the onboarding job. */
export const compare = [
  { topic: "Người soạn giáo trình", old: "Trưởng nhóm tự viết, khi có thời gian", now: "AI soạn từ kiến thức và ca thật; trưởng nhóm chỉ sửa và duyệt" },
  { topic: "Nội dung học", old: "File rời rạc, nhanh lỗi thời", now: "Bài học, slide, quiz cùng một nguồn kiến thức: sửa một chỗ, giáo trình đổi theo" },
  { topic: "Luyện tập", old: "Tập trên khách thật", now: "Luyện với khách ảo khó tính, hỏi kỹ thuật, chê đắt… trước khi gặp khách thật" },
  { topic: "Đánh giá", old: "Cảm tính, tuỳ người kèm", now: "Điểm tổng và theo 6 kỹ năng; quản lý xem lại và sửa điểm được" },
  { topic: "Thi qua thử việc", old: "Form online, khó kiểm soát", now: "Phòng thi có giờ, đảo câu, ghi lại chuyển tab và rời cửa sổ" },
  { topic: "Theo dõi đội", old: "Không biết yếu ở đâu", now: "Radar kỹ năng, bảng xếp hạng và danh sách kỹ năng còn yếu" },
];

/** Qualifier checklist: who gets the most out of it. */
export const fitFor = [
  "Bạn tuyển sale thường xuyên và trưởng nhóm đang phải kèm từ đầu",
  "Đội bán qua chat, có sẵn các đoạn hội thoại chốt đơn thành công lẫn thất bại",
  "Có tài liệu sản phẩm, bảng giá nhưng nhân viên mới ít đọc và khó nhớ",
  "Bạn muốn biết đội đang yếu kỹ năng nào trước khi mở khoá đào tạo tiếp",
];
