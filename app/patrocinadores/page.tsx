import type { Metadata } from "next";
import { Sponsors } from "@/components/site/sponsors";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Patrocinadores",
  description:
    "Conheça as empresas que patrocinam e apoiam o DevFestPoa26, o evento de tecnologia e comunidade das GDG Porto Alegre e GDG Caxias do Sul.",
  path: "/patrocinadores",
  keywords: ["patrocínio de evento de tecnologia", "empresas de tecnologia Porto Alegre"],
});

export default function PatrocinadoresPage() {
  return (
    <>
      <Sponsors />
      <FinalCTA />
    </>
  );
}
