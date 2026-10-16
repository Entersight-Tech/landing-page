// EnterReview product page content: Gói Đồng Hành price sheet, rollout and
// case-study figures supplied by Entersight.

export const BASE_PRICE = 2_500_000;

export const stats = [
  { value: "10.000+", label: "Địa điểm tin dùng" },
  { value: "50K+", label: "Đánh giá AI thu thập" },
  { value: "12+", label: "Quốc gia triển khai" },
  { value: "1–3 ngày", label: "Để bắt đầu vận hành" },
];

/** What a new customer weighs in the few seconds before picking a store. */
export const questions = [
  { q: "Cửa hàng có xuất hiện không?", a: "Hồ sơ thiếu thông tin, ít cập nhật thì Google ít đề xuất." },
  { q: "Review có đủ mới và đáng tin?", a: "Khách hài lòng thường ra về im lặng — rất ít người tự nhớ viết." },
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
    tag: "01 — Thu hút",
    title: "Thêm review thật, không cần nhắc từng khách.",
    body: "Khách quét QR, trả lời khảo sát ngắn (đa ngôn ngữ). AI soạn sẵn nội dung đánh giá từ chính trải nghiệm đó — khách xem lại, tự chỉnh và tự đăng lên Google Maps.",
    caption: "QR tại bàn · quầy thu ngân",
  },
  {
    tag: "02 — Chăm sóc",
    title: "Mọi review đều được phản hồi đúng lúc.",
    body: "Tất cả review về một nơi. AI soạn phản hồi theo giọng thương hiệu và theo ngôn ngữ của khách — bạn duyệt và đăng trong một chạm, kể cả với khách nước ngoài.",
    caption: "Phản hồi đa ngôn ngữ",
  },
  {
    tag: "03 — Bảo vệ",
    title: "Chủ động giữ gìn uy tín cửa hàng.",
    body: "Cảnh báo sớm review tiêu cực bất thường, gợi ý cách phản hồi chuyên nghiệp và theo dõi khiếu nại theo đúng chính sách Google.",
    caption: "Cảnh báo review 1★",
  },
];

/** Rollout, from the price sheet. */
export const steps = [
  { title: "Tạo hồ sơ Google Business Profile", body: "Thông tin cơ bản, danh mục, địa chỉ, giờ hoạt động — tạo mới hoặc kết nối hồ sơ sẵn có." },
  { title: "Tối ưu hồ sơ", body: "Tên cửa hàng, từ khóa địa phương, mô tả và hình ảnh theo chuẩn Google Maps." },
  { title: "Tăng review thật", body: "Quét QR → khảo sát → AI soạn nháp đánh giá → khách xem lại và tự đăng lên Maps." },
  { title: "Phản hồi đa ngôn ngữ", body: "AI soạn phản hồi giúp quán trả lời khách nước ngoài mà không cần biết ngoại ngữ." },
  { title: "Theo dõi & báo cáo", body: "Dashboard lượng đánh giá, thứ hạng từ khóa và báo cáo định kỳ." },
];

export type CaseStudy = {
  name: string;
  place: string;
  kind: string;
  reviews: string;
  period: string;
  keyword: string;
  rank: string;
  metric: string;
  change: string;
};

export const cases: CaseStudy[] = [
  {
    name: "UTAGE Yokocho",
    place: "TP. HCM, Việt Nam",
    kind: "Nhà hàng",
    reviews: "327",
    period: "2 tháng",
    keyword: "“nhà hàng Nhật Bản”",
    rank: "#12 → #04",
    metric: "Lượt tìm đường / 2 tháng",
    change: "780 → 1.125",
  },
  {
    name: "EMO. Hair & Beauty",
    place: "TP. HCM, Việt Nam",
    kind: "Làm đẹp",
    reviews: "705",
    period: "4 tháng",
    keyword: "“beauty salon” HCM",
    rank: "Chưa có → #01",
    metric: "Lượt tìm đường / tháng",
    change: "0 → 767",
  },
  {
    name: "Halal Wagyu Yakiniku Naruto",
    place: "Shibuya, Nhật Bản",
    kind: "Nhà hàng",
    reviews: "2.478",
    period: "10 tháng",
    keyword: "“shibuya halal restaurant”",
    rank: "Chưa có → #06",
    metric: "Lượt tìm đường / tháng",
    change: "0 → 7.130",
  },
  {
    name: "Japanese Shokudo Morimoto",
    place: "Đài Loan",
    kind: "Nhà hàng",
    reviews: "1.136",
    period: "5 tháng",
    keyword: "“hamburg” khu vực",
    rank: "Chưa có → #03",
    metric: "Lượt xem menu / tháng",
    change: "0 → 5.877",
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
  "Cài đặt từ khóa địa phương tối ưu",
  "Đăng bài GBP tự động 2 lần / tuần",
  "Hỗ trợ soạn phản hồi — tối đa 30 review / tuần",
  "Dashboard theo dõi cơ bản",
  "Câu lệnh (prompt) phản hồi chuẩn thương hiệu",
  "Hỗ trợ kỹ thuật tiếng Việt",
];

/** Contract terms; 3 months is the minimum. */
export const terms = [
  { months: 3, discount: 0, note: "Tối thiểu · giá niêm yết" },
  { months: 6, discount: 10, note: "Ký hợp đồng 6 tháng" },
  { months: 12, discount: 16.6, note: "Ký hợp đồng 12 tháng" },
];

export const faqs = [
  {
    q: "EnterReview có tạo review giả không?",
    a: "Không. EnterReview chỉ giúp khách thật chia sẻ trải nghiệm thật. Khách tự chọn số sao, tự chỉnh nội dung và tự quyết định có đăng lên Google Maps hay không — tuân thủ chính sách của Google.",
  },
  {
    q: "Thiết lập mất bao lâu? Có cần biết kỹ thuật?",
    a: "Không cần. Sau 1–3 ngày làm việc để thiết lập hồ sơ và khảo sát, bạn chỉ cần đặt mã QR trên bàn hoặc tại quầy thanh toán là bắt đầu thu thập đánh giá.",
  },
  {
    q: "Có đảm bảo cửa hàng lên Top 3 không?",
    a: "Không dịch vụ nào đảm bảo được vị trí cố định — thứ hạng phụ thuộc mức liên quan, khoảng cách và cạnh tranh. EnterReview giúp bạn chủ động cải thiện những yếu tố làm được: hồ sơ, review và tốc độ phản hồi.",
  },
  {
    q: "Ai triển khai và hỗ trợ? Có hóa đơn VAT không?",
    a: "Entersight trực tiếp cung cấp, thiết lập và hỗ trợ EnterReview cho cửa hàng: hợp đồng tiếng Việt, hóa đơn VAT, thanh toán nội địa và hỗ trợ kỹ thuật bằng tiếng Việt.",
  },
  {
    q: "Giá tính theo cửa hàng hay theo thương hiệu?",
    a: "Theo chi nhánh: 2.500.000đ / tháng / chi nhánh (chưa gồm VAT), hợp đồng tối thiểu 3 tháng. Chuỗi nhiều chi nhánh vui lòng liên hệ để được báo giá riêng.",
  },
];

export const formatVnd = (n: number) => n.toLocaleString("vi-VN");
