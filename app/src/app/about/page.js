import AboutDesigner from "@/components/dashboard/about/AboutDesigner";
import ADVANTAGES from "@/lists/advantages";
import AdvantagesList from "@/components/dashboard/advantages/AdvantageList";

export default function About() {
  return (
    <div className="m-auto max-w-5xl justify-center">
      <AboutDesigner />
      <AdvantagesList items={ADVANTAGES} />
    </div>
  );
}
