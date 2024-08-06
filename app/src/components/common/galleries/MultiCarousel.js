"use client";
import React, { useState, useEffect } from "react";
import { SkipBack, SkipForward } from "lucide-react";

export default function MultiCarousel(props) {
  const GALLERY = [];

  for (let i = 0; i < props.slidesData.length; i++) {
    GALLERY.push(props.slidesData[i]);
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === GALLERY.length - 3 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? GALLERY.length - 3 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === GALLERY.length - 3 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="multi-carousel-container">
      <div
        className="multi-carousel-track"
        style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
      >
        {GALLERY.map((slide) => (
          <div key={slide.id} className="multi-carousel-slide">
            <img src={slide.imgURL} alt={`Slide ${slide.id}`} />
          </div>
        ))}
      </div>
      <div className="multi-carousel-controls">
        <button
          className="multi-carousel-control prev-slide"
          onClick={prevSlide}
        >
          <SkipBack />
        </button>
        <button
          className="multi-carousel-control next-slide"
          onClick={nextSlide}
        >
          <SkipForward />
        </button>
      </div>
    </div>
  );
}
