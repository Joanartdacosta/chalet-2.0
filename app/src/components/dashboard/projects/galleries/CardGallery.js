import React from "react";
import PhotoGallery from "@/components/dashboard/projects/galleries/PhotoGallery";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div className="pb-10">
      <p className="font-light opensans text-2xl text-center">
        {props.projectName}
      </p>
      <p className="quicksand pb-10">{props.projectType}</p>

      <div className="masonry">
        {GALLERY.map((photo) => {
          return (
            <div>
              <PhotoGallery src={photo.imgURL} alt={photo.alt} key={photo.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
