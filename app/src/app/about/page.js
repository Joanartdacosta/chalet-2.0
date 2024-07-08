import AboutDesigner from "@/components/dashboard/about/AboutDesigner";
import Advantages from "@/components/dashboard/advantages/Advantage";
import ADVANTAGES_LIST from "@/components/dashboard/advantages/advantage_list";
import ADVANTAGES from "@/components/dashboard/advantages/advantages";

export default function About() {
  return (
    <div className="margin-auto max-width padding-top-5">
      <AboutDesigner />
      <Advantages items={ADVANTAGES} />
    </div>
  );
}
