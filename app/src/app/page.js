import Background from "@/components/dashboard/home/Background";
import Carousel from "@/components/dashboard/home/Carousel";
import List from "@/components/dashboard/advantages/List";
import Quote from "@/components/dashboard/home/Quote";
import REVIEWS from "@/components/lists/reviews";

export default function Home() {
  return (
    <main>
      <div>
        <Background />
        <Quote />
        <List />
        <Carousel list={REVIEWS} />
      </div>
    </main>
  );
}
