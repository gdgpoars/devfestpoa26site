import type { Metadata } from "next";
import { ThemeSection } from "@/components/site/theme-section";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "Tema 2026 — DevFestPoa26" };

export default function TemaPage() {
  return (
    <>
      <ThemeSection />
      <FinalCTA />
    </>
  );
}
