import React from "react";
import { BsMap } from "react-icons/bs";

export default function MapaEvento() {
  return (
    <div className="w-full h-[80px] px-8 bg-[#ffff00] flex items-center justify-center ">
      <a
        href="/pdf/planta.pdf"
        className="flex items-center justify-center space-x-2 text-black hover:text-gray-600 transition-colors ease-in-out duration-500 font-bold"
        target="_blank"
      >
        <p>Conheça o mapa do evento de 2024</p>
        <BsMap className="text-black font-bold" />
      </a>
    </div>
  );
}
