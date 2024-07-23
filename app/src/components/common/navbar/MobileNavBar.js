"use client";
import { useState } from "react";
import NavLink from "../link/NavLink";

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
          <NavLink label={"SOBRE MIM"} href={"/about"} />
          <NavLink label={"CONTACTOS"} href={"/contacts"} />
          <NavLink label={"SERVIÇOS"} href={"/services"} />
          <NavLink label={"PROJETOS"} href={"/projects"} />
        </div>
      )}
    </div>
  );
}
