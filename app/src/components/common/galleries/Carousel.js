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
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#F5EFE8] items-center h-full grid justify-center p-4">
      <header>
        {" "}
        <h1 className="p-6 text-2xl opensans text-center">
          TESTEMUNHOS DE CLIENTES
        </h1>
      </header>

      <section>
        <ul className="items-center grid grid-cols-1 grid-rows-1 auto-rows-auto gap-y-5  list-none max-w-2xl overflow-hidden carousel__list">
          {props.list.map((review, index) => {
            const { citation, name, quote } = review;
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
                    <span className="block quicksand">{citation}</span>
                  </cite>
                </blockquote>
              </li>
            );
          })}
          <li className="gap-px grid grid-cols-5 row-start-2 justify-self-center">
            <span
              className={` block border-2 border-solid border-stone-300 h-3 rounded-full w-3 carousel__dot${
                activeSlide === 1 ? " active" : ""
              }`}
            />
            <span
              className={` block border-2 border-solid border-stone-300 h-3 rounded-full w-3 carousel__dot${
                activeSlide === 2 ? " active" : ""
              }`}
            />
            <span
              className={`block border-2 border-solid border-stone-300 h-3 rounded-full w-3 carousel__dot${
                activeSlide === 3 ? " active" : ""
              }`}
            />
            <span
              className={`block border-2 border-solid border-stone-300 h-3 rounded-full w-3 carousel__dot${
                activeSlide === 4 ? " active" : ""
              }`}
            />
            <span
              className={`block border-2 border-solid border-stone-300 h-3 rounded-full w-3 carousel__dot${
                activeSlide === 5 ? " active" : ""
              }`}
            />
          </li>
        </ul>
      </section>
    </div>
  );
}
