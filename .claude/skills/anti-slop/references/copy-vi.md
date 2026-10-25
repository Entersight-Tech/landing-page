# Câu chữ tiếng Việt — vết AI và cách viết lại

`scripts/lint-vi.mjs` bắt được phần có thể đo: cụm từ sáo, con số thiếu nguồn, nút chung chung. Phần
quan trọng hơn (giọng, độ cụ thể, ý tưởng) chỉ người đọc mới nghe ra. File này là bài kiểm tra cho
người đọc đó.

Nguyên tắc chung, lấy từ taste-skill (`vendor/taste-skill/references/copy.md`) và áp cho tiếng Việt:
**câu chữ là quyết định thiết kế đầu tiên.** Viết cả trang thành văn bản trơn trước khi đụng markup.

## 1. Năm bài kiểm tra cho mọi câu hiển thị

Đọc từng heading, câu dẫn, nhãn nút, chú thích. Câu nào trượt một bài thì viết lại.

| Bài kiểm tra | Câu hỏi | Trượt khi |
| --- | --- | --- |
| **Đối thủ** | Thay "Entersight" bằng tên một agency khác. Câu còn đúng không? | Còn đúng: câu thuộc về ngành, không thuộc về mình. |
| **Cụ thể** | Câu có tên, số, nơi chốn, hoặc một việc nhìn thấy được không? | Chỉ có tính từ ("hiệu quả", "thông minh", "toàn diện"). |
| **Bằng chứng** | Con số này lấy từ đâu trên trang? | Không chỉ ra được case, báo cáo, hoặc nguồn. |
| **Nói miệng** | Founder có nói câu này với khách qua điện thoại không? | Nghe như brochure, như slide pitch. |
| **Hai dòng** | Heading có nằm gọn trong 2 dòng ở 390px không (~32 ký tự ở cỡ 40px)? | Heading là cả một câu văn 3–6 dòng. |

## 2. Danh sách vết (tháng 10/2026)

Đây là từ điển các mẫu bị sản xuất hàng loạt, không phải lệnh cấm từ ngữ. Một từ trong danh sách vẫn
dùng được nếu nó là thuật ngữ chính xác nhất. Danh sách này sẽ cũ: mỗi "từ thay thế" phổ biến sẽ thành
vết của đợt sau. Vì vậy cách sửa là **thủ tục** (lấy fact của chính khách hàng), không phải một từ khác.

### Từ vựng agency (lint-vi: FAIL)
kiến tạo · hệ sinh thái · toàn diện · bứt phá · đột phá · đòn bẩy · nâng tầm · vượt trội · chuyển mình ·
kỷ nguyên số · cách mạng hoá · hiện thực hoá · tái định nghĩa · tầm cao mới · tiên phong · đẳng cấp ·
chuẩn mực · liền mạch · điểm rơi cảm xúc · chạm đến cảm xúc · mọi điểm chạm · tối đa hoá · tái cấu trúc ·
tăng trưởng bền vững · tận tâm · giải pháp toàn diện/tối ưu/thông minh

### Từ mơ hồ (lint-vi: WARN)
điểm chạm · tối ưu · thông minh · bền vững · hành trình · đồng hành · giá trị cốt lõi · nhanh chóng · dễ dàng ·
hàng đầu · uy tín · chuyển đổi số · số hoá quy trình · "giải pháp" dùng thay cho tên thứ đó

### Dáng câu
- **"Không chỉ X mà còn Y"**: dáng "sửa lại" kinh điển của AI. Nói thẳng Y.
- **Bộ ba tính từ**: "nhanh chóng, chính xác và hiệu quả". Giữ một, kèm con số.
- **Câu khẩu hiệu có vế đối**: "Công nghệ × Sáng tạo", "Tiếp thị thông minh — Vận hành tinh gọn". Không mang thông tin.
- **Heading viết hoa toàn bộ**: tiếng Việt viết hoa chồng dấu rất khó đọc. Dùng sentence case.
- **Chữ hoa chen chữ nghiêng nhỏ** ("*số hoá* QUY TRÌNH"): mẫu template, không phải giọng.
- **Gạch ngang dài (—) ở khắp nơi**: phần lớn nên là dấu chấm hoặc dấu phẩy.
- **Lẫn tiếng Anh vô cớ**: "data-driven", "all-in-one", "insight sâu". Dùng chữ khách nói.
- **Xưng hô cứng**: "Quý khách", "quý doanh nghiệp". Nói với một người: "bạn", hoặc vai trò ("chủ cửa hàng").
- **Nút chung chung**: "Tìm hiểu thêm", "Khám phá ngay". Gọi tên hành động và đối tượng ("Kể vấn đề của bạn").

### Bằng chứng
- **Không bịa**: không khách hàng, quote, review, logo hay số liệu kinh doanh nào không có thật.
- Số **không nguồn** (50%, 3x, 20+) phải gắn với một case cụ thể trên trang, hoặc bỏ.
- Các số **mâu thuẫn nhau** ("20+ dự án" ở chỗ này, "10+ doanh nghiệp" ở chỗ kia) là vết nặng nhất về độ tin.
- **Testimonial** là lời của khách: chỉ được cắt, đánh dấu chỗ lược bằng "…", không được viết lại. Quote
  nghe như AI viết thì đề nghị khách gửi bản khác, đừng tự sửa.

## 3. Cách viết lại: thủ tục, không phải từ thay thế

1. **Liệt kê fact của khách hàng** trước khi viết: tên, nơi chốn, con số có nguồn, ràng buộc, kết quả.
   Với Entersight: homestay ở Huế không cần lễ tân (Oni), 5× tốc độ ra nội dung (KYE), ROAS trung bình 8.0 (MỘT),
   hotline là số của founder Kiều Oanh.
2. **Viết trang như một chuỗi luận điểm**, mỗi section một dòng kèm bằng chứng. Section nào không có
   luận điểm thì xoá.
3. **Viết heading như tiêu đề**, khoảng 5 từ hoặc ~32 ký tự. Phần giải thích chuyển xuống câu dẫn ngay bên dưới.
4. **Đọc to.** Câu nào vấp khi đọc thì viết lại.

### Ví dụ đã làm trên trang này

| Trước | Sau | Vì sao |
| --- | --- | --- |
| Số hoá quy trình marketing đúng đích cho SMEs | Để máy làm việc lặp lại. Đội của bạn lo khách hàng. | Nói ra lợi ích bằng việc cụ thể, bỏ "số hoá", "đúng đích" |
| Entersight kiến tạo hệ sinh thái tiếp thị số toàn diện… | Chúng tôi dựng hệ thống vận hành, chạy quảng cáo và làm nội dung… từ homestay ở Huế không cần lễ tân… | Động từ thật, ví dụ có thật thay cho ba cụm sáo |
| Tối ưu 100% chi phí lễ tân | Không còn chi phí lễ tân | Cùng nghĩa, bỏ chữ "tối ưu" và con số 100% vô nghĩa |
| Sẵn sàng bứt phá cùng Entersight? | Kể cho chúng tôi nghe bạn đang vướng ở đâu. | Câu mời nói chuyện thay cho khẩu hiệu |
| Một đối tác, năm năng lực. | Bốn mảng việc, một đội làm từ đầu đến cuối. | Bớt khẩu hiệu đối xứng, nói lợi ích (một đầu mối) |

Lưu ý: chính các câu "Sau" ở trên vẫn trượt bài **Hai dòng** (inspector đo hero 4 dòng ở 1440px).
Đó là việc còn lại của vòng sau.
