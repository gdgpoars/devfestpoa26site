import type { Metadata } from "next";
import { Countdown } from "@/components/site/countdown";
import { Hero } from "@/components/site/hero";
import { Highlights } from "@/components/site/highlights";
import { ExploreCards } from "@/components/site/explore-cards";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";
import {
  EVENT_END_ISO,
  EVENT_TARGET_ISO,
  GDG_COMMUNITIES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "DevFestPoa26 — Tecnologia, Comunidade e Futuro em Porto Alegre",
  description:
    "O DevFest de Porto Alegre: um dia de conteúdo técnico, comunidade e networking, feito pelas comunidades GDG Porto Alegre e GDG Caxias do Sul. 31 de outubro de 2026, na Faculdade Dom Bosco.",
  path: "/",
});

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: SITE_NAME,
  description:
    "Um dia de conteúdo técnico, comunidade e networking em Porto Alegre: inteligência artificial e agentes, cloud, desenvolvimento, segurança e carreira em tecnologia.",
  startDate: EVENT_TARGET_ISO,
  endDate: EVENT_END_ISO,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  url: SITE_URL,
  location: {
    "@type": "Place",
    name: "Faculdade Dom Bosco",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto Alegre",
      addressRegion: "RS",
      addressCountry: "BR",
    },
  },
  organizer: GDG_COMMUNITIES.map((c) => ({
    "@type": "Organization",
    name: c.name,
    url: c.links.find((l) => l.icon === "globe")?.href,
    sameAs: c.links.filter((l) => l.icon !== "globe").map((l) => l.href),
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <Countdown />
      <Hero />
      <Highlights />
      <ExploreCards />
      <FinalCTA />
    </>
  );
}
