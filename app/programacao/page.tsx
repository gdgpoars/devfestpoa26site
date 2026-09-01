import type { Metadata } from "next";
import { ScheduleHero } from "@/components/site/schedule/schedule-hero";
import { ScheduleView } from "@/components/site/schedule/schedule-view";
import { ScheduleThemeProvider } from "@/components/site/schedule/schedule-theme-provider";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";
import { FORMATS, TALKS, TRACKS, TRACK_BY_ID, toISODateTime } from "@/lib/schedule";
import { EVENT_TARGET_ISO, EVENT_END_ISO, SITE_NAME, SITE_URL } from "@/lib/content";

const trackNames = TRACKS.map((t) => t.name);
const topTags = Array.from(new Set(TALKS.flatMap((t) => t.tags))).slice(0, 12);

export const metadata: Metadata = pageMetadata({
  title: "Programação — Grade de Conteúdo",
  description:
    "Confira a grade oficial de conteúdo do DevFestPoa26: palestras, workshops, mentorias e rodas de conversa, organizados por trilha e por horário, com palestrantes e resumos.",
  path: "/programacao",
  keywords: [
    "programação DevFestPoa26",
    "grade de palestras",
    "trilhas de conteúdo",
    "palestrantes DevFest",
    ...trackNames,
    ...topTags,
  ],
});

const programJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: `Programação — ${SITE_NAME}`,
  description:
    "Grade oficial de conteúdo do DevFestPoa26: palestras, workshops, mentorias, laboratórios e rodas de conversa, organizados em trilhas por assunto.",
  startDate: EVENT_TARGET_ISO,
  endDate: EVENT_END_ISO,
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  url: `${SITE_URL}/programacao`,
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
  subEvent: TALKS.filter((t) => t.hasDetails).map((t) => ({
    "@type": "Event",
    name: t.title,
    description: t.summary ?? t.title,
    startDate: toISODateTime(t.start),
    endDate: toISODateTime(t.end),
    keywords: [FORMATS[t.format].label, TRACK_BY_ID[t.track].name, ...t.tags].join(", "),
    location: {
      "@type": "Place",
      name: `${TRACK_BY_ID[t.track].name} — Faculdade Dom Bosco`,
    },
    performer: t.speakers.map((s) => ({
      "@type": "Person",
      name: s.name,
      ...(s.linkedin ? { sameAs: s.linkedin } : {}),
    })),
  })),
};

export default function ProgramacaoPage() {
  return (
    <ScheduleThemeProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(programJsonLd) }}
      />
      <ScheduleHero />
      <ScheduleView />
      <FinalCTA />
    </ScheduleThemeProvider>
  );
}
