"use client";
import InfoCardService from "@/components/dashboard/services/InfoCardService";
import { useState } from "react";
import Modal from "@/components/dashboard/services/Modal";

export default function CardService(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isTextFirst, setIsTextFirst] = useState(true);

  const handleModal = () => {
    const newModalIsOpen = !modalIsOpen;
    setModalIsOpen(newModalIsOpen);
  };
  return (
    <div>
      <div className="p-20">
        {props.isTextFirst ? (
          <div className="flex pb-10">
            <div className="w-4/6 content-center">
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
            <div className="w-2/6">
              <img
                alt={"service"}
                src={props.imgURL}
                className="object-cover h-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex pb-10">
            <div className="w-2/6">
              <img
                alt={"service"}
                src={props.imgURL}
                className="object-cover h-full pr-10"
              />
            </div>
            <div className="w-4/6 content-center">
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
