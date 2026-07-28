import type { Metadata } from "next";
import { Faq } from "@/components/site/faq";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "FAQ — DevFestPoa26" };

export default function FaqPage() {
  return (
    <>
      <Faq />
      <FinalCTA />
    </>
  );
}
