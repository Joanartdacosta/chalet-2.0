import AdvantagesList from "@/components/dashboard/advantages/AdvantageList";

export default function AdvantageQuoteAndList(props) {
  return (
    <div className="items-center pt-40 pb-40">
      <h2 className="opensans text-3xl text-center pb-20">
        QUAIS AS VANTAGENS DE CONTRATAR UMA DESIGNER?
      </h2>
      <AdvantagesList items={props.items} />
    </div>
  );
}
