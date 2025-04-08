"use client";
import Image from "next/image";
import { bungee } from "./InfoSection";

const SponsorsSection = () => {
  const imgPath = "/img/patrocinadores/4dnt/webp/";
  const sponsors = [
    {
      name: "ServTec",
      image: imgPath + "Servtec_Negativo" + ".webp",
    },
    {
      name: "Bunker Advertising",
      image: imgPath + "Bunker_Logo" + ".webp",
    },
    {
      name: "Piauí Negócios",
      image: imgPath + "logo-piauinegocios" + ".webp",
    },
    {
      name: "Amoreira",
      image: imgPath + "logo-amoreira" + ".webp",
    },
    {
      name: "AES - Marketing e Negócios Digitais",
      image: imgPath + "AES_Negativo" + ".webp",
    },
    {
      name: "Mister Wiz",
      image: imgPath + "Mister_Wiz" + ".webp",
    },
  ];
  return (
    <div className="bg-[#602A5E]">
      <div className="flex flex-col itemms-center text-center p-8 ">
        <h3
          className={`${bungee.className} text-[#ffff00] text-3xl lg:text-4xl`}
        >
          Quem faz o congresso com a gente
        </h3>
        <h4>O DNT te coloca de frente com as maiores marcas</h4>
        <div className="mt-8">
          <h5>Patrocinadores & Apoiadores</h5>
          <div className="flex gap-4 items-center justify-center flex-wrap">
            {sponsors.map((sponsor, index) => (
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                key={index}
                height={150}
                width={150}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
