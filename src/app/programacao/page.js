import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsArrowLeftCircle } from "react-icons/bs";

import { palestrasQuarta, palestrasQuinta, palestrasSexta } from "@/lib/palestras"
import CardPalestras from "./components/CardPalestras";
import IframeDoity from "../components/IframeDoity";
import Link from "next/link";
import Footer from "../components/Footer";
import { scrollToIFrame } from "../components/HeroSection";

const ProgramacoPage = () => {
  
  return ( 
    <>
      oi
      {/* <div className=""
        style={{ background: "linear-gradient(189deg, rgba(122,27,98,1) 34%, rgba(0,38,77,1) 97%)" }}
      >
        <div 
        className="max-w-[1000px] mx-auto"
        
      >
        <div
        // 
        className="w-full flex flex-col items-center justify-center px-8 gap-6 py-12"
      >

        <Link href="/" className="self-start">
          <div className=" flex gap-2 items-center">
            <BsArrowLeftCircle />
            <p>voltar</p>
          </div>
        </Link>
        <h1 className="text-3xl font-bold">Confira a programação do DNT 2024</h1>
        <p className="text-[#ffff00]">Veja aqui nossos palestrantes, os temas e tudo que vai acontecer nos três dias</p>
        <button className="w-full py-2 bg-[#ffff00] rounded-sm text-black font-semibold hover:bg-[#ffff00c0] duration-700"
          onClick={scrollToIFrame}
        >
          Garanta já sua vaga
        </button>
      
      </div>

      <div 
        className="py-16 flex flex-col items-center justify-center px-8"
        
      >
        <Tabs className="w-full" defaultValue="06">
        <TabsList className="w-full grid grid-cols-3 bg-transparent border-b-4 border-[#ffff00]">
            <TabsTrigger 
              className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]"
              value="06"
            >
              Dia 06/03
            </TabsTrigger>
            <TabsTrigger 
              className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]"
              value="07"
            >
              Dia 07/03
            </TabsTrigger>
            <TabsTrigger 
              className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]"
              value="08"
            >
              Dia 08/03
            </TabsTrigger>
          </TabsList>
          <TabsContent value="06">
            <div className="flex flex-col gap-1">
              {palestrasQuarta.map((palestra, index) => (
                <CardPalestras 
                  key={index}
                  palestra={palestra}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="07">
            <div className="flex flex-col gap-1">
              {palestrasQuinta.map((palestra, index) => (
                <CardPalestras 
                  key={index}
                  palestra={palestra}
                />
              ))}
            </div>
            
          </TabsContent>
          <TabsContent value="08">
            <div className="flex flex-col gap-1">
              {palestrasSexta.map((palestra, index) => (
                <CardPalestras 
                  key={index}
                  palestra={palestra}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
      
      </div>
      <div>
        <IframeDoity />
      </div>
      <Footer /> */}
    </>
   );
}
 
export default ProgramacoPage;