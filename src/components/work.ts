// LauLau Creative portfolio — sourced from the team's Behance galleries
// (LauLau Creative 2025, LauLau Creative Portfolio | Branding Deliverables).

/** `contain` keeps wordmarks whole inside the collage frames */
export type Shot = { src: string; w: number; h: number; caption: string; fit?: "contain" };

export type Work = {
  slug: string;
  title: string;
  client: string;
  kind: string;
  year: string;
  summary: string;
  scope: string[];
  /** project tone: the section background shifts to it while the slide is on screen */
  tone: string;
  /** first three shots make up the slide collage; all shots show in the case viewer */
  shots: Shot[];
  links?: { label: string; href: string }[];
};

const s = (src: string, w: number, h: number, caption: string, fit?: "contain"): Shot => ({
  src: `/work/${src}.webp`,
  w,
  h,
  caption,
  fit,
});

export const works: Work[] = [
  {
    slug: "ocb",
    title: "Tâm Quang Kết Nối",
    client: "OCB × Tân Tiến Phong",
    kind: "Event concept · Creative pitch",
    year: "2025",
    summary:
      "Creative pitch cho Music Concert kỷ niệm 30 năm OCB. Từ big idea “tâm quang – kết nối”, đội ngũ xây dựng key visual lấy cảm hứng từ hình đồng tiền, moodboard ánh sáng – chất liệu kính, định hướng sân khấu LED và sơ đồ khán đài.",
    scope: ["Creative direction", "Visual system", "Stage visual", "Pitch deck"],
    tone: "#03130d",
    shots: [
      s("ocb/cover", 1600, 900, "Tâm quang kết nối — creative pitch"),
      s("ocb/kv", 1600, 900, "Key visual phát triển từ biểu tượng đồng tiền"),
      s("ocb/ketnoi", 1600, 900, "“Kết nối” — hệ sinh thái số toàn diện"),
      s("ocb/30nam", 1600, 900, "30 năm, một tâm điểm rực sáng"),
      s("ocb/tamquang", 1600, 900, "Big idea"),
      s("ocb/tam", 1600, 900, "“Tâm” — nền tảng niềm tin"),
      s("ocb/moodboard", 1600, 900, "Moodboard: ánh sáng & chất liệu kính"),
      s("ocb/atmosphere", 1600, 900, "Atmosphere sân khấu"),
      s("ocb/seating", 1600, 900, "Sơ đồ khán đài"),
    ],
  },
  {
    slug: "perfume",
    title: "Where Scents Meet the Soul",
    client: "Niche perfume × CREA lab",
    kind: "Launch event · Creative deck",
    year: "2025",
    summary:
      "“Nốt hương vương tâm hồn” — creative deck cho sự kiện ra mắt một thương hiệu nước hoa niche. Concept không gian “Light – Fabric – Imagination”, lối vào, sân khấu chính, mặt bằng và cách trưng bày sản phẩm như một hành trình cảm giác.",
    scope: ["Concept", "Spatial design", "Product placement", "Creative deck"],
    tone: "#170702",
    shots: [
      s("perfume/cover", 1600, 885, "Launching creative deck"),
      s("perfume/entrance", 1600, 863, "Lối vào"),
      s("perfume/scents", 1600, 729, "Scents / meets / soul"),
      s("perfume/concept", 1600, 971, "Concept"),
      s("perfume/stage", 1600, 863, "Sân khấu chính"),
      s("perfume/floor", 1600, 863, "Mặt bằng tổng thể"),
      s("perfume/mood", 1600, 1080, "Moodboard"),
      s("perfume/display", 1600, 899, "Trưng bày sản phẩm"),
      s("perfume/table", 1600, 936, "Bàn trải nghiệm hương"),
    ],
  },
  {
    slug: "codoi",
    title: "Cô Đôi Thượng Ngàn",
    client: "Visual LED trình diễn",
    kind: "LED visual · Motion graphics",
    year: "2025",
    summary:
      "Gìn giữ văn hoá bằng ngôn ngữ thị giác đương đại. Bộ visual LED cho tiết mục lấy cảm hứng từ Cô Đôi Thượng Ngàn: nghiên cứu nhân vật (biểu tượng, tính cách, ngoại hình, ý nghĩa văn hoá), hoạ tiết cửa võng, ấn triện và minh hoạ hoa lá chuyển động.",
    scope: ["Character research", "Illustration", "LED design", "Motion"],
    tone: "#032420",
    shots: [
      s("codoi/hero", 1600, 606, "Cô Đôi Thượng Ngàn"),
      s("codoi/final", 1600, 677, "Khung hình LED hoàn chỉnh"),
      s("codoi/flowers", 1600, 704, "Minh hoạ hoa lá chuyển động"),
      s("codoi/mood", 1600, 1029, "Moodboard"),
      s("codoi/frame", 1600, 623, "Hiểu nhân vật, vượt khỏi màn trình diễn"),
      s("codoi/seal", 1600, 541, "Ấn triện & câu đối"),
    ],
  },
  {
    slug: "chunchin",
    title: "CHUNCHIN Studio",
    client: "CHUNCHIN Studio",
    kind: "Website · UX/UI",
    year: "2025",
    summary:
      "Thiết kế và prototype website responsive cho CHUNCHIN Studio, chuyển bản sắc thương hiệu thành trải nghiệm số hiện đại: hệ điều hướng trực quan, nhất quán trên mọi thiết bị, cân bằng giữa thẩm mỹ và khả năng sử dụng.",
    scope: ["UX planning", "UI design", "Responsive", "Prototype", "Design QA"],
    tone: "#141311",
    shots: [
      s("chunchin/overview", 1400, 756, "Project overview"),
      s("chunchin/photo", 1600, 512, "Tools / Role / Deliverables"),
      s("chunchin/screens", 1400, 405, "Màn hình dịch vụ & câu chuyện"),
    ],
    links: [
      {
        label: "Prototype",
        href: "https://www.figma.com/proto/Z4r2nxftofaAiB2dp8z7db/CHUNCHIN-Studio-Website?node-id=127-147&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=127%3A146&starting-point-node-id=127%3A147",
      },
    ],
  },
  {
    slug: "nookscape",
    title: "Nookscape",
    client: "Nookscape — furniture & interior",
    kind: "Brand identity",
    year: "2025",
    summary:
      "Bộ nhận diện ấm áp, gần gũi thiên nhiên cho studio nội thất Nookscape. Triết lý “không gian sống êm dịu” được chuyển thành hệ thống tối giản, chất liệu tự nhiên — từ logo, ấn phẩm văn phòng, poster, catalogue đến bao bì và social.",
    scope: ["Logo", "Stationery", "Catalogue", "Packaging", "Social"],
    tone: "#16130e",
    shots: [
      s("nookscape/hero", 1400, 987, "Nookscape"),
      s("nookscape/posters", 1200, 911, "Poster series"),
      s("nookscape/pack", 1400, 519, "Bao bì sản phẩm"),
      s("nookscape/stationery", 1200, 556, "Ấn phẩm văn phòng"),
      s("nookscape/catalog", 1400, 716, "Catalogue NIMBUS"),
      s("nookscape/grid", 1200, 976, "Social grid"),
    ],
  },
  {
    slug: "daphale-nimai",
    title: "Daphale × Nimaï",
    client: "Daphale Studios · Nimaï",
    kind: "Campaign · Instagram Story",
    year: "2025",
    summary:
      "Story Instagram theo chiến dịch cho hai thương hiệu thời trang: bộ sưu tập Giáng sinh “Santa’s Wardrobe” của Daphale và chiến dịch “The Trace of Heat” của Nimaï — kể chuyện sáng tạo mà vẫn giữ trọn nhận diện riêng của từng thương hiệu.",
    scope: ["Campaign visual", "Story design", "Prototype"],
    tone: "#1d1215",
    shots: [
      s("daphale/daphale", 1400, 1157, "Daphale — Let the season slip on"),
      s("daphale/nimai", 1400, 1260, "Nimaï — The Trace of Heat"),
      s("daphale/logos", 1400, 409, "Daphale Studios · Nimaï", "contain"),
    ],
    links: [
      {
        label: "Daphale story",
        href: "https://www.figma.com/proto/emv5xxQaUjzdUe6k4DdsKs/Ivy-Tran-2025?node-id=626-281&scaling=scale-down&content-scaling=fixed&page-id=626%3A88",
      },
      {
        label: "Nimaï story",
        href: "https://www.figma.com/proto/emv5xxQaUjzdUe6k4DdsKs/Ivy-Tran-2025?node-id=626-310&scaling=scale-down&content-scaling=fixed&page-id=626%3A88",
      },
    ],
  },
  {
    slug: "gubgipati",
    title: "Gubgipati",
    client: "Gubgipati — quán nướng Hàn Quốc",
    kind: "Social content · F&B",
    year: "2025",
    summary:
      "Loạt ấn phẩm social cho Gubgipati: hình ảnh món ăn hấp dẫn đi cùng cá tính thương hiệu rực rỡ, phục vụ khai trương, menu và các chiến dịch truyền thông, giúp thương hiệu nổi bật trên kênh online.",
    scope: ["Social graphics", "Campaign", "Menu visual"],
    tone: "#200506",
    shots: [
      s("gubgipati/top", 1400, 1056, "Profile, menu & món đặc trưng"),
      s("gubgipati/bottom", 1400, 480, "Khai trương & ưu đãi"),
    ],
  },
  {
    slug: "ricky-star",
    title: "Tâm Long Cửu Long",
    client: "Ricky Star",
    kind: "Music release · Social",
    year: "2025",
    summary:
      "Ấn phẩm social quảng bá MV “Tâm Long Cửu Long” của Ricky Star: bố cục mạnh, kể chuyện và nhất quán nhận diện — tạo kỳ vọng trước phát hành và giữ nhịp tương tác qua từng cột mốc lượt xem.",
    scope: ["Key visual", "Social campaign", "Milestone posts"],
    tone: "#0a1626",
    shots: [
      s("ricky/hero", 1600, 884, "Tâm Long Cửu Long — key visual"),
      s("ricky/grid", 1400, 1177, "Milestone posts"),
    ],
  },
];
