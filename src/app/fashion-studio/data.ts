// Copy for the MUSE Studio page. Every capability here maps to code in
// Entersight-Tech/fashion-ai (modes.ts, CloneStudio.tsx, script-generator.ts,
// input-gate.ts, qc.ts); numbers are real limits from that code, not targets.

export const PRODUCT = "MUSE Studio";

/** lib/engines/modes.ts — the 7 image modes, in chip order. */
export const imageModes = [
  { name: "Lên Model", text: "Thả 1–5 ảnh sản phẩm, nhận ảnh người mẫu mặc đúng món đó." },
  { name: "Try-On", text: "Ảnh model + ảnh sản phẩm: món đồ lên đúng người trong ảnh bạn đưa." },
  { name: "Đổi Pose", text: "Giữ form đồ và chất liệu, chỉ đổi dáng theo ảnh tham chiếu." },
  { name: "Makeup & Tóc", text: "Thay lớp makeup, kiểu tóc theo ảnh mẫu, bật riêng từng lớp." },
  { name: "Đổi Model", text: "Giữ đồ, pose và bối cảnh, chỉ thay người." },
  { name: "Sửa ảnh", text: "Mô tả một dòng thay đổi nhỏ, nhân vật giữ nguyên." },
  { name: "Packshot", text: "Từ ảnh trên người mẫu về ảnh sản phẩm nền phẳng." },
];

/** lib/studio/script-generator.ts — ROLE_ORDER and its Vietnamese labels. */
export const scriptRoles = [
  { role: "Mở đầu", line: "Giữ chân người xem trong 2 giây đầu." },
  { role: "Vấn đề", line: "Nói ra điều người mua đang ngại." },
  { role: "Lợi ích", line: "Nêu điểm bán từ USP bạn nhập." },
  { role: "Thể hiện", line: "Cho thấy sản phẩm trên người mẫu." },
  { role: "Kêu gọi", line: "Bảo người xem làm gì tiếp." },
];

/** The four quality layers (README "Bốn vấn đề của KYE", ARCHITECTURE_MUSE §4–5). */
export const quality = [
  {
    title: "Gác cổng trước khi tốn credit",
    text: "Ảnh quá nhỏ, mờ, cháy sáng hoặc không thấy mặt bị chặn ngay, kèm hướng dẫn chụp lại. Chưa gọi AI, chưa mất credit nào.",
  },
  {
    title: "Người mẫu khoá seed",
    text: "Model tạo một lần trong Elements, mang theo seed và bộ makeup mặc định sang mọi mode. Cùng một gương mặt qua từng bộ ảnh.",
  },
  {
    title: "QC tự động, làm lại một lần",
    text: "Mỗi ảnh được chấm gương mặt, bàn tay và độ khớp với sản phẩm gốc. Lỗi nặng thì tự tạo lại với seed khác trước khi trả về.",
  },
  {
    title: "Báo giá trước khi bấm",
    text: "Số credit hiện trước nút Gửi, kèm trường hợp xấu nhất nếu QC phải làm lại. Ảnh cần xem lại được gắn nhãn, không bị giấu.",
  },
];

/** Library side, inherited from KYE and still running in MUSE. */
export const workspace = [
  ["Thư viện ảnh AI", "Mỗi ảnh có tên, tag, màu, chất liệu, phong cách. Ảnh outfit tách thành từng món."],
  ["Smart Search", "Gõ “váy cúp ngực đen” như nói chuyện, hoặc tải ảnh lên để tìm món tương tự."],
  ["Thử đồ cho khách", "Thử nhiều sản phẩm trên ảnh của chính khách, tinh chỉnh nhiều vòng, lưu lịch sử."],
  ["Elements", "Models, poses, bối cảnh, makeup & tóc, photo style: tạo một lần, dùng lại ở mọi chế độ."],
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
    a: "Trả theo output: một credit xấp xỉ một ảnh 2K. Số credit (với video, cả thời gian ước tính) hiện trước khi bạn bấm Gửi. Entersight đề xuất gói theo số ảnh, video brand thật sự làm.",
  },
  {
    q: "Bắt đầu dùng MUSE thế nào?",
    a: "Để lại thông tin, Entersight liên hệ để setup MUSE Studio cho cửa hàng của bạn: nạp ảnh sản phẩm vào Thư viện, tạo người mẫu riêng của brand và hướng dẫn đội của bạn trong buổi đầu.",
  },
];

/** Real MUSE runs from the MUSE lookbook posts (21/10/2026): the shop's own
 *  inputs on the left, MUSE output on the right. Images in public/fashion-studio/real/. */
export const lookbooks = [
  {
    title: "Một bộ suit. Bối cảnh mới.",
    text: "Ảnh studio nền xám của shop thành lookbook trên nền đá, không cần dựng set. Người mẫu là gương mặt cố định đã lưu trong MUSE.",
    inputs: [
      { key: "suit-input-outfit", label: "Trang phục", alt: "Ảnh shop: người mẫu mặc suit trắng trong studio nền xám" },
      { key: "suit-input-bg", label: "Phông nền", alt: "Ảnh phông nền: vách đá vôi có nắng chiếu" },
    ],
    results: [
      { key: "suit-result-close", label: "Cận", alt: "Kết quả MUSE: người mẫu mặc suit trắng, khung cận, trước vách đá" },
      { key: "suit-result-full", label: "Toàn thân", alt: "Kết quả MUSE: người mẫu mặc suit trắng, toàn thân, trên nền đá" },
    ],
  },
  {
    title: "Từ sàn runway ra bờ biển.",
    text: "Ảnh bộ suit thêu chụp từ show, ảnh người mẫu nền trắng và một phông bờ biển: ba khung hình ngoài trời, vẫn giữ chi tiết thêu và đính đá trên áo.",
    inputs: [
      { key: "mint-input-outfit", label: "Trang phục", alt: "Ảnh runway: bộ suit thêu màu bạc hà" },
      { key: "mint-input-model", label: "Người mẫu", alt: "Ảnh người mẫu nam đứng trên nền trắng" },
      { key: "mint-input-bg", label: "Phông nền", alt: "Ảnh phông nền: bậc đá bên bờ biển, trời u ám" },
    ],
    results: [
      { key: "mint-result-full", label: "Toàn thân", alt: "Kết quả MUSE: người mẫu mặc suit thêu bạc hà, toàn thân, bên bờ biển" },
      { key: "mint-result-angle", label: "Góc nghiêng", alt: "Kết quả MUSE: người mẫu mặc suit thêu bạc hà, góc nghiêng, bên bờ biển" },
      { key: "mint-result-detail", label: "Chi tiết đính đá", alt: "Kết quả MUSE: cận mặt người mẫu và khăn, chi tiết đính đá trên áo" },
    ],
  },
] as const;
