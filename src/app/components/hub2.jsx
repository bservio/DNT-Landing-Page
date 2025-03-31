import { Bungee_Inline } from "next/font/google";
import Image from "next/image";
import { scrollToIFrame } from "./HeroSection";
const bungee = Bungee_Inline({ subsets: ["latin"], weight: ["400"] });
const HubSec = () => {
  return (
    <div className="flex flex-col bg-[#001648] lg:flex-row-reverse">
      <div className="flex flex-col items-center justify-center p-12 lg:justify-items-start">
        <h2 className="text-3xl font-bold lg:text-6xl">Um HUB de</h2>
        <h2
          className={`text-4xl  text-[#ffff00] ${bungee.className} lg:text-7xl`}
        >
          CONEXÕES
        </h2>

        <div className="max-w-[2000px] mt-8 indent-8 text-justify space-y-4 text-lg lg:text-2xl lg:space-y-8 lg:p-4 ">
          <p>
            Participar do Congresso DNT vai muito além de uma estratégia —{" "}
            <span className="font-bold">
              é uma oportunidade única de expandir seus horizontes.
            </span>
          </p>
          <p>
            No DNT, você se conecta às últimas tendências, troca experiências
            com grandes nomes do setor e se coloca no centro de um{" "}
            <span className="font-bold">evento transformador</span>. Aqui, cada
            conversa pode abrir uma nova porta para o seu futuro.
          </p>
          <p>
            A última edição foi um grande sucesso, reunindo participantes de
            diversas áreas e criando conexões valiosas.{" "}
            <span className="font-bold">
              E em 2025, vamos elevar o nível ainda mais, com mais conteúdos
              inovadores, oportunidades exclusivas e um ambiente perfeito para
              impulsionar sua trajetória.
            </span>
          </p>
        </div>
        <button
          className="px-8 py-4 mt-20 justify-center  bg-[#ffff00] hover:bg-[#4b4b17] rounded-lg transition-colors duration-500 ease-in-out hover:text-white text-sm lg:text-base font-semibold text-black"
          onClick={scrollToIFrame}
        >
          SAIBA TUDO DO IV DNT
        </button>
      </div>

      <Image
        src="/hub-img.webp"
        width={688}
        height={851}
        alt="Mosaico com fotos e a identidade visual do evento"
        className="w-full h-auto object-cover lg:max-w-[688px]"
      />
    </div>
  );
};

export default HubSec;
