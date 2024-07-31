import Link from "next/link";
import Social from "@/components/common/footer/Social";

export default function FooterInfo() {
  return (
    <div className="p-10 lg:p-20 flex flex-col lg:flex-row lg:justify-between lg:space-x-8">
      <div className="flex flex-col pb-8 lg:pb-0 lg:w-1/3">
        <div className="pb-4">
          <p className="pb-2">CONTACTOS</p>
          <p className="quicksand text-sm italic font-thin text-custom-darkBrown">
            chaletinteriordesign@gmail.com
          </p>
        </div>
      </div>
      <div className="flex flex-col pb-8 lg:pb-0 lg:w-1/3">
        <div className="pb-4">
          <p className="pb-2">PRIVACIDADE</p>
          <div className="quicksand text-sm text-custom-darkBrown">
            <Link href="/terms" className="block hover:underline">
              Termos e condições
            </Link>
            <Link href="" className="block hover:underline">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-1/3">
        <Social />
      </div>
    </div>
  );
}
