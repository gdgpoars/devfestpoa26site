import type { Metadata } from "next";
import { GameManual } from "@/components/site/game-manual";
import { FinalCTA } from "@/components/site/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "DevFestPoaGAME",
  description:
    "O manual completo do DevFestPoaGAME: como participar, como ganhar Patos Pila, ranking, premiação e regras da dinâmica gamificada do DevFestPoa26.",
  path: "/experiencia/devfestpoagame",
  keywords: ["DevFestPoaGame", "gamificação de evento de tecnologia", "Patos Pila"],
});

export default function DevFestPoaGamePage() {
  return (
    <>
      <GameManual />
      <FinalCTA />
    </>
  );
}
