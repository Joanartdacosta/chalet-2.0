import Link from "next/link";

export default function DesktopNavBar() {
  return (
    <div className="bg-[#b7997b] flex p-10 justify-between poppins">
      <div className="">
        <Link className="text-xl text-black no-underline pr-10" href="/about">
          SOBRE MIM
        </Link>
        <Link
          className="text-xl text-black no-underline pr-10"
          href="/contacts"
        >
          CONTACTOS
        </Link>
      </div>
      <div className="">
        <Link
          className="text-xl text-black no-underline pr-10"
          href="/services"
        >
          SERVIÇOS
        </Link>
        <Link
          className="text-xl text-black no-underline pr-10"
          href="/projects"
        >
          PROJETOS
        </Link>
      </div>
    </div>
  );
}
