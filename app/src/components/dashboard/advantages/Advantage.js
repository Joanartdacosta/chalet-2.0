import AdvantagesList from "./AdvantageList";

export default function Advantage() {
  return (
    <div className="pl-40">
      <div className="">
        <h2 className="pb-4 text-6xl">Mas quais as</h2>
        <h2 className="pb-4 text-6xl">
          <span className="font-bold text-[#856343]">Vantagens </span>
          de contratar um
        </h2>
        <h2 className="font-thin italic text-[#856343] text-7xl">
          {" "}
          Designer de Interiores?
        </h2>
      </div>
      <AdvantagesList />
    </div>
  );
}
