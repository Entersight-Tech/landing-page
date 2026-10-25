# entersight-audit

Bộ audit dùng chung cho mọi giao diện của Entersight: landing page, trang sản phẩm và màn hình ứng
dụng (dashboard LMS, MUSE Studio, ETStar…). Nó tìm và sửa "vết AI" trong hình thức và câu chữ, lỗi
trợ năng, độ dễ đọc, motion và cảm giác trên điện thoại, theo brand Entersight, không thiết kế lại
brand.

Gọi trong Claude Code bằng cách nói tự nhiên ("audit trang này", "trang này nhìn giống AI làm",
"kiểm tra trợ năng") hoặc `/entersight-audit:entersight-audit`.

## Trong plugin có gì

| Skill | Vai trò |
| --- | --- |
| `entersight-audit` | Skill điều phối: quy trình đo → đọc → sửa → nhìn → báo cáo, policy brand, 3 script đo |
| `web-design-guidelines` | ~100 luật giao diện của Vercel: trợ năng, focus, form, chữ, ảnh, i18n |
| `review-animations`, `improve-animations`, `animation-performance` | Chuẩn motion của Emil Kowalski: easing, thời lượng, hiệu năng |
| `mobile-native` | Chuẩn mobile: hover kẹt, zoom vào ô nhập, phản hồi khi chạm, safe area |
| `emil-design-eng` | Triết lý chi tiết giao diện của Emil Kowalski |
| `break-ui` | Thử giao diện với dữ liệu xấu nhất (tên dài, danh sách rỗng, số rất lớn…) |

### Bốn máy đo (`scripts/audit.mjs` chạy cả bốn)

1. **taste-skill lint**: quét mã nguồn tìm dấu hiệu AI (gradient, eyebrow, đánh số 01/02, shadow…).
2. **lint-vi** (Entersight tự viết): quét câu chữ tiếng Việt: cụm sáo ("kiến tạo", "hệ sinh thái",
   "bứt phá"…), số liệu thiếu nguồn, nút chung chung, lạm dụng gạch ngang. Không skill nào trên thị
   trường đọc được tiếng Việt.
3. **taste-skill inspector**: mở trang thật ở 1440/768/390px, đo heading quá 2 dòng, số cỡ chữ, chữ
   nhỏ, khoảng trống, gradient, nhãn trên heading.
4. **probe** (Entersight tự viết): tương phản WCAG, label, alt, viền focus, vùng chạm, skip link, thứ
   tự heading, độ dài dòng, khoảng cách dòng, cùng các luật của Impeccable đo được trên trang.

Mọi kết quả đi qua **policy 2 tầng**: `defaults.json` (chung cho Entersight) và
`.entersight-audit.json` ở gốc từng repo (riêng của app đó). Màu tím + lime, font brand và motion tiết
chế được miễn; eyebrow, đánh số trang trí và chữ hoa nhỏ là lỗi.

## Cài đặt

**Cách chính: thư viện plugin của tổ chức trên claude.ai.** Khi plugin đã được publish và duyệt, mọi
người trong tổ chức bật nó trên claude.ai. Nó dùng được trong mọi repo, kể cả Claude Code trên web.

**Claude Code trên máy riêng, qua marketplace của repo này:** thêm vào `.claude/settings.json` của repo
app:

```json
{
  "extraKnownMarketplaces": {
    "entersight-tools": { "source": { "source": "github", "repo": "Entersight-Tech/landing-page" } }
  },
  "enabledPlugins": { "entersight-audit@entersight-tools": true }
}
```

rồi mỗi người chạy một lần `claude plugin install entersight-audit@entersight-tools --scope project`.
(Marketplace qua settings không tự load trong cloud session; ở đó dùng cách chính.)

## Dùng cho một app mới

1. Tạo `.entersight-audit.json` ở gốc repo (xem mẫu trong `skills/entersight-audit/SKILL.md`): `mode`
   (`page` hay `app`), `src`, `urls`, font riêng nếu có. Thêm `.entersight-audit/` vào `.gitignore`.
2. Build bản production, chạy server, rồi
   `node <plugin>/skills/entersight-audit/scripts/audit.mjs --base http://localhost:3000`.
3. Làm theo 5 bước trong SKILL.md. Mỗi quyết định hoặc ngoại lệ ghi vào config kèm lý do và ngày.

## Lịch sử: landing page Entersight (10/2026)

Bộ này hình thành khi làm lại landing page entersight-tech.com:

| Bước | Việc đã làm | Kết quả |
| --- | --- | --- |
| Viết lại trang chủ | Từ 24 màn hình xuống 11; bỏ cuộn bị khoá theo trang, chữ nhảy ký tự, section trùng lặp, số liệu không nguồn; viết lại copy theo giọng chủ doanh nghiệp | PR #45 |
| Motion & mobile (skill Emil Kowalski) | Phản hồi khi bấm, gate hover, ô nhập 16px, khoá cuộn khi mở menu, sửa FLIP ở /etstar, watchdog ở /lms | PR #46 |
| Skill anti-slop + sửa 5 trang | Ghép taste-skill với lint tiếng Việt và policy brand; heading tối đa 2 dòng, chữ ≥13px, bỏ glow, làm lại ảnh share | 44 → 1 FAIL (PR #47) |
| Bỏ eyebrow & đánh số 01/02 | Theo quyết định của chủ: gộp thông tin vào heading/câu dẫn | 0 FAIL (PR #48) |
| Thêm Impeccable, Vercel, probe trợ năng | Skip link, tương phản ở /lms, focus ring, tab ARIA sai chuẩn, nhịp câu lặp | 0 FAIL ở cả 4 máy đo (PR #49) |

Những gì vẫn cần người: giọng văn và ý tưởng, testimonial (lời của khách: chỉ cắt, không viết lại),
nguồn của số liệu, và kiểm tra trên điện thoại thật.

## Giới hạn đã biết

- Bộ dò gốc của Impeccable là binary native, không chạy được trong cloud session. Danh mục luật của nó
  được vendor; phần đo được cài lại trong `probe.mjs`, phần còn lại đọc tay.
- Chưa đo hiệu năng (Core Web Vitals / Lighthouse).
- Inspector chỉ cuộn tối đa 11 màn hình; trang dài hơn thì tự cuộn kiểm tra trước khi tin báo cáo
  "khoảng trống".

Giấy phép các phần bên thứ ba: xem `NOTICE.md`.
