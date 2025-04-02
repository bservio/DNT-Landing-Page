"use client";
import React from "react";
import Image from "next/image";
import FontChanger from "./FontChanger";

export function scrollToIFrame() {
  const iframe = document.getElementById("iframe-inscricao");
  iframe.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <div className="lg:h-[90vh] h-[70vh] before:absolute before:inset-0 before:bg-[#5e0f56] before:bg-opacity-5 before:-z-10 relative py-16 flex items-center justify-center">
      <div className="flex items-center justify-between  px-4 lg:px-24 absolute top-8 left-8">
        {/* <Image
          alt=""
          src="/logos/Ativo 5.svg"
          width={130}
          height={40}
          className="lg:w-[300px]"
        /> */}
      </div>
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-20 opacity-70"
        src="/video/video-dnt-2024.mp4"
        playsInline
        autoPlay
        muted
        loop
      ></video> */}
      <div className=" text-white flex flex-col items-center justify-center capitalize font-semibold text-xl lg:text-5xl tracking-wider">
        <h1>ONDE A</h1>
        <FontChanger />
        <h1>ACONTECE</h1>

        <button
          className="px-8 py-4 mt-20 justify-center  bg-[#ffff00] hover:bg-[#4b4b17] rounded-lg transition-colors duration-500 ease-in-out hover:text-white text-sm lg:text-base font-semibold text-black"
          onClick={scrollToIFrame}
        >
          GARANTA SEU INGRESSO
        </button>
      </div>
    </div>
  );
}
