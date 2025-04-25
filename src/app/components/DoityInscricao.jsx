"use client";
import { useEffect, useState, useRef } from "react";
import Script from "next/script";

const DoityInscricao = () => {
  const [showIframe, setShowIframe] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-8 bg-white">
      <div
        className="p-4 lg:max-w-[1200px] m-auto flex flex-col items-center  border-none "
        ref={ref}
      >
        {showIframe ? (
          <>
            <iframe
              id="iframe-inscricao"
              className="w-full h-[1000px] border-none section-title"
              src="https://doity.com.br/iv-congresso-dnt-icev/passo1?box=1"
            ></iframe>
            <Script
              src="https://doity.com.br/js/box_inscricao.js"
              strategy="afterInteractive"
              onLoad={() => {
                console.log("Script loaded correctly");
              }}
            />
          </>
        ) : (
          <div className="w-full h-[900px] flex items-start justify-center text-red-500 font-bold text-2xl">
            Carregando frame de inscrição
          </div>
        )}
        <p className="text-center text-[#801e61] text-sm font-bold">
          Ao clicar no botão de inscrição, você será redirecionado para o site
          do Doity, onde poderá finalizar sua inscrição.
        </p>
        <p className="text-center text-[#801e61] text-sm font-bold mt-4">
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
