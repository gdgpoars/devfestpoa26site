import type { Metadata } from "next";
import { About } from "@/components/site/about";
import { Pillars } from "@/components/site/pillars";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "Sobre — DevFestPoa26" };

export default function SobrePage() {
  return (
    <>
      <About />
      <Pillars />
      <FinalCTA />
    </>
  );
}
