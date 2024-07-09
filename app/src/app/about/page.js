import AboutDesigner from "@/components/dashboard/about/AboutDesigner";
import ADVANTAGES from "@/lists/advantages";
import AdvantagesList from "@/components/dashboard/advantages/AdvantageList";

export default function About() {
  return (
    <div className="margin-auto max-width padding-top-5">
      <AboutDesigner />
      <AdvantagesList items={ADVANTAGES} />
    </div>
  );
}
