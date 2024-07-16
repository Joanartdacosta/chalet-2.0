import DesktopNavBar from "@/components/common/navbar/DesktopNavBar";
import MobileNavBar from "@/components/common/navbar/MobileNavBar";

export default function NavBar() {
  return (
    <div>
      <div>
        <div className="menu-desktop">
          <DesktopNavBar />
        </div>

        <div className="menu-mobile z-20">
          <MobileNavBar />
        </div>
      </div>
    </div>
  );
}
