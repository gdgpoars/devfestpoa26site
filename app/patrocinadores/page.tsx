import type { Metadata } from "next";
import { Sponsors } from "@/components/site/sponsors";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "Patrocinadores — DevFestPoa26" };

export default function PatrocinadoresPage() {
  return (
    <>
      <Sponsors />
      <FinalCTA />
    </>
  );
}
