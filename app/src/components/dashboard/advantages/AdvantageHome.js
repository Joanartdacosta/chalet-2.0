import AdvantagesList from "./AdvantageList";
import ADVANTAGES_LIST from "../../../lists/advantage_list";

export default function AdvantageHome() {
  return (
    <div className="m-auto pb-32 pt-32 text-center">
      <header>
        <h3 className="pb-10 text-2xl opensans">ENTRE EM CONTACTO</h3>
      </header>
      <section>
        <AdvantagesList items={ADVANTAGES_LIST} />
      </section>
    </div>
  );
}
