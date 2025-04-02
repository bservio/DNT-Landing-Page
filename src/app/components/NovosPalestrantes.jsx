import Image from "next/image";

const NovosPalestrantes = () => {
  return (
    <>
      <div className="max-w-[1200px] m-auto flex flex-wrap gap-4 justify-center">
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Gustavo_Guanabara.png"
            alt="Gustavo Guanabara"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Gustavo Guanabara</p>
            <p className="text-xs lg:text-xs font-light">
              CEO do Curso em Vídeo
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Joel_Pinheiro.png"
            alt="Joel Pinheiro"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Joel Pinheiro</p>
            <p className="text-xs lg:text-xs font-light">
              Comentarista Globo News e Colunista da Folha de SP
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Fernanda_Nogueira.png"
            alt="Fernanda Nogueira"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Fernanda Nogueira</p>
            <p className="text-xs lg:text-xs font-light">
              Advogada. Fundadora do Tributário na Prática Educação
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Berto_Igor.png"
            alt="Berto Igor"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Berto Igor</p>
            <p className="text-xs lg:text-xs font-light">
              Advogado. Doutorando no IDP
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Larissa_Agrelio.png"
            alt="Larissa Agrélio"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Larissa Agrélio</p>
            <p className="text-xs lg:text-xs font-light">
              Advogada, Mestranda no ISDE - Madri, Diretora Jurídica do Grupo R9
              (Ronaldo Fenômeno)
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/png/Liana_Chaib.png"
            alt="Liana Chaib"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Liana Chaib</p>
            <p className="text-xs lg:text-xs font-light">
              Ministra do Tribunal Superior do Trabalho
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovosPalestrantes;
