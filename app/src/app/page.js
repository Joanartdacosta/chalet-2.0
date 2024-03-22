import Background from "@/components/dashboard/home/Background";
import List from "@/components/dashboard/advantages/List";
import Quote from "@/components/dashboard/home/Quote";


export default function Home() {
  return (
    <main>
      <div>
        <Background />
        <Quote />
        <List />
      </div>
    </main>
  );
}
