import Link from "next/link";
import Social from "./Social";

export default function FooterInfo() {
  return (
    <div className="flex justify-between p-20">
      <div className="flex flex-start">
        <div className="pr-20">
          <p className="pb-2">CONTACTOS</p>

          <p className="text-sm italic font-thin text-custom-darkBrown">
            chaletinteriordesign@gmail.com
          </p>
        </div>
        <div className="">
          <p className="pb-2">PRIVACIDADE</p>
          <Link href="" className="text-sm text-custom-darkBrown underline">
            <p>Termos e condicoes</p>
            <p>Politica de Privacidade</p>
          </Link>
          <p></p>
        </div>
      </div>
      <div className="">
        <Social />
      </div>
    </div>
  );
}
