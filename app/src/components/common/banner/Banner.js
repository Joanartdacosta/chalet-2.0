import Button from "@/components/common/buttons/Button";

export default function Banner() {
  return (
    <div className="bg-[#efe4d9] p-16 text-center">
      <header>
        <h3 className="p-2 poppins text-2xl text-custom-titleBrown">
          Planeie um projeto de design de interiores comigo
        </h3>
      </header>
      <section>
        <p className="p-6 text-base quicksand">
          Tem um projeto que gostaria de comecar? Preencha o formulario e eu
          envio o orcamento.
        </p>
      </section>
      <section className="lg:w-96 m-auto w-full">
        <Button label={"Pedir orçamento"} href={"/contacts"} />
      </section>
    </div>
  );
}
