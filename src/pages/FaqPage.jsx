import Faq from "../components/Faq";
import FinalCTA from "../components/FinalCTA";
import usePageTitle from "../hooks/usePageTitle";

export default function FaqPage() {
  usePageTitle("FAQ — DevFestPoa26");

  return (
    <>
      <Faq />
      <FinalCTA />
    </>
  );
}
