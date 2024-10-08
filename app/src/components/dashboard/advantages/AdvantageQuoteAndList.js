import AdvantagesList from "@/components/dashboard/advantages/AdvantageList";

export default function AdvantageQuoteAndList(props) {
  return (
    <div className="items-center pt-40 pb-40">
      <AdvantagesList items={props.items} />
    </div>
  );
}
