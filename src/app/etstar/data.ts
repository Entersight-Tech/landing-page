// ETStar product page content: Gói Đồng Hành inclusions, rollout and the
// illustrative Google Maps playbooks.

export const stats = [
  { value: "10.000+", label: "Địa điểm tin dùng" },
  { value: "50K+", label: "Đánh giá AI thu thập" },
  { value: "12+", label: "Quốc gia triển khai" },
  { value: "1–3 ngày", label: "Để bắt đầu vận hành" },
];

/** What a new customer weighs in the few seconds before picking a store. */
export const questions = [
  { q: "Cửa hàng có xuất hiện không?", a: "Hồ sơ thiếu thông tin, ít cập nhật thì Google ít đề xuất." },
  { q: "Review có đủ mới và đáng tin?", a: "Khách hài lòng thường ra về im lặng, rất ít người tự nhớ viết." },
  { q: "Chủ cửa hàng có chăm sóc khách?", a: "Review bị bỏ ngỏ nhiều ngày là tín hiệu xấu với cả khách lẫn Google." },
];

/** The listing a customer sees on their phone; the last row is "you". */
export const mapsList = [
  { name: "Bếp Nhà Mình", rating: "4.8", count: 128, reply: "hôm nay" },
  { name: "Cơm Tấm Sài Gòn", rating: "4.1", count: 64, reply: "4 tháng trước" },
  { name: "Bún Bò Cô Ba", rating: "4.0", count: 45, reply: "6 tháng trước" },
  { name: "Phở Hà Nội 1985", rating: "4.0", count: 33, reply: "9 tháng trước" },
];

export const pillars = [
  {
    tag: "01 · Thu hút",
    title: "Thêm review thật, không cần nhắc từng khách.",
    body: "Khách quét QR, trả lời khảo sát ngắn (đa ngôn ngữ). AI soạn sẵn nội dung đánh giá từ chính trải nghiệm đó. Khách xem lại, tự chỉnh và tự đăng lên Google Maps.",
    caption: "QR tại bàn · quầy thu ngân",
  },
  {
    tag: "02 · Chăm sóc",
    title: "Mọi review đều được phản hồi đúng lúc.",
    body: "Tất cả review về một nơi. AI soạn phản hồi theo giọng của cửa hàng, bằng ngôn ngữ của khách. Bạn duyệt và đăng trong một chạm, kể cả với khách nước ngoài.",
    caption: "Phản hồi đa ngôn ngữ",
  },
  {
    tag: "03 · Bảo vệ",
    title: "Review 1★ bất thường được báo sớm.",
    body: "Khi review tiêu cực dồn về bất thường, ETStar gửi cảnh báo kèm gợi ý câu trả lời, và theo dõi khiếu nại gửi Google theo đúng chính sách.",
    caption: "Cảnh báo review 1★",
  },
];

/** Rollout, from the price sheet. */
export const steps = [
  { title: "Tạo hồ sơ Google Business Profile", body: "Tạo mới hoặc kết nối hồ sơ sẵn có, điền đủ danh mục, địa chỉ, giờ mở cửa." },
  { title: "Hoàn thiện hồ sơ", body: "Tên cửa hàng, từ khóa địa phương, mô tả và hình ảnh theo chuẩn Google Maps." },
  { title: "Tăng review thật", body: "Quét QR → khảo sát → AI soạn nháp đánh giá → khách xem lại và tự đăng lên Maps." },
  { title: "Phản hồi đa ngôn ngữ", body: "AI soạn phản hồi giúp quán trả lời khách nước ngoài mà không cần biết ngoại ngữ." },
  { title: "Theo dõi & báo cáo", body: "Dashboard lượng đánh giá, thứ hạng từ khóa và báo cáo định kỳ." },
];

/**
 * Illustrative playbooks, NOT client results. Each pairs one thing a store
 * does with the Google Maps behaviour it plays into; the numbers only show
 * the kind of change that behaviour drives, and the page says so.
 */
export type Playbook = {
  kind: string;
  place: string;
  move: string;
  google: string;
  big: string;
  bigLabel: string;
  metric: string;
  change: string;
};

export const playbooks: Playbook[] = [
  {
    kind: "Quán ăn gia đình",
    place: "Quận 3, TP. HCM",
    move: "Đặt QR trên bàn, mời khách đánh giá ngay khi vừa ăn xong.",
    google: "Nhiều review mới, điểm cao làm hồ sơ “nổi bật” hơn trong kết quả gần đây.",
    big: "8 → 45",
    bigLabel: "review mới / tháng",
    metric: "Lượt tìm đường / tháng",
    change: "120 → 340",
  },
  {
    kind: "Spa & làm đẹp",
    place: "Đà Nẵng",
    move: "Trả lời mọi review trong 24 giờ, kể cả review 3★.",
    google: "Phản hồi của chủ hiện công khai ngay dưới review, khách mới đọc được.",
    big: "100%",
    bigLabel: "review được phản hồi",
    metric: "Cuộc gọi từ Maps / tháng",
    change: "30 → 85",
  },
  {
    kind: "Nha khoa",
    place: "Cầu Giấy, Hà Nội",
    move: "Khảo sát gợi khách nhắc đúng dịch vụ đã làm: niềng răng, tẩy trắng…",
    google: "Hồ sơ khớp hơn với lượt tìm theo dịch vụ, tức yếu tố “mức độ liên quan”.",
    big: "#15 → #4",
    bigLabel: "“niềng răng gần đây”",
    metric: "Lượt xem hồ sơ / tháng",
    change: "1.800 → 4.200",
  },
  {
    kind: "Homestay",
    place: "Hội An",
    move: "Khảo sát đa ngôn ngữ, trả lời khách quốc tế bằng chính tiếng của họ.",
    google: "Khách nước ngoài tìm bằng tiếng của mình vẫn đọc được review và phản hồi.",
    big: "4.1 → 4.7★",
    bigLabel: "điểm đánh giá",
    metric: "Lượt nhấp đặt phòng / tháng",
    change: "40 → 110",
  },
];

export const industries = [
  "F&B & Ẩm thực",
  "Spa & Làm đẹp",
  "Phòng khám",
  "Lưu trú & Du lịch",
  "Bán lẻ & Dịch vụ",
  "Giáo dục",
];

export const included = [
  "Kết nối Google Business Profile",
  "Tạo khảo sát & QR Code cho từng cửa hàng",
  "Chọn và cài từ khóa địa phương cho hồ sơ",
  "Đăng bài GBP tự động 2 lần / tuần",
  "Soạn sẵn phản hồi, tối đa 30 review / tuần",
  "Dashboard theo dõi cơ bản",
  "Câu lệnh (prompt) phản hồi chuẩn thương hiệu",
  "Hỗ trợ kỹ thuật tiếng Việt",
];

export const faqs = [
  {
    q: "ETStar có tạo review giả không?",
    a: "Không. ETStar chỉ giúp khách thật chia sẻ trải nghiệm thật. Khách tự chọn số sao, tự chỉnh nội dung và tự quyết định có đăng lên Google Maps hay không, đúng chính sách của Google.",
  },
  {
    q: "Thiết lập mất bao lâu? Có cần biết kỹ thuật?",
    a: "Không cần. Sau 1–3 ngày làm việc để thiết lập hồ sơ và khảo sát, bạn chỉ cần đặt mã QR trên bàn hoặc tại quầy thanh toán là bắt đầu thu thập đánh giá.",
  },
  {
    q: "Có đảm bảo cửa hàng lên Top 3 không?",
    a: "Không dịch vụ nào đảm bảo được vị trí cố định. Thứ hạng phụ thuộc mức liên quan, khoảng cách và cạnh tranh. ETStar giúp bạn chủ động cải thiện những yếu tố làm được: hồ sơ, review và tốc độ phản hồi.",
  },
  {
    q: "Ai triển khai và hỗ trợ? Có hóa đơn VAT không?",
    a: "Entersight trực tiếp cung cấp, thiết lập và hỗ trợ ETStar cho cửa hàng: hợp đồng tiếng Việt, hóa đơn VAT, thanh toán nội địa và hỗ trợ kỹ thuật bằng tiếng Việt.",
  },
  {
    q: "Giá tính theo cửa hàng hay theo thương hiệu?",
    a: "Theo chi nhánh, hợp đồng tối thiểu 3 tháng và có ưu đãi khi ký 6 hoặc 12 tháng. Để lại thông tin để Entersight gửi báo giá phù hợp với số chi nhánh của bạn.",
  },
];

