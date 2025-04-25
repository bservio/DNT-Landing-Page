"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const fotos = [
  {
    url: "/img/carousel/slide-1.webp",
    pretext: "/DNT 2024",
    text: "O único congresso do Piauí que une os setores público, privado e acadêmico.",
    alt: "Congresso DNT 2024 - Setores público, privado e acadêmico",
  },
  {
    url: "/img/carousel/slide-2.webp",
    pretext: "/DNT 2024",
    text: "+1.100 pessoas envolvidas na edição de 2024",
    alt: "Mais de 1100 pessoas no DNT 2024",
  },
  {
    url: "/img/carousel/slide-3.webp",
    pretext: "/DNT 2024",
    text: "46 palestrantes de todas as partes do país",
    alt: "46 palestrantes nacionais no DNT 2024",
  },
  {
    url: "/img/carousel/slide-4.webp",
    pretext: "/DNT 2024",
    text: "Mais de 800 inscritos",
    alt: "Mais de 800 inscritos no DNT 2024",
  },
];

const delay = 5000;

export default function CarouselTest() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
    }, delay);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full aspect-[16/9] max-h-[100vw] lg:max-h-[40vw] overflow-hidden">
        {fotos.map((foto, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={foto.url}
              alt={foto.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              draggable={false}
            />
            <div className="flex flex-col items-center justify-center text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <p className="text-[#ffff00] lg:text-4xl 2xl:text-6xl font-bold drop-shadow">
                {foto.pretext}
              </p>
              <p
                className="text-white shadow-xl text-lg lg:text-5xl 2xl:text-7xl font-semibold w-4/5 mx-auto"
                style={{
                  overflowWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  textShadow: "0 2px 8px #000",
                }}
              >
                {foto.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
