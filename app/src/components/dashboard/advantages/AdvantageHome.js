import AdvantagesList from "./AdvantageList";
import ADVANTAGES_LIST from "../../../lists/advantage_list";

export default function AdvantageHome() {
  return (
    <div className="m-auto pb-20 pt-20 text-center">
      <p className="pb-10 text-2xl opensans">ENTRE EM CONTACTO</p>
      <AdvantagesList items={ADVANTAGES_LIST} />
    </div>
  );
}
