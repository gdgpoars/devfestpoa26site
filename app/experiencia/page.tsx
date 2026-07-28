import type { Metadata } from "next";
import { Program } from "@/components/site/program";
import { Experience } from "@/components/site/experience";
import { Networking } from "@/components/site/networking";
import { Game } from "@/components/site/game";
import { Edition2025 } from "@/components/site/edition-2025";
import { Gallery } from "@/components/site/gallery";
import { Video } from "@/components/site/video";
import { FinalCTA } from "@/components/site/final-cta";

export const metadata: Metadata = { title: "Experiência — DevFestPoa26" };

export default function ExperienciaPage() {
  return (
    <>
      <Program />
      <Experience />
      <Networking />
      <Game />
      <Edition2025 />
      <Gallery />
      <Video />
      <FinalCTA />
    </>
  );
}
