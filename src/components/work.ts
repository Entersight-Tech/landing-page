// LauLau Creative portfolio, sourced from the team's Behance galleries
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
      "Bài pitch sáng tạo cho đêm nhạc kỷ niệm 30 năm OCB. Từ ý tưởng “tâm quang, kết nối”, chúng tôi làm key visual dựa trên hình đồng tiền, moodboard ánh sáng và chất liệu kính, phương án sân khấu LED và sơ đồ khán đài.",
    scope: ["Creative direction", "Visual system", "Stage visual", "Pitch deck"],
    tone: "#03130d",
    shots: [
      s("ocb/cover", 1600, 900, "Trang bìa bài pitch: logo OCB trên quầng sáng xanh"),
      s("ocb/kv", 1600, 900, "Key visual phát triển từ biểu tượng đồng tiền"),
      s("ocb/ketnoi", 1600, 900, "Slide “kết nối”: dải sáng xanh quấn quanh một tâm"),
      s("ocb/30nam", 1600, 900, "Slide “30 năm”: các khối sáng chụm về một tâm"),
      s("ocb/tamquang", 1600, 900, "Big idea “tâm quang, kết nối”"),
      s("ocb/tam", 1600, 900, "Slide “tâm”: những vòng kính xanh chồng lên nhau"),
      s("ocb/moodboard", 1600, 900, "Moodboard: ánh sáng & chất liệu kính"),
      s("ocb/atmosphere", 1600, 900, "Không khí sân khấu"),
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
      "Creative deck cho sự kiện ra mắt một thương hiệu nước hoa niche, chủ đề “Nốt hương vương tâm hồn”. Không gian xoay quanh ba chữ Light, Fabric, Imagination. Deck gồm lối vào, sân khấu chính, mặt bằng, khu trưng bày sản phẩm và bàn trải nghiệm hương.",
    scope: ["Concept", "Spatial design", "Product placement", "Creative deck"],
    tone: "#170702",
    shots: [
      s("perfume/cover", 1600, 885, "Trang bìa creative deck"),
      s("perfume/entrance", 1600, 863, "Lối vào"),
      s("perfume/scents", 1600, 729, "Hai ảnh hoa nối bằng ba chữ scents, meets, soul"),
      s("perfume/concept", 1600, 971, "Concept: một người đứng giữa vườn hoa"),
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
      "Bộ visual LED cho một tiết mục lấy cảm hứng từ Cô Đôi Thượng Ngàn. Trước khi vẽ, chúng tôi tìm hiểu nhân vật qua tín ngưỡng thờ Mẫu: biểu tượng, tính cách, ngoại hình, ý nghĩa văn hoá. Từ đó ra hoạ tiết cửa võng, ấn triện và minh hoạ hoa lá chuyển động.",
    scope: ["Character research", "Illustration", "LED design", "Motion"],
    tone: "#032420",
    shots: [
      s("codoi/hero", 1600, 606, "Cô Đôi Thượng Ngàn"),
      s("codoi/final", 1600, 677, "Khung hình LED hoàn chỉnh"),
      s("codoi/flowers", 1600, 704, "Minh hoạ hoa lá chuyển động"),
      s("codoi/mood", 1600, 1029, "Moodboard"),
      s("codoi/frame", 1600, 623, "Khung cửa võng chạm hoa lá, mở phần nghiên cứu nhân vật"),
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
      "Website responsive cho CHUNCHIN Studio, làm trên Figma: giao diện desktop và mobile, prototype bấm thử được và tài liệu bàn giao cho lập trình viên.",
    scope: ["UX planning", "UI design", "Responsive", "Prototype", "Design QA"],
    tone: "#141311",
    shots: [
      s("chunchin/overview", 1400, 756, "Trang chủ website trên màn hình laptop"),
      s("chunchin/photo", 1600, 512, "Công cụ, vai trò và sản phẩm bàn giao"),
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
    client: "Nookscape, studio nội thất",
    kind: "Brand identity",
    year: "2025",
    summary:
      "Bộ nhận diện cho Nookscape, studio nội thất theo triết lý “không gian sống êm dịu”: tông ấm, chất liệu tự nhiên, bố cục tối giản. Gồm logo, ấn phẩm văn phòng, poster, catalogue NIMBUS, bao bì và social.",
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
      "Story Instagram cho hai thương hiệu thời trang: bộ sưu tập Giáng sinh “Santa’s Wardrobe” của Daphale và chiến dịch “The Trace of Heat” của Nimaï. Story Daphale cho xem từng mẫu váy kèm phụ kiện. Cả hai có bản prototype bấm thử trên Figma.",
    scope: ["Campaign visual", "Story design", "Prototype"],
    tone: "#1d1215",
    shots: [
      s("daphale/daphale", 1400, 1157, "Story Daphale “Let the season slip on”: từng mẫu váy kèm phụ kiện"),
      s("daphale/nimai", 1400, 1260, "Story Nimaï “The Trace of Heat”"),
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
    client: "Gubgipati, quán nướng Hàn Quốc",
    kind: "Social content · F&B",
    year: "2025",
    summary:
      "Ấn phẩm social cho quán nướng Hàn Quốc Gubgipati: ảnh profile, menu, món đặc trưng, bài khai trương và ưu đãi.",
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
      "Ấn phẩm social cho MV “Tâm Long Cửu Long” của Ricky Star: key visual, bài đăng trước ngày phát hành và bài mừng từng mốc lượt xem.",
    scope: ["Key visual", "Social campaign", "Milestone posts"],
    tone: "#0a1626",
    shots: [
      s("ricky/hero", 1600, 884, "Key visual: Ricky Star và tên MV viết bằng mây"),
      s("ricky/grid", 1400, 1177, "Milestone posts"),
    ],
  },
];
