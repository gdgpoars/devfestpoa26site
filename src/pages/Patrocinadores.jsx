import Sponsors from "../components/Sponsors";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function Patrocinadores() {
  usePageTitle("Patrocinadores — DevFestPoa26");

  return (
    <>
      <Sponsors />
      <FinalCTA />
    </>
  );
}
