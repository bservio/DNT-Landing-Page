"use client";
import { useEffect } from "react";

import "../iframe.css";

const DoityInscricao = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://doity.com.br/js/box_inscricao.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#00264d]">
      <div className="max-w-[1440px] m-auto flex flex-col items-center bg-[#00264d] border-none ">
        <iframe
          id="iframe-inscricao"
          className="w-full h-[1000px] border-none section-title"
          src="https://doity.com.br/iiicongressoicev-216998-20250331150337/passo1?box=1"
        ></iframe>
        <p className="text-center  text-sm font-bold mt-4">
          Caso não consiga fazer a inscrição
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://doity.com.br/iiicongressoicev-216998-20250331150337"
            className="text-blue-600 hover:underline ml-1"
          >
            clique aqui
          </a>
        </p>
      </div>
    </div>
  );
};

export default DoityInscricao;
