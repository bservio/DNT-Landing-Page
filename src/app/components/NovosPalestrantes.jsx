import Image from "next/image";

const NovosPalestrantes = () => {
  return (
    <>
      <div className="flex gap-4 justify-center">
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/Gustavo_Guanabara.png"
            alt="Gustavo Guanabara"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Gustavo Guanabara</p>
            <p className="text-xs lg:text-base font-light">Educador</p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/palestrantes/4dnt/Joel_Pinheiro.png"
            alt="Joel Pinheiro"
            width={180}
            height={180}
            className="rounded-xl lg:w-[300px] lg:h-[300px]"
          />
          <div className="absolute bottom-0 z-50 bg-[#00264d] w-full rounded-xl p-2 lg:p-4 text-white text-center">
            <p className="text-sm lg:text-xl font-bold">Joel Pinheiro</p>
            <p className="text-xs lg:text-base font-light">Economista</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NovosPalestrantes;
