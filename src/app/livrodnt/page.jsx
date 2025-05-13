import { Fragment } from "react";
import Navbar from "../components/Header";
import Link from "next/link";
import Image from "next/image";

const LivroDntPage = () => {
  return (
    <Fragment>
      <div className="max-w-[1000px] m-auto p-4">
        <div className="mt-4">
          <h1 className="font-bold text-3xl">
            Livro &quot;Direitos, Negócio e Tecnologia&quot;
          </h1>
          <div className="w-full h-[500px] overflow-hidden relative rounded-xl mt-4">
            <Image
              src="/img/Mockup-Livro-DNT.png"
              alt="Capa do livro Direitos, Negócio e Tecnologia"
              layout="fill"
              objectFit="cover"
              className="relative"
            />
          </div>

          <p className="indent-8 mt-8 text-justify">
            No ICEV, incentivamos a pesquisa e a produção acadêmica como
            ferramentas para transformar conhecimento em impacto. Nosso livro
            &quot;Direitos, Negócio e Tecnologia&quot; é uma publicação anual
            lançada durante o Congresso DNT, reunindo estudos e reflexões de
            alunos e professores em uma abordagem interdisciplinar que conecta
            Administração, Direito e Engenharia de Software às demandas do
            mercado.
          </p>
          <p className="indent-8 mt-4 text-justify">
            Cada edição do livro compila pesquisas acadêmicas, científicas e
            práticas apresentadas no congresso, abordando temas inovadores e
            relevantes para a sociedade. Essa iniciativa reforça o compromisso
            do ICEV com a produção de conhecimento de alta qualidade e com a
            formação de profissionais preparados para os desafios
            contemporâneos.
          </p>
          <p className="mt-4 text-justify text-xl font-semibold">
            Confira abaixo as edições já lançadas do livro &quot;Direitos,
            Negócio e Tecnologia&quot;!
          </p>
          <ul className="mt-4 ml-8 text-lg mb-20">
            <li className="underline list-disc">
              <Link href="https://www.somosicev.com/wp-content/uploads/2023/03/Direitos-Neg%C3%B3cios-e-Tecnologia-Anais-do-II-Congresso-do-ICEV-1.pdf">
                Edição 2023 - II DNT
              </Link>
            </li>
            <li className="underline list-disc">
              <Link href="https://www.somosicev.com/wp-content/uploads/2025/05/Direitos-Negócios-e-Tecnologia-Anais-do-III-Congresso-do-ICEV-2.pdf">
                Edição 2024 - III DNT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default LivroDntPage;
