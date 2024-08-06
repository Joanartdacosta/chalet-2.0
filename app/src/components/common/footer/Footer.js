import CurrentDate from "@/components/common/footer/CurrentDate";
import FooterInfo from "@/components/common/footer/FooterInfo";

function Footer() {
  return (
    <div className="bg-[#efe4d9] text-center">
      <FooterInfo />
      <footer>
        <CurrentDate />
      </footer>
    </div>
  );
}

export default Footer;
