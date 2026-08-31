import type { Metadata } from "next";
import { ScheduleHero } from "@/components/site/schedule/schedule-hero";
import { ScheduleView } from "@/components/site/schedule/schedule-view";
import { ScheduleThemeProvider } from "@/components/site/schedule/schedule-theme-provider";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Programação — Grade de Conteúdo",
  description:
    "Confira a grade oficial de conteúdo do DevFestPoa26: palestras, workshops, mentorias e rodas de conversa, organizados por trilha e por horário, com palestrantes e resumos.",
  path: "/programacao",
  keywords: ["programação DevFestPoa26", "grade de palestras", "trilhas de conteúdo", "palestrantes DevFest"],
});

export default function ProgramacaoPage() {
  return (
    <ScheduleThemeProvider>
      <ScheduleHero />
      <ScheduleView />
      <FinalCTA />
    </ScheduleThemeProvider>
  );
}
