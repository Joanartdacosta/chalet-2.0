import React from "react";

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
      <p className="quicksand">{props.projectType}</p>

      <div className="masonry">
        {GALLERY.map((photo) => {
          return (
            <img
              className="cursor-pointer hover-scale media-image-gallery"
              src={photo.imgURL}
              alt={props.alt}
              key={photo.id}
            />
          );
        })}
      </div>
    </div>
  );
}
