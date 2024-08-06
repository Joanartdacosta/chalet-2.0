import React from "react";
import PhotoGallery from "@/components/dashboard/projects/galleries/PhotoGallery";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div className="pb-10">
      <header>
        <h3 className="font-light opensans text-2xl text-center">
          {props.projectName}
        </h3>
        <h4 className="quicksand pb-10">{props.projectType}</h4>
      </header>

      <section>
        <div className="masonry">
          {GALLERY.map((photo) => {
            return (
              <div key={photo.id}>
                <PhotoGallery src={photo.imgURL} alt={photo.alt} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
