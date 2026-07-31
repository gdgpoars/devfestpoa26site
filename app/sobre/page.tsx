import type { Metadata } from "next";
import { About } from "@/components/site/about";
import { Pillars } from "@/components/site/pillars";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Sobre o Evento",
  description:
    "Conheça a proposta do DevFestPoa26, evento de tecnologia e comunidade em Porto Alegre, e os pilares de conteúdo: IA e agentes, cloud, desenvolvimento, segurança e carreira.",
  path: "/sobre",
  keywords: ["sobre o DevFestPoa26", "pilares de conteúdo", "conferência de tecnologia Porto Alegre"],
});

export default function SobrePage() {
  return (
    <>
      <About />
      <Pillars />
      <FinalCTA />
    </>
  );
}
