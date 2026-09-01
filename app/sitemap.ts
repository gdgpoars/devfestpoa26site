import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/sobre", priority: 0.8, changeFrequency: "monthly" },
  { path: "/tema", priority: 0.7, changeFrequency: "monthly" },
  { path: "/programacao", priority: 0.9, changeFrequency: "daily" },
  { path: "/experiencia", priority: 0.7, changeFrequency: "weekly" },
  { path: "/patrocinadores", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "weekly" },
  { path: "/codigo-de-conduta", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
