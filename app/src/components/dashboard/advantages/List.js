import HandHeart from "../../../../public/HandHeart";
import AdvantagesList from "./AdvantageList";

import CONTACT_ME from "@/components/dashboard/advantages/contact_me";

export default function List() {
  return (
    <div className="pb-20 pt-20 h-screen text-center ">
      <p className="pb-10">ENTRE EM CONTACTO</p>
      <AdvantagesList items={CONTACT_ME} />
    </div>
  );
}
