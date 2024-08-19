import React from "react";
import PhotoGallery from "@/components/dashboard/projects/galleries/PhotoGallery";

export default function CardGallery(props) {
  const GALLERY = [];

  if (props.gallery && props.gallery.length > 0) {
    for (let i = 0; i < props.gallery.length; i++) {
      GALLERY.push(props.gallery[i]);
    }
  } else {
    console.error("Gallery is undefined or empty");
  }

  return (
    <div className="pb-10">
      <header>
        <h3 className="font-light opensans text-2xl text-center" key={props.id}>
          {props.projectName}
        </h3>
        <h4 className="quicksand pb-10">{props.projectType}</h4>
      </header>

      <section>
        <div className="masonry">
          {GALLERY.map((photo, index) => (
            <div key={index}>
              <PhotoGallery src={photo} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
