import AboutText from "@/components/dashboard/about/AboutText";
import ADVANTAGES from "@/lists/advantages";
import AdvantageQuoteAndList from "@/components/dashboard/advantages/AdvantageQuoteAndList";
import Banner from "@/components/common/banner/Banner";

export default function About() {
  return (
    <div className="justify-center">
      <div className="max-w-5xl m-auto">
        <AboutText />
      </div>
      <Banner />
      <div className="max-w-5xl m-auto">
        <AdvantageQuoteAndList items={ADVANTAGES} />
      </div>
    </div>
  );
}
