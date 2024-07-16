"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="bg-[#b7997b] p-4 justify-between poppins">
        <button onClick={toggleMenu}>
          <p className="text-lg"> MENU</p>
        </button>
      </div>

      {isOpen && (
        <div className="bg-[#efe4d9] flex flex-col content-center poppins h-content text-center p-4">
          <Link
            className="text-xl text-custom-darkBrown no-underline p-4"
            href="/about"
          >
            SOBRE MIM
          </Link>

          <Link
            className="text-xl text-custom-darkBrown no-underline p-4"
            href="/contacts"
          >
            CONTACTOS
          </Link>

          <Link
            className="text-xl text-custom-darkBrown no-underline p-4"
            href="/services"
          >
            SERVIÇOS
          </Link>
          <Link
            className="text-xl text-custom-darkBrown no-underline p-4"
            href="/projects"
          >
            PROJETOS
          </Link>
        </div>
      )}
    </div>
  );
}
