// Footer.js

import Image from "next/image";
import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa"; // Importando ícones das redes sociais

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  space-y-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div>
          <Image
            src="/logos/Ativo 3.svg"
            alt="Logo"
            height={43.33}
            width={150}
            className="lg:w-[200px]"
          />
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/SOMOSiCEV"
            target="blank"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiO2FOcIfrWJE7ZibdwkpkQ"
            target="blank"
            className="text-white hover:text-gray-300"
          >
            <FaYoutube size={32} />
          </a>
          <a
            href="https://www.instagram.com/somosicev/"
            target="blank"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 text-white text-xs p-4 flex flex-col items-center justify-center text-center">
        <p>© 2024 - Tecnologia - iCEV - Instituto de Ensino Superior</p>
        <p>Esse domínio pertence ao Grupo Educacional Superior CEV</p>
        <p>CNPJ: 12.175.436/0001-09</p>
      </div>
    </footer>
  );
};

export default Footer;
