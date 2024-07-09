import React from "react";

export default function CardGallery(props) {
  const GALLERY = [];

  for (let i = 0; i < props.gallery.length; i++) {
    GALLERY.push(props.gallery[i]);
  }

  return (
    <div id={props.id} key={props.id}>
      <p className="font-light opensans text-2xl text-center">{props.title}</p>
      <p className="quicksand">{props.typeProject}</p>

      <div>
        <div className="masonry">
          {GALLERY.map((photo) => {
            return (
              <div key={photo.id}>
                <img
                  className="cursor-pointer"
                  src={photo.image}
                  alt={props.alt}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
