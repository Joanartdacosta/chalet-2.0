"use client";
import ModalPhoto from "@/components/dashboard/projects/galleries/ModalPhoto";
import { useState } from "react";

export default function PhotoGallery(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {" "}
      <img
        className="cursor-pointer hover-scale media-image-gallery object-cover photo-hover"
        src={props.src}
        alt={props.alt}
        key={props.id}
        onClick={openModal}
      />
      <ModalPhoto
        src={props.src}
        alt={props.alt}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
