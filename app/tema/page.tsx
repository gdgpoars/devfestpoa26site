import type { Metadata } from "next";
import { ThemeSection } from "@/components/site/theme-section";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tema 2026 — Criar, Proteger, Escalonar",
  description:
    "O tema do DevFestPoa26 2026: criar, proteger e escalonar na era agêntica. Inteligência artificial, agentes autônomos, segurança e escalabilidade para desenvolvedores e criadores.",
  path: "/tema",
  keywords: ["era agêntica", "agentes autônomos", "inteligência artificial generativa"],
});

export default function TemaPage() {
  return (
    <>
      <ThemeSection />
      <FinalCTA />
    </>
  );
}
