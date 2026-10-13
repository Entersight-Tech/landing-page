import type { MetadataRoute } from "next";
import { works } from "@/components/work";

const base = "https://www.entersight-tech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/work`, priority: 0.8 },
    ...works.map((w) => ({ url: `${base}/work/${w.slug}`, priority: 0.6 })),
  ];
}
