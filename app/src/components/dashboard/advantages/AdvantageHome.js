import AdvantagesList from "@/components/dashboard/advantages/AdvantageList";
import ADVANTAGES_LIST from "@/lists/advantage_list";

export default function AdvantageHome() {
  return (
    <div className="m-auto pb-32 pt-32 text-center">
      <p className="pb-10 text-2xl opensans">ENTRE EM CONTACTO</p>
      <AdvantagesList items={ADVANTAGES_LIST} />
    </div>
  );
}
