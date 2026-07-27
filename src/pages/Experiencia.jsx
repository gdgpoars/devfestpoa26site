import Program from "../components/Program";
import Experience from "../components/Experience";
import Networking from "../components/Networking";
import Game from "../components/Game";
import Edition2025 from "../components/Edition2025";
import Gallery from "../components/Gallery";
import Video from "../components/Video";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function Experiencia() {
  usePageTitle("Experiência — DevFestPoa26");

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
