"use client";
import React, { useEffect, useState } from "react";

export default function Carousel(props) {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };

    const intervalId = setInterval(() => {
      cycleReviews();
    }, 50000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="bg-[#F5EFE8] items-center h-full grid justify-center p-8">
      <header>
        {" "}
        <h3 className="p-6 text-2xl opensans text-center">{props.title}</h3>
      </header>

      <section>
        <ul className="items-center grid grid-cols-1 grid-rows-1 auto-rows-auto gap-y-5  list-none max-w-2xl overflow-hidden carousel__list">
          {props.list.map((review, index) => {
            const { name, quote } = review;
            const count = index + 1;
            return (
              <li
                className={`col-start-1 row-start-1 leading-5 py-4 px-8 text-center carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                key={count}
              >
                <blockquote className="italic leading-6 carousel__quote">
                  <p className="quicksand pb-8">"{quote}"</p>
                  <cite>
                    <span className="block not-italic opensans text-custom-titleBrown">
                      {name}
                    </span>
                  </cite>
                </blockquote>
              </li>
            );
          })}
          <li className="gap-px grid grid-cols-5 row-start-2 justify-self-center">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className={`bg-white block border-2 border-solid border-slate-100 h-3 rounded-full w-3 carousel__dot${
                  activeSlide === index ? " active" : ""
                }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </li>
        </ul>
      </section>
    </div>
  );
}
