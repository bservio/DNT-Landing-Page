"use client";
import { Bungee_Inline } from "next/font/google";
import React from "react";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: ["400"] });

export default function InfoSection() {
  const scrollToPalestrantes = () => {
    const plaestrantes = document.getElementById("palestrantes");
    plaestrantes.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="w-full px-8 py-28 bg-cover bg-no-repeat  bg-center relative"
      style={{ backgroundImage: "url(/bg-info1.webp)" }}
    >
      <div className="flex flex-col items-center">
        <h2
          className={`${bungee.className} text-center text-3xl text-[#ffff00] lg:text-5xl`}
        >
          O IV DNT ESTÁ CONFIRMADO
        </h2>
        <h3 className="uppercase text-xl font-bold lg:text-3xl">
          DIAS 28, 29 e 30 de maio
        </h3>
      </div>

      <div className="h-full flex gap-4 mt-8 flex-col lg:flex-row items-center justify-evenly">
        <h3 className="font-bold font-termina text-center lg:text-left text-[#ffff00] text-xl  lg:text-4xl w-[300px] lg:w-[400px]">
          /O que esperar da próxima edição do maior evento acadêmico do Piauí?
        </h3>

        <p className="md:text-xl text-center lg:text-left opacity-80 max-w-[700px]">
          O congresso atrairá palestrantes de várias regiões do estado e do
          país. Posicionando o Piauí no centro de discussões acadêmicas e
          profissionais, reforçando sua imagem como polo de invação e
          conhecimento.
          <br /> <br />O evento desempenhará um papel crucial na capacitação de
          jovens talentos e na atualização de profissionais, criando uma ponte
          entre o conhecimento acadêmico e das demandas reais do mercado de
          trabalho, especialmente em setores estratégicos para o desenvolvimento
          do estado
        </p>
      </div>

      {/* <div className='w-full mt-8 text-center'>
        <button onClick={scrollToPalestrantes}>
          <p className="text-[#ffff00] font-bold text-lg lg:text-xl underline">
            Confira nossa programação!
          </p>
         
        </button>
      </div> */}
    </div>
  );
}
