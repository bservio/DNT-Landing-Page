import Image from "next/image";
import React from "react";
import { scrollToIFrame } from "./HeroSection";

export default function HubSection() {
  return (
    <div className="w-full bg-[#001648] flex flex-col lg:flex-row -mt-[7px]">
      <Image
        src="/hub-img.webp"
        width={688}
        height={851}
        alt="um hub de conexões"
      />
      <div className="relativew-5/6 lg:w-1/2 px-4 lg:px-32 py-20 text-white text-center lg:text-left flex flex-col items-center lg:items-start justify-center mx-auto">
        <h2 className="text-3xl lg:text-6xl font-bold">
          Um HUB de <br />
          <span className="text-[#ffff00]">conexões</span>
        </h2>
        <p className="mt-12 lg:text-xl font-light">
          Participar do Congresso DNT é mais do que uma estratégia:{" "}
          <span className="font-bold">
            - é uma oportunidade única de expandir seus horizontes.
          </span>
          <br />
          <br />
          No DNT, você se conecta às{" "}
          <span className="font-bold">últimas tendências</span>, troca
          experiências com grandes nomes do setor e se coloca no centro de um
          evento transformador. Aqui, cada conversa pode abrir uma{" "}
          <span className="font-bold">nova porta para o seu futuro.</span>
          <br />
          <br />A última edição foi um grande sucesso, reunindo participantes de
          diversas áreas e criando conexões valiosas. E em 2025, vamos elevar o
          nível ainda mais, com mais conteúdos inovadores, oportunidades
          exclusivas e um ambiente perfeito para impulsionar sua trajetória.
        </p>

        <button
          className="px-8 py-4 mt-20 justify-center  bg-[#ffff00] hover:bg-[#4b4b17] rounded-lg transition-colors duration-500 ease-in-out hover:text-white text-sm lg:text-base font-semibold text-black"
          onClick={scrollToIFrame}
        >
          FIQUE POR DENTRO DO PRÓXIMO DNT
        </button>
      </div>
    </div>
  );
}
