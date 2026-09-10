import type { Metadata } from "next";
import { SpookyBackground } from "@/components/site/spooky-background";
import { ExperienceHero } from "@/components/site/experience-hero";
import { Program } from "@/components/site/program";
import { Experience } from "@/components/site/experience";
import { Networking } from "@/components/site/networking";
import { Game } from "@/components/site/game";
import { Edition2025 } from "@/components/site/edition-2025";
import { Gallery } from "@/components/site/gallery";
import { Video } from "@/components/site/video";
import { FinalCTA } from "@/components/site/final-cta";
import { Reveal } from "@/components/site/reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Experiência no Evento",
  description:
    "Programação, networking estruturado, DevFestPoaGame e como foi a edição anterior: tudo sobre a experiência de quem participa do DevFestPoa26 em Porto Alegre.",
  path: "/experiencia",
  keywords: ["programação de evento de tecnologia", "networking tech Porto Alegre", "DevFestPoaGame"],
});

export default function ExperienciaPage() {
  return (
    <>
      <SpookyBackground />
      <ExperienceHero />
      <Reveal>
        <Program />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <Networking />
      </Reveal>
      <Reveal>
        <Game />
      </Reveal>
      <Reveal>
        <Edition2025 />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Video />
      </Reveal>
      <FinalCTA />
    </>
  );
}
