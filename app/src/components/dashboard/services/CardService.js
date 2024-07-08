import InfoCardService from "./InfoCardService";
import ImageCard from "./ImageCard";

export default function CardsService() {
  return (
    <div>
      <div className="flex pb-20">
        <div className="content-center w-2/4">
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
        <div className="content-center">
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
