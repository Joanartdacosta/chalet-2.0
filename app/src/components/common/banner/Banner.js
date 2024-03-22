import Button from "@/components/button/Button";

export default function Banner() {
  return (
    <div className="bg-[#efe4d9] p-16 text-center">
      <h1 className="p-6 text-2xl">
        Planeie um projeto de design de interiores comigo
      </h1>
      <p className="p-6 text-base">
        Tem um projeto que gostaria de comecar? Preencha o formulario e eu envio
        o orcamento.
      </p>
      <Button label={"Pedir orcamento"} />
    </div>
  );
}
