import Banner from "@/components/common/banner/Banner";
import AboutDesigner from "@/components/dashboard/about/AboutDesigner";
import ADVANTAGES from "@/lists/advantages";
import AdvantageQuoteAndList from "@/components/dashboard/advantages/AdvantageQuoteAndList";

export default function About() {
  return (
    <div className="justify-center">
      <div className="max-w-5xl m-auto">
        <AboutDesigner />
      </div>
      <Banner />
      <div className="max-w-5xl m-auto">
        <AdvantageQuoteAndList items={ADVANTAGES} />
      </div>
    </div>
  );
}
