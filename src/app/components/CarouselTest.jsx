"use client";

import React, { useEffect, useState } from "react";

const colors = ["#0088FE", "#00C49f", "#FFBB28"];

const fotos = [
  {
    url: "/img/carousel/slide-1.webp",
    pretext: "/DNT 2024",
    text: "O único congresso do Piauí que une os setores público, privado e acadêmico.",
  },
  {
    url: "/img/carousel/slide-2.webp",
    pretext: "/DNT 2024",
    text: "+1.100 pessoas envolvidas na edição de 2024",
  },
  {
    url: "/img/carousel/slide-3.webp",
    pretext: "/DNT 2024",
    text: "46 palestrantes de todas as partes do país",
  },
  {
    url: "/img/carousel/slide-4.webp",
    pretext: "/DNT 2024",
    text: "Mais de 800 inscritos",
  },
];

const delay = 5000;

export default function CarouselTest() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === fotos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {};
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto relative overflow-hidden w-full">
        <div
          className="whitespace-nowrap transition  ease-linear delay-1000"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {fotos.map((foto, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url("${foto.url}")` }}
              className="h-[100vw] lg:h-[40vw] w-full inline-block bg-center bg-cover relative"
            >
              <div className="flex flex-col items-center justify-center text-center absolute top-[40%] w-full">
                <p className="text-[#ffff00] lg:text-4xl 2xl:text-6xl font-bold">
                  {foto.pretext}
                </p>
                <p
                  className="text-white shadow-xl text-lg lg:text-5xl 2xl:text-7xl font-semibold  w-3/5"
                  style={{ overflowWrap: "break-word", whiteSpace: "pre-wrap" }}
                >
                  {foto.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
