import { CalendarDaysIcon, Clock2 } from "lucide-react";
import Image from "next/image";

const { default: Link } = require("next/link");

const EnucompiPage = () => {
  const minicursos = [
    {
      title: "Introdução aos smart contracts",
      instructors: "Frank Cesár (UFPI) e James Sousa (UFPI)",
      date: "29 de maio",
      time: "17H30 ÀS 20H00",
    },
    {
      title:
        "Desenvolvimento de experiencias digitais imersivas através do mapeamento de vídeo em tempo real com redes neurais",
      instructors: "Héder Rodrigues Silva (UFPI) e Iallen Gabio Santos (UFPI)",
      date: "29 de maio",
      time: "17H30 ÀS 20H00",
    },
    {
      title:
        "Como criar seu próprio assistente de pesquisa científica com LAnggraph",
      instructors: "Larissa Nascimento (IFPI) e Ricardo Sekeff (IFPI)",
      date: "29 de maio",
      time: "17H30 ÀS 20H00",
    },
    {
      title:
        "Deep Learning na prática: Classificando imagens faciais com redes neurais convolucionais",
      instructors:
        "Caio Ferreira (UFPI), Rodrigo Borges (UFPI), Nazareno Rodrigues (IFPI), Rodrigo Veras (UFPI) e Kelson Aires (UFPI)",
      date: "30 de maio",
      time: "17H30 ÀS 20H00",
    },
    {
      title:
        "Automação de tarefas com APIS: Integração entre google calendar e whatsapp para otimização de processos",
      instructors:
        "Francisnilton Santos (IFPI), Luis Guilherme (IFPI), Ricardo Sekeff (IFPI), Vanessa Cunha (UFPI)",
      date: "30 de maio",
      time: "17H30 ÀS 20H00",
    },
    {
      title:
        "Aplicação de técnicas de Rigging e normal map na unity para criar animações 2d com profundidade iluminação e dinâmica a partir de uma única imagem",
      instructors:
        "Héder Rodrigues (UFPI), Isabelle Souza (IFPI), Iallen Gabio Santos (IFPI)",
      date: "30 de maio",
      time: "17H30 ÀS 20H00",
    },
  ];
  return (
    <>
      <div className="max-w-[1000px] m-auto p-4">
        <div className="mt-4">
          <Image
            src="/img/enucompi_negatv.png"
            alt="enucompi"
            width={300}
            height={125.33}
            className="mx-auto"
          />
          <h1 className="font-bold text-3xl mt-4">
            O ENUCOMPI 2025 será no DNT!
          </h1>
          <h2 className="font-semibold text-xl mt-4">O que é o ENUCOMPI?</h2>
          <p className="indent-4 text-justify font-normal mt-2">
            O ENUCOMPI é um dos maiores e mais relevantes eventos de Computação
            do Piauí, reunindo estudantes, pesquisadores e profissionais da área
            em um ambiente vibrante de troca de conhecimentos, experiências e
            conexões. Mais do que um encontro, é um palco para fomentar ideias
            inovadoras, discutir tendências e fortalecer o ecossistema de
            tecnologia na região.
          </p>

          <h2 className="font-semibold text-xl mt-4">
            Por que o ENUCOMPI é importante?
          </h2>
          <p className="indent-4 text-justify font-normal mt-2">
            Porque é mais do que um evento — é uma força propulsora para o
            desenvolvimento da comunidade tech do Norte e Nordeste. Ao valorizar
            talentos locais, incentivar a formação de redes colaborativas e
            aproximar a região das inovações e tendências nacionais em
            computação, o ENUCOMPI contribui diretamente para o crescimento e a
            visibilidade do setor tecnológico regional.
          </p>

          <h2 className="font-semibold text-xl mt-4">
            Veja os minicursos confirmados para esse ENUCOMPI:
          </h2>

          <div className="mt-4 space-y-2">
            {minicursos.map((minicurso, index) => (
              <div key={index}>
                <h3 className="font-medium text-lg uppercase text-[#ffb000]">
                  {minicurso.title}
                </h3>
                <span>{minicurso.instructors}</span>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon size={14} />
                  <span>{minicurso.date}</span>
                  <Clock2 size={14} />
                  <span>{minicurso.time}</span>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-semibold text-xl mt-4">Chamadas:</h2>
          <ul className="list-disc p-8 ml-10 text-justify">
            <li>
              <Link
                className="cursor-pointer text-teal-400 underline"
                href="/chamadas/artigos"
              >
                Artigos
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer text-teal-400 underline"
                href="/chamadas/minicursos"
              >
                Minicursos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default EnucompiPage;
