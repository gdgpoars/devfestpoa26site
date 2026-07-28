import type { Metadata } from "next";
import { Conduct } from "@/components/site/conduct";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "Código de Conduta — DevFestPoa26" };

export default function CodigoDeCondutaPage() {
  return (
    <>
      <Conduct />
      <FinalCTA />
    </>
  );
}
