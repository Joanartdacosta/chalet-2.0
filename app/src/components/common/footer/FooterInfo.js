import Link from "next/link";
import Social from "./Social";

export default function FooterInfo() {
  return (
    <div className="flex justify-between p-20 ">
      <div className="flex flex-start">
        <div className="pr-20">
          <p className="pb-2">CONTACTOS</p>

          <p className="quicksand text-sm italic font-thin text-custom-darkBrown">
            chaletinteriordesign@gmail.com
          </p>
        </div>
        <div>
          <p className="pb-2">PRIVACIDADE</p>
          <Link href="" className="quicksand text-sm text-custom-darkBrown ">
            <p className="hover:underline">Termos e condicoes</p>
            <p className="hover:underline">Politica de Privacidade</p>
          </Link>
        </div>
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
}
