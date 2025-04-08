"use client";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";
import Link from "next/link";

const SpeakerCard = ({ name, title, bio, fullbio, image, smallImg, link }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div
        className="relative w-40 h-52 lg:w-64 lg:h-80 border rounded-2xl overflow-hidden shadow-lg group"
        onClick={() => setShowModal(true)}
      >
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-[#00264d] bg-opacity-80 flex items-center justify-center text-white p-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <h2 className="text-sm lg:text-xl font-bold">{name}</h2>
            <p className="text-xs lg:text-sm mt-1">{title}</p>
            <p className="text-xs mt-2">{bio}</p>
          </div>
        </div>
        <div className="absolute bottom-0  bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center group-hover:opacity-0 transition-opacity duration-300">
          <h2 className=" text-sm lg:text-lg font-semibold">{name}</h2>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="flex flex-col lg:flex-row items-center">
          <Image
            src={smallImg}
            alt={name}
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2 px-4 py-8">
            <h1 className="text-xl lg:text-2xl font-semibold">{name}</h1>
            <p className="text-sm italic">{title}</p>
            <p className="text-justify">{fullbio}</p>
            <Link target="_blank" href={link} className="text-sm italic">
              Clique aqui e saiba mais sobre o palestrante
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default function SpeakerList() {
  const speakers = [
    {
      name: "Gustavo Guanabara",
      title: "CEO do Curso em Vídeo",
      bio: "Criador de cursos online e influenciador digital.",
      image: "/img/palestrantes/4dnt/png/Gustavo_Guanabara2.png",
      smallImg: "/img/palestrantes/4dnt/Gustavo_Guanabara2.webp",
      fullbio:
        "Formado em tecnologia e informática, é professor de computação e linguagens de programação do canal no YouTube que criou, chamado Curso em Vídeo. Além do canal, é palestrante e professor desde 1994 em escolas infantis, cursos técnicos e universidades, além de também já ter trabalhado com o chamado EAD (ensino à distância) para uma universidade pública. Seu canal possui cursos de PHP, Java, Python, C++ e outras línguas computacionais.",
      link: "https://www.cursoemvideo.com/sobre/",
    },
    {
      name: "Joel Pinheiro",
      title: "Economista, mestre em filosofia pela USP",
      bio: "Comentarista Globo News e Colunista da Folha de SP",
      image: "/img/palestrantes/4dnt/png/Joel_Pinheiro2.png",
      smallImg: "/img/palestrantes/4dnt/Joel_Pinheiro2.webp",
      fullbio:
        "Formou-se em economia pelo Insper em 2007 e em filosofia pela Universidade de São Paulo (USP) em 2008, é mestre em filosofia também pela USP. Em junho de 2024, foi contratado pelo Grupo Globo para atuar como comentarista da GloboNews. Em 8 de julho de 2024, estreou como comentarista do programa Estúdio i, da GloboNews.",
      link: "https://www.instagram.com/joelpinheiro85/",
    },
    {
      name: "Perla Amabile",
      title: "Co-fundadora da Be Intelligence",
      bio: "NeuroEstrategista e Data Insighter",
      image: "/img/palestrantes/4dnt/png/Perla.png",
      smallImg: "/img/palestrantes/4dnt/Perla.webp",
      fullbio:
        "NeuroEstrategista e Data Insighter, unindo ciência e estratégia para potencializar o valor de marcas no mercado. Pioneira em NeuroEstratégia e NeuroBranding no Brasil. Com mais de 20 anos de experiência em marketing, branding e inovação, já integrou o board de grandes grupos de comunicação e consultorias digitais, contribuindo com estratégias para algumas das marcas mais amadas do mundo. É TVhost do programa EstrategicaMente no Terra, onde explora os bastidores das decisões estratégicas dos líderes da nova economia.",
      link: "https://www.linkedin.com/in/perlaamabile/",
    },
    {
      name: "Cristiano Santos",
      title: "LinkedIn Top Voice",
      bio: "Professor. Palestrante internacional. TEDx Speaker e consultor. ",
      image: "/img/palestrantes/4dnt/png/Cristiano_Santos.png",
      smallImg: "/img/palestrantes/4dnt/Cristiano_Santos.webp",
      fullbio:
        "Cristiano Santos atua há mais de 8 anos no mercado digital. Proprietário da CS Treinamento e Desenvolvimento, é hoje reconhecido como um dos melhores palestrantes do país. Suas palestras, cursos e consultorias voltadas são aos temas de marketing digital, mídias sociais, personal branding, transformação digital, cliente 4.0 e carreira na era digital.",
      link: "https://santoscristiano.com.br/",
    },
    {
      name: "Fernanda Nogueira",
      title: "Advogada tributarista e empresária. ",
      bio: "Fundadora do Tributário na Prática Educação.",
      image: "/img/palestrantes/4dnt/png/Fernanda_Nogueira.png",
      smallImg: "/img/palestrantes/4dnt/Fernanda_Nogueira.webp",
      fullbio:
        "Advogada tributarista, especialista em Gestão de Tributos e Planejamento Tributário pela FGV/SP, sócia do escritório Machado Nogueira Advogados, Podcaster “Em pauta, com Fernanda Nogueira” e autora do blog “Tributário na prática”, Conselheira Titular do Instituto de Direito e Processo Tributário (IDPT) e Criadora do Método Tributário na Prática.",
      link: "https://tnpacademy.com.br/tnp-academy-nova/",
    },
    {
      name: "Berto Igor",
      title: "Advogado, professor da UFPI",
      bio: "Doutorando em Direito Constitucional com ênfase em Inteligência Artificial pelo IDP",
      image: "/img/palestrantes/4dnt/png/Berto_Igor.png",
      smallImg: "/img/palestrantes/4dnt/Berto_Igor.webp",
      fullbio:
        "Possui graduação em Direito pela Universidade Federal do Piauí (2008). Mestre em Direito Constitucional pela Universidade de Coimbra. Doutorando em Direito Constitucional com ênfase em Inteligência Artificial pelo IDP (DF). Advogado Sócio Fundador do Escritório Caballero Rocha Sociedade de Advogados. Professor Adjunto da Universidade Federal do Piauí",
      link: "http://lattes.cnpq.br/6582039851797563",
    },
    {
      name: "Larissa Agrélio",
      title: "Diretora Jurídica do Grupo R9 (Ronaldo Fenômeno)",
      bio: "Advogada, Mestranda no ISDE - Madri",
      image: "/img/palestrantes/4dnt/png/Larissa_Agrelio.png",
      smallImg: "/img/palestrantes/4dnt/Larissa_Agrelio.webp",
      fullbio:
        "Possui graduação em Direito pela Universidade Federal do Rio de Janeiro(2014). Possui mestrado global em Direito Desportivo Internacional pela ISDE Law & Business Scholl. Diretora Jurídica do Octagon Brasil, do ODDZ Network e do R9 GestãoPatrimonial & Financeira.",
      link: "https://www.instagram.com/larissaagrelioadvogada/",
    },
    {
      name: "Liana Chaib",
      title: "Ministra do Tribunal Superior do Trabalho",
      bio: "Doutora em Direito Constitucional pela Universidade de Fortaleza.",
      image: "/img/palestrantes/4dnt/png/Liana_Chaib.png",
      smallImg: "/img/palestrantes/4dnt/Liana_Chaib.webp",
      fullbio:
        "Liana Chaib é Ministra do Tribunal Superior do Trabalho. Doutora em Direito Constitucional pela Universidade de Fortaleza e mestre em Direito Constitucional pela Universidade Federal do Ceará. Ocupa a cadeira de número 21 da Academia Piauiense de Letras Jurídicas e é professora de Direito Administrativo da Universidade Estadual do Piauí desde 1988.",
      link: "http://lattes.cnpq.br/5787065032422913",
    },
    {
      name: "Junior Santana",
      title: "CEO do Grupo Santana",
      bio: "Co-fundador da Jolt Agency e projeto 'Seja Uma Fonte'",
      image: "/img/palestrantes/4dnt/png/Santana.png",
      smallImg: "/img/palestrantes/4dnt/Santana.webp",
      fullbio:
        "Empreendedor desde os 20 anos, é especialista em Gestão e Processos, com sólida experiência na liderança de equipes e desenvolvimento de estratégias empresariais. CEO do Grupo Santana, também é cofundador da Jolt Agency e do projeto Seja Uma Fonte, iniciativas que unem inovação, impacto e propósito. Atua como consultor e advisor de negócios, ajudando empresas a crescer com foco em eficiência, diferenciação e resultado.",
      link: "http://lattes.cnpq.br/5787065032422913",
    },
    {
      name: "Rebeca Nepomuceno",
      title:
        "Diretora de Economia Digital e Inovação da Secretaria de Inteligência Artificial",
      bio: "Economista mestre em Economia pela Universidade Federal de Viçosa",
      image: "/img/palestrantes/4dnt/png/Rebeca_Nepomuceno.png",
      smallImg: "/img/palestrantes/4dnt/Rebeca_Nepomuceno.webp",
      fullbio:
        "Rebeca Nepomuceno é economista pela Universidade de Brasília (UnB), mestre em Economia pela Universidade Federal de Viçosa e pós-graduanda em Inteligência Artificial e Análise de Dados. Atualmente, ocupa o cargo de Diretora de Economia Digital e Inovação na Secretaria de Inteligência Artificial, onde lidera iniciativas voltadas à economia digital, inovação e uso de IA no setor público. Com experiência na formulação de políticas para a economia digital e na implementação de estratégias de inteligência artificial para modernização da gestão pública, faz parte da equipe que ministra o Masterclass em IA para o Setor Público, capacitando gestores e servidores sobre as melhores práticas no uso da IA para aprimoramento de serviços governamentais",
      link: "https://www.linkedin.com/in/rebeca-maria-nepomuceno-lima-09a74260/",
    },
    {
      name: "Miriane Ferreira",
      title: "Advogada, mestre em Direito e Tecnologia ",
      bio: "Pós-graduada em Direito de Família e Sucessões, Pós-graduada em Psicanálise, Pós-graduada em Direito Penal, Pós-graduada em Processo Penal",
      image: "/img/palestrantes/4dnt/png/Miriane_Ferreira.png",
      smallImg: "/img/palestrantes/4dnt/Miriane_Ferreira.webp",
      fullbio:
        "Miriane Ferreira é advogada especialista em Direito de Família e Sucessões, com formação em Psicanálise e atuação voltada ao acolhimento jurídico e emocional de mulheres em processos de separação e reestruturação familiar. Graduada em Direito, com sólida formação multidisciplinar e constante aprimoramento acadêmico, Miriane alia excelência técnica à sensibilidade no trato com questões familiares complexas. Seu trabalho é reconhecido pela dedicação à justiça e pelo compromisso em oferecer um suporte jurídico humanizado, integrando saberes do Direito e da Psicanálise para proporcionar soluções eficazes e acolhedoras aos seus clientes.",
      link: "https://mirianeferreira.com.br/miriane-ferreira/",
    },
    {
      name: "Neto Ribeiro",
      title: "Consultor Empresarial, empresário e CEO da Consultoria+",
      bio: "Formação em Contabilidade, pós-graduação em Management",
      image: "/img/palestrantes/4dnt/png/Neto_Ribeiro.png",
      smallImg: "/img/palestrantes/4dnt/Neto_Ribeiro.webp",
      fullbio:
        "Consultor Empresarial, empresário e CEO da CONSULTORIA+, formação em Contabilidade, pós-graduação em Management, especialização em liderança, expertise em marketing digital para negócios, marketing político, escritor, professor e mentor.",
      link: "https://astronautaconsultor.com.br/",
    },
  ];

  return (
    <div className="flex m-auto flex-wrap max-w-[1200px] items-center justify-center gap-4 p-4">
      {speakers.map((speaker, index) => (
        <SpeakerCard key={index} {...speaker} />
      ))}
    </div>
  );
}
