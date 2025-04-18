import React from "react";
import GridPalestrantes2 from "./GridPalestrantes2";
import Link from "next/link";
import NovosPalestrantes from "./NovosPalestrantes";
import SpeakerList from "./Speaker";

export default function PalestrantesSection() {
  return (
    <div
      id="palestrantes"
      className="py-16 px-4 lg:py-20 mx-auto text-center"
      style={{
        background:
          "linear-gradient(189deg, rgba(122,27,98,1) 34%, rgba(0,38,77,1) 97%)",
      }}
    >
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
        <h2 className="max-w-[500px] lg:max-w-[900px] m-auto text-center font-bold text-xl lg:text-5xl text-white">
          Você no centro das tendências que vão dominar o futuro
        </h2>
        <h3 className="text-[#ffff00] lg:text-xl">
          Conheça alguns dos palestrantes confirmados
        </h3>
      </div>

      {/* <NovosPalestrantes /> */}

      {/* <GridPalestrantes2 />
      <Link href="/programacao" className=''>
        <button 
          className='mt-20 justify-center w-[350px] h-[60px] bg-[#ffff00] text-sm text-black font-semibold uppercase hover:bg-[#4b4b17] transition-colors duration-500 ease-in-out hover:text-white'
        >
          Confira nossa programação completa
        </button>
      </Link> */}
      <SpeakerList />
      <h3 className="text-[#ffff00] lg:text-lg mt-8">
        Em breve mais novidades sobre os palestrantes e a programação do evento
        ...
      </h3>
    </div>
  );
}
