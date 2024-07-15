import AdvantageHome from "@/components/dashboard/advantages/AdvantageHome";
import Background from "@/components/dashboard/home/Background";
import Carousel from "@/components/dashboard/home/Carousel";
import Quote from "@/components/dashboard/home/Quote";
import REVIEWS from "@/lists/reviews";

export default function Home() {
  return (
    <main>
      <div>
        <Background />
        <Quote />
        <Carousel list={REVIEWS} />
        <AdvantageHome />
      </div>
    </main>
  );
}
