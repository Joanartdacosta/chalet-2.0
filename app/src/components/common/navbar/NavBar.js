import NavLink from "@/components/common/link/NavLink";
import MobileNavBar from "@/components/common/navbar/MobileNavBar";

export default function NavBar() {
  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="bg-[#b7997b] flex p-10 justify-between poppins">
            <div>
              <NavLink label={"SOBRE MIM"} href={"/about"} />
              <NavLink label={"CONTACTOS"} href={"/contacts"} />
            </div>
            <div>
              <NavLink label={"SERVIÇOS"} href={"/services"} />
              <NavLink label={"PROJETOS"} href={"/projects"} />
            </div>
          </div>
        </div>

        <div className="lg:hidden z-20">
          <MobileNavBar />
        </div>
      </div>
    </div>
  );
}
