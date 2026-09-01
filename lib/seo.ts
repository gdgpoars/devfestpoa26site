import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/content";

export const OG_IMAGE = {
  url: `${SITE_URL}/logo%20evento.png`,
  width: 1080,
  height: 1080,
  alt: SITE_NAME,
};

export function pageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE_NAME}`,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
