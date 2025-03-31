"use client";

import React from "react";
import Script from "next/script";

export default function IframeDoity() {
  return (
    <div
      id="iframe-inscricao"
      className="py-16 px-4 lg:px-8 formulario-iframe flex flex-col items-center justify-center bg-[#00264d] border-none"
    >
      <h2 className="mb-16 max-w-[800px] text-[#ffff00] font-semibold text-center text-xl lg:text-4xl">
        Fique por dentro da próxima edição do maior congresso acadêmico do Piauí
      </h2>
      <div className="-mt-8 relative w-full flex items-center justify-center max-w-[1000px]">
        <iframe
          height="900px"
          width="100%"
          src="https://icev.apprbs.com.br/interessado-ivdnt"
          className="lg:h-[700px]"
        ></iframe>
      </div>
    </div>
  );
}
