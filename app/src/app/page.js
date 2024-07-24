import AdvantageHome from "@/components/dashboard/advantages/AdvantageHome";
import Background from "@/components/dashboard/home/Background";
import Carousel from "@/components/common/galleries/Carousel";
import Intro from "@/components/dashboard/home/Intro";
import OurProjects from "@/components/dashboard/home/OurProjects";
import REVIEWS from "@/lists/reviews";

export default function Home() {
  return (
    <main>
      <div>
        <Background />
        <Intro />
        <OurProjects />
        <Carousel list={REVIEWS} />
        <AdvantageHome />
      </div>
    </main>
  );
}
