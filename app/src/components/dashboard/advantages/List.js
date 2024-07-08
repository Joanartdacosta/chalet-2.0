import AdvantagesList from "./AdvantageList";
import ADVANTAGES_LIST from "./advantage_list";

export default function List() {
  return (
    <div className="pb-20 pt-20 h-screen text-center ">
      <p className="pb-10 text-2xl opensans">ENTRE EM CONTACTO</p>
      <AdvantagesList items={CONTACT_ME} />
    </div>
  );
}
