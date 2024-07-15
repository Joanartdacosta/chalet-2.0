"use client";
import InfoCardService from "./InfoCardService";
import ImageCard from "./ImageCard";
import { useState } from "react";
import Modal from "./Modal";

export default function CardsService() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModal = () => {
    const newModalIsOpen = !modalIsOpen;
    setModalIsOpen(newModalIsOpen);
  };
  return (
    <div>
      <div className="pb-20">
        <div className="flex pb-10">
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
              onClick={handleModal}
              text={modalIsOpen ? "Mostrar menos" : "Ver mais"}
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
        {modalIsOpen && <Modal onClick={handleModal} />}
      </div>
    </div>
  );
}
