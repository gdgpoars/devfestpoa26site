import type { Metadata } from "next";
import { Conduct } from "@/components/site/conduct";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Código de Conduta",
  description:
    "O Código de Conduta do DevFestPoa26: nosso compromisso com um evento seguro, inclusivo e respeitoso, feito pela comunidade e para a comunidade.",
  path: "/codigo-de-conduta",
});

export default function CodigoDeCondutaPage() {
  return (
    <>
      <Conduct />
      <FinalCTA />
    </>
  );
}
