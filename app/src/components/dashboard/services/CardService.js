"use client";
import InfoCardService from "@/components/dashboard/services/InfoCardService";
import { useState } from "react";
import Modal from "@/components/dashboard/services/Modal";
import Image from "next/image";

export default function CardService(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTextFirst, setIsTextFirst] = useState(true);

  const handleModal = () => {
    const newModalIsOpen = !modalIsOpen;
    setModalIsOpen(newModalIsOpen);
  };
  return (
    <div className="pb-10 pt-10">
      <div className="m-auto">
        {props.isTextFirst ? (
          <div className="flex mb-10">
            <InfoCardService
              type={props.type}
              projectType={props.projectType}
              description={props.description}
              info1={props.detail1}
              info2={props.detail2}
              info3={props.detail3}
              info4={props.detail4}
              onClick={handleModal}
              text={modalIsOpen ? "MOSTRAR MENOS" : "VER MAIS"}
            />

            <div
              className="relative"
              style={{ width: "700px", height: "auto" }}
            >
              <Image
                alt={props.alt}
                src={props.imgURL}
                layout="fill"
                objectFit="cover"
                className="pl-10"
              />
            </div>
          </div>
        ) : (
          <div className="flex mb-10">
            <div
              className="relative"
              style={{ width: "800px", height: "auto" }}
            >
              <Image
                alt="service"
                src={props.imgURL}
                layout="fill"
                objectFit="cover"
                className="pr-10"
              />
            </div>

            <InfoCardService
              type={props.type}
              projectType={props.projectType}
              description={props.description}
              info1={props.detail1}
              info2={props.detail2}
              info3={props.detail3}
              info4={props.detail4}
              onClick={handleModal}
              text={modalIsOpen ? "MOSTRAR MENOS" : "VER MAIS"}
            />
          </div>
        )}

        {modalIsOpen && (
          <Modal
            onClick={handleModal}
            step1Title={props.step1Title}
            step2Title={props.step2Title}
            step3Title={props.step3Title}
            step4Title={props.step4Title}
            step1={props.step1}
            step2={props.step2}
            step3={props.step3}
            step4={props.step4}
          />
        )}
      </div>
    </div>
  );
}
