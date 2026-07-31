import type { Metadata } from "next";
import { Faq } from "@/components/site/faq";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";
import { FAQS } from "@/lib/content";

export const metadata: Metadata = pageMetadata({
  title: "Perguntas Frequentes",
  description:
    "Tire suas dúvidas sobre o DevFestPoa26: data, local, ingressos, programação, acessibilidade e tudo o que você precisa saber sobre o evento.",
  path: "/faq",
  keywords: ["dúvidas DevFestPoa26", "como comprar ingresso DevFestPoa26"],
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a.replace(/<[^>]+>/g, ""),
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Faq />
      <FinalCTA />
    </>
  );
}
