import NavLink from "@/components/common/link/NavLink";
import MobileNavBar from "@/components/common/navbar/MobileNavBar";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div>
        <div className="hidden lg:block">
          <div className="bg-[#b7997b] flex justify-between poppins">
            <div className="p-10">
              <NavLink label={"SOBRE MIM"} href={"/about"} />
              <NavLink label={"CONTACTOS"} href={"/contacts"} />
            </div>

            <div className="content-center m-auto">
              <Link href="/">
                <Image
                  src="https://chalet-webapp.s3.amazonaws.com/icons/logo-navbar.png"
                  alt="chalet_logo"
                  layout="intrinsic"
                  width={160}
                  height={50}
                  priority={true}
                />
              </Link>
            </div>

            <div className="p-10">
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
