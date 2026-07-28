import { Countdown } from "@/components/site/countdown";
import { Hero } from "@/components/site/hero";
import { Highlights } from "@/components/site/highlights";
import { ExploreCards } from "@/components/site/explore-cards";
import { FinalCTA } from "@/components/site/final-cta";

export default function Home() {
  return (
    <>
      <Countdown />
      <Hero />
      <Highlights />
      <ExploreCards />
      <FinalCTA />
    </>
  );
}
