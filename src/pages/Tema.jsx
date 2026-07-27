import Theme from "../components/Theme";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function Tema() {
  usePageTitle("Tema 2026 — DevFestPoa26");

  return (
    <>
      <Theme />
      <FinalCTA />
    </>
  );
}
