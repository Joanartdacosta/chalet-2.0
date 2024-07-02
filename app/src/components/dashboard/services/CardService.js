import InfoCardService from "./InfoCardService";
import ImageCard from "./ImageCard";

export default function CardsService() {
  return (
    <div>
      <div className="flex pb-20">
        <div className="w-2/4 content-center">
          <InfoCardService
            type={"PROJETO"}
            title={"DESIGN DE INTERIORES"}
            info1={
              "Projeto para um espaço novo (em fase de construção) ou a remodelar. Inclui:"
            }
            info2={
              "Desenhos tecnicos (layout, planta de tetos, localização de luminárias, mobiliário à medida, entre outros) para visualização do resultado final e Moodboard (conceito & inspiração do Projeto). Projeto em formato ConceptBoard ou Projeto 3D (mais aconselhado)."
            }
          />
        </div>
        <div className="1/4 content-center">
          <ImageCard
            alt={"service"}
            image={
              "https://images.unsplash.com/photo-1565038941323-e5ceac0fcde2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>

      <div className="flex pb-20">
        <div className="pr-10 content-center">
          <ImageCard
            alt={"service"}
            image={
              "https://shop.frostedkale.com/cdn/shop/files/81881CB338607B78DB123FF227E4BDCC.jpg?v=1704683256"
            }
          />
        </div>
        <div className="w-2/4 content-center">
          <InfoCardService
            type={"PROJETO"}
            title={"DESIGN DE INTERIORES"}
            info1={
              "Projeto para um espaço novo (em fase de construção) ou a remodelar. Inclui:"
            }
            info2={
              "Desenhos tecnicos (layout, planta de tetos, localização de luminárias, mobiliário à medida, entre outros) para visualização do resultado final e Moodboard (conceito & inspiração do Projeto). Projeto em formato ConceptBoard ou Projeto 3D (mais aconselhado)."
            }
          />
        </div>
      </div>

      <div className="flex pb-20">
        <div className="w-2/4 content-center">
          <InfoCardService
            type={"PROJETO"}
            title={"DESIGN DE INTERIORES"}
            info1={
              "Projeto para um espaço novo (em fase de construção) ou a remodelar. Inclui:"
            }
            info2={
              "Desenhos tecnicos (layout, planta de tetos, localização de luminárias, mobiliário à medida, entre outros) para visualização do resultado final e Moodboard (conceito & inspiração do Projeto). Projeto em formato ConceptBoard ou Projeto 3D (mais aconselhado)."
            }
          />
        </div>
        <div className="1/4 content-center">
          <ImageCard
            alt={"service"}
            image={
              "https://images.unsplash.com/photo-1565038941323-e5ceac0fcde2?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    </div>
  );
}
