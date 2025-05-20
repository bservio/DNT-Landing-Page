"use client"

import { MapPin } from "lucide-react";
import { Bungee_Inline } from "next/font/google";
import Image from "next/image";
import CardProgramacao from "./components/card-programacao";
import { firstDay, secondDayMainStage, secondDayWorkshops, thirdDayMainStage, thirdDayWorkshops } from "@/lib/palestras-4dnt";
import { Fragment, useRef } from "react";

const bungee = Bungee_Inline({ subsets: ["latin"], weight: ["400"] });


const ProgramacaoDNT = () => {
  const sectionRefs = {
    primeiro: useRef(null),
    segundo: useRef(null),
    terceiro: useRef(null)
  }

  return (
    <Fragment>
      <div className="flex flex-col items-center sticky top-[84px] p-4 bg-background z-40 text-center">
        <h1 className={`${bungee.className} text-[#ffff00] text-2xl lg:text-4xl`}>Programação - IV DNT</h1>
        <p className="text-sm lg:text-base">Confira abaixo a programação completa dos três dias</p>

        <div className="flex gap-4 mt-6 text-sm">
        <button
          type="button"
          className="p-2 bg-[#ffff00] text-black font-semibold rounded-full" 
          onClick={() => sectionRefs.primeiro.current && 
            window.scrollTo({
              top: sectionRefs.primeiro.current.offsetTop - 240,
              behavior: "smooth"
            })
          }
        >
          QUA 28/05
        </button>
        <button
          type="button"
          className="p-2 bg-[#ffff00] text-black font-semibold rounded-full" 
          onClick={() => sectionRefs.segundo.current && 
            window.scrollTo({
              top: sectionRefs.segundo.current.offsetTop - 240,
              behavior: "smooth"
            })
          }
        >
          QUI 29/05
        </button>
        <button
          type="button"
          className="p-2 bg-[#ffff00] text-black font-semibold rounded-full" 
          onClick={() => sectionRefs.terceiro.current && 
            window.scrollTo({
              top: sectionRefs.terceiro.current.offsetTop - 240,
              behavior: "smooth"
            })
          }
        >
          SEX 30/05
        </button>
      </div>
      </div>
      <div className="max-w-7xl mx-auto p-8">
      

      

      {/* Primeiro dia 28/05 */}
      <div className="mt-10" id="first-day" ref={sectionRefs.primeiro}>
        <span className="text-sm opacity-90">PRIMEIRO DIA</span>
        <h2 className="text-2xl font-bold">QUARTA 28 DE MAIO</h2>

        <div className="mt-4">
          <div className="w-full bg-slate-100 p-4 rounded-2xl shadow-md">
            <p className="font-bold text-neutral-800 uppercase">16:00 - Abertura: Credenciamento</p>
          </div>
          <p className="mt-4">Espaço CEV</p>
           <div className="w-full bg-slate-100 p-4 rounded-2xl shadow-md">
            <p className="font-bold text-neutral-800 uppercase">18:00 - Início do Evento</p>
          </div>
          <div className="w-full bg-slate-900 p-4 rounded-2xl shadow-md mt-4 flex flex-col-reverse lg:flex-row lg:gap-16 gap-8 items-start">
            <div className="">
              <span className="flex items-center gap-1 text-sm"><MapPin size={14}/> Espaço CEV</span>
              <div className="flex items-center gap-1 text-sm mt-4">
                <p>Data:</p>
                <span className="font-semibold">28/03/2025</span>
              </div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <p>Início:</p>
                <span className="font-semibold">18:30</span>
              </div>
              <div className="flex items-center gap-1 text-sm mt-1">
                <p>Término:</p>
                <span className="font-semibold">19:00</span>
              </div>

            </div>
            <div className="">
              <h4 className="font-bold">APRESENTAÇÂO CULTURAL: MARIA BONITA</h4>
              <div className="">
                <Image
                  src="/img/maria-bonita2.webp"
                  alt="Maria Bonita"
                  width={200}
                  height={100}
                  className="rounded-lg mt-4" 
                />
                <p className="text-xs text-neutral-100 mt-2">
                  Grupo cultural <span className="font-semibold">Redemoinho de Dança</span>
                </p>
              </div>
            </div>
        </div>                                    
        {firstDay.map((talk, key) => (
          <CardProgramacao key={key} event={talk} imgHeight={talk.height} imgWidth={talk.imgWidth}/>
        ))}
      </div>

      {/* Segundo dia 29/05 */}
      <div className="mt-20" id="second-day" ref={sectionRefs.segundo}>
        <span className="text-sm opacity-90">SEGUNDO DIA</span>
        <h2 className="text-2xl font-bold">QUINTA 29 DE MAIO</h2>
        <p className="mt-4">Espaço CEV</p>
        {
          secondDayMainStage.map((talk, key) => (
            <CardProgramacao key={key} event={talk} />
          ))
        }

        <p className="mt-4">Oficinas & Enucompi</p>
        {
          secondDayWorkshops.map((talk, key) => (
            <CardProgramacao key={key} event={talk} />
          ))
        }
      </div>

      {/* Terceiro dia 30/05 */}
      <div className="mt-20" id="third-day" ref={sectionRefs.terceiro}>
        <span className="text-sm opacity-90">TERCEIRO DIA</span>
        <h2 className="text-2xl font-bold">SEXTA 30 DE MAIO</h2>
        <p className="mt-4">Espaço CEV</p>

        {
          thirdDayMainStage.map((talk, key) => (
            <CardProgramacao event={talk} key={key}/>
          ))
        }

        <p className="mt-4">Oficinas & Enucompi</p>

        {
          thirdDayWorkshops.map((talk, key) => (
            <CardProgramacao key={key} event={talk} />
          ))
        }
      </div>



    </div>
    </div>
    </Fragment>
    
   );
}
 
export default ProgramacaoDNT;