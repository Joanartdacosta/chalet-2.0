import BrownButton from "../buttons/BrowButton";

export default function Banner() {
  return (
    <div className="bg-[#F5EFE8] m-auto p-20">
      <div className="m-auto max-w-4xl text-center">
        <div>
          <h2 className="font-semibold pb-5 quicksand text-xl text-custom-darkBrown">
            Planeie um projeto de design de interiores comigo
          </h2>
          <p className="pb-10 quicksand">
            Tem um projeto que gostaria de comecar? Preencha o formulario e eu
            envio o orcamento.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <BrownButton text={"PREENCHER FORMULARIO"} />
        </div>
      </div>
    </div>
  );
}
