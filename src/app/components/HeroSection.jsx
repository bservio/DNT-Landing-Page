"use client";
import React from "react";
import Image from "next/image";
import FontChanger from "./FontChanger";
import VideoWithPoster from "./VideoWithPoster";

export function scrollToIFrame() {
  const iframe = document.getElementById("iframe-inscricao");
  iframe.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <>
      <div className="lg:h-[90vh] min-h-[70vh] before:absolute before:inset-0 before:bg-[#5e0f56] before:bg-opacity-5 before:-z-10 relative py-16 flex flex-col lg:flex-row items-center justify-center gap-10">
        <VideoWithPoster />
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/logos/logo_dnt_2025.png"
            alt="Logo"
            width={250}
            height={85.938}
            className="lg:w-[350px] aspect-auto"
          />
          <Image
            src="/logos/icev-vert-negtv.png"
            alt="iCEV Logo"
            width={150}
            height={41}
            className="lg:w-[212px]"
          />
        </div>
        <div className="">
          {/* <p className="leading-4 text-lg">
            O maior congresso <br />
            acadêmico <br /> do Piauí.
          </p> */}
          <div className=" text-white flex flex-col items-start justify-center  font-semibold text-xl lg:text-3xl tracking-wider">
            <h1>ONDE A</h1>
            <div className="relative h-10">
              <FontChanger />
            </div>
            <h1>ACONTECE</h1>
          </div>
          <p className="font-bold text-xl">28 A 30 DE MAIO</p>
          <p>Espaço CEV - Teresina - PI</p>
          <button
            className="px-8 py-4 mt-10 justify-center  bg-[#ffff00] hover:bg-[#4b4b17] rounded-lg transition-colors duration-500 ease-in-out hover:text-white text-sm lg:text-base font-semibold text-black"
            onClick={scrollToIFrame}
          >
            GARANTA SEU INGRESSO
          </button>
        </div>
      </div>
    </>
  );
}
