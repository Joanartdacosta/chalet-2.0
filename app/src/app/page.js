import AdvantageHome from "@/components/dashboard/advantages/AdvantageHome";
import Background from "@/components/dashboard/home/Background";
import Quote from "@/components/dashboard/home/Quote";

export default function Home() {
  return (
    <main>
      <div>
        <Background />
        <Quote />
        <AdvantageHome />
      </div>
    </main>
  );
}
