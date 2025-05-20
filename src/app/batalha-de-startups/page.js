import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const BatalhaDeStartUps = () => {
  return ( 
    <div className="max-w-7xl mx-auto p-8">
      <Image 
        src={"/img/Banner_Batalha_DNT.webp"}
        alt="Batalha de Startups"
        width={1280}
        height={416}
        className="w-full h-auto object-cover rounded-lg"
      /> 
      <div className="flex flex-col xl:flex-row items-start justify-center my-8 gap-4">
        <div className="flex flex-col items-start justify-center w-full text-left gap-2"> 
          <h1 className={`${poppins.className} font-bold text-2xl xl:text-4xl `}>Batalha de Startups - 6,28</h1>
          <p>
            O IV DNT traz uma novidade incrível: A Batalha de Startups - 6,28! 

          </p>
          <p>
            É a sua chance de mostrar soluções inovadoras que podem transformar o mercado jurídico, corporativo ou tecnológico — e ainda levar até R$ 10 mil no bolso + mentoria com feras do mercado, pra impulsionar de vez sua ideia!
          </p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Resultado Etapa 1</h2>
          <p className="font-bold">Confira o resultado da primeira etapa da Batalha de Startups 6,28 </p>
          <p className="mt-2">As oito primeiras classificadas serão convocadas para a Etapa 2 (demo presencial / banca aliada a investidores). As demais receberão feedback individual destacando pontos fortes e recomendações de melhoria. Parabéns às oito startups classificadas! Conforme o cronograma do IV Congresso DNT – Direito, Negócios & Tecnologia, a Etapa 2 acontecerá em formato de batalha de pitches nos dias 29 e 30 de maio de 2025, no auditório principal do evento. </p>
          <Link href="/pdf/Resultado_Batalha_de_Startups.pdf">
              <p className="mt-2 text-blue-500 font-bold underline">Acesse o resultado da Etapa 1</p>
            </Link>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Inscrição</h2>
          <p>Para participar da Batalha de Startups, será necessário entrar no formulário <Link className="text-blue-500" href={"https://cev.bz/batalha-startup"}>https://cev.bz/batalha-startup</Link> - Preencher e enviar o formulário. </p>
          <p className="mt-2">As inscrições deverão ser realizadas até o <strong>dia 14S de maio de 2025.</strong> As Startups proponentes deverão preencher o formulário de inscrição e enviar os seguintes documentos para concluir o processo de inscrição.</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Premiação</h2>
            <ol className="indent-4">
              <li>1º Lugar - <span>R$ 10.000,00 + Mentoria Exclusiva</span></li>
              <li>2º Lugar - <span>R$ 5.000,00</span></li>
              <li>3º Lugar - <span>R$ 2.500,00</span></li>
            </ol>
          </div>
        </div>
        <div className="max-w-[500px] w-full rounded-lg bg-neutral-50 flex flex-col items-center p-10">
          
          <Link 
            href="https://cev.bz/batalha-startup" 
            className="bg-red-400 w-full text-center p-6 text-xl rounded-2xl  pointer-events-none" 
            aria-disabled={true} 
            tabIndex={-1}
          > Incrições encerradas </Link>
          <div className="w-full mt-8 text-black">
            <h3 className="font-bold text-xl">Resultado Etapa 1</h3>
            <Link href="/pdf/Resultado_Batalha_de_Startups.pdf">
              <p className="mt-2 text-blue-900 font-bold underline">Acesse o resultado da Etapa 1</p>
            </Link>
          </div>
          <div className="w-full mt-8 text-black">
            <h3 className="font-bold text-xl">Período de inscrição</h3>
            <p className="mt-2 ">até 14 de maio de 2025</p>
          </div>
          <div className="w-full mt-8 text-black">
            <h3 className="font-bold text-xl">Premiação</h3>
            <p className="mt-2 ">R$ 17.500,00</p>
          </div>
          <div className="w-full mt-8 text-black">
            <h3 className="font-bold text-xl">Edital</h3>
            <Link href="https://www.somosicev.com/wp-content/uploads/2025/04/Edital-Batalha-de-Startups.pdf" className="mt-2 ">Clique aqui e acesso o edital</Link>
          </div>
          <div className="w-full mt-8 text-black">
            <h3 className="font-bold text-xl">Patrocínio</h3>
            <Image 
              src="/img/patrocinadores/4dnt/webp/Logo_628_original.webp"
              alt="Patrocinador 6,28"
              width={100}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default BatalhaDeStartUps;