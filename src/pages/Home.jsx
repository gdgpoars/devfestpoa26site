import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Highlights from "../components/Highlights";
import ExploreCards from "../components/ExploreCards";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function Home() {
  usePageTitle("DevFestPoa26 — Tecnologia, Comunidade e Futuro em Porto Alegre");

  return (
    <>
      <Hero />
      <Countdown />
      <Highlights />
      <ExploreCards />
      <FinalCTA />
    </>
  );
}
