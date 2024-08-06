"use client";
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/common/link/NavLink";

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-[#b7997b] poppins flex justify-between p-2">
        <Link href="/" className="cursor-pointer">
          <Image
            src="https://chalet-webapp.s3.amazonaws.com/icons/logo-navbar.png"
            alt="chalet_logo"
            width={100}
            height={100}
            priority={true}
          />
        </Link>

        <button onClick={toggleMenu}>
          <AlignJustify />
        </button>
      </div>

      {isOpen && (
        <div className="bg-[#efe4d9] flex flex-col content-center poppins h-content text-center p-4">
          <NavLink label={"SOBRE MIM"} href={"/about"} />
          <NavLink label={"CONTACTOS"} href={"/contacts"} />
          <NavLink label={"SERVIÇOS"} href={"/services"} />
          <NavLink label={"PROJETOS"} href={"/projects"} />
        </div>
      )}
    </div>
  );
}
