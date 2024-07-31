import Link from "next/link";
import Social from "@/components/common/footer/Social";

export default function FooterInfo() {
  return (
    <div className="flex justify-between p-20">
      <div className="flex flex-start">
        <div className="pr-20">
          <header>
            {" "}
            <h3 className="pb-2">CONTACTOS</h3>
          </header>
          <section>
            <p className="quicksand text-sm italic font-thin text-custom-darkBrown">
              chaletinteriordesign@gmail.com
            </p>
          </section>
        </div>

        <div>
          <header>
            {" "}
            <h3 className="pb-2">PRIVACIDADE</h3>
          </header>

          <section>
            <Link
              href="/terms"
              className="quicksand text-sm text-custom-darkBrown "
            >
              <p className="hover:underline">Termos e condicoes</p>
              <p className="hover:underline">Politica de Privacidade</p>
            </Link>
          </section>
        </div>
      </div>
      <div>
        <Social />
      </div>
    </div>
  );
}
