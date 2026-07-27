import About from "../components/About";
import Pillars from "../components/Pillars";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function Sobre() {
  usePageTitle("Sobre — DevFestPoa26");

  return (
    <>
      <About />
      <Pillars />
      <FinalCTA />
    </>
  );
}
