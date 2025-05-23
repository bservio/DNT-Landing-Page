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
      name: "Virtex Telecom",
      image: imgPath + "virtex_negativo" + ".webp",
    },
    {
      name: "Ready Ti",
      image: imgPath + "READY_NEGATIVO" + ".webp",
    },
    {
      name: "Elite Eventos",
      image: imgPath + "Logo_elite_Branca" + ".webp",
    },
  ];
  const supporters = [
    {
      name: "6,28",
      image: imgPath + "Logo_628" + ".webp",
    },
    {
      name: "SEBRAE",
      image: imgPath + "sebrae_negativo" + ".webp",
    },
    {
      name: "Embarque Turismo",
      image: imgPath + "Logo-embarque-2" + ".webp",
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
    {
      name: "Metropolitan Hotel",
      image: imgPath + "Logo_Metropolitan" + ".webp",
    },
    {
      name: "Meu doce gourmet",
      image: imgPath + "meu_doce_negatv" + ".webp",
    },
    {
      name: "Hora do Recreio",
      image: imgPath + "Hora_do_recreio" + ".webp",
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
          <h5>Patrocinadores</h5>
          <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1000px] mx-auto">
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
        <div className="mt-8">
          <h5>Apoiadores</h5>
          <div className="flex gap-8 items-center justify-center flex-wrap max-w-[1000px] mx-auto">
            {supporters.map((sponsor, index) => (
              <Image
                src={sponsor.image}
                alt={sponsor.name}
                key={index}
                height={120}
                width={120}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;
