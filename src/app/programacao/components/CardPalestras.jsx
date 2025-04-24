"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";

const CardPalestras = ({ palestra }) => {
  return (
    <h1>oi</h1>
    // <Card>
    //   <CardHeader>
    //     <CardDescription className="flex gap-2 items-center">
    //       {palestra.dia} - {palestra.horario}
    //     </CardDescription>
    //     <CardTitle className="text-lg">
    //       {palestra.titulo}
    //     </CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="flex items-center gap-2">
    //       <CiLocationOn />
    //       <p>{palestra.local}</p>
    //     </div>

    //     <div className="flex flex-col lg:flex-row gap-8 mt-2">
    //       <div className="font-semibold">
    //         {
    //           palestra.palestrantes ? (
    //             <h4>Palestrante(s):</h4>
    //           ) :
    //           null
    //         }

    //         <div className="flex mt-2 gap-1">

    //           {
    //             palestra.palestrantes ? (

    //               palestra.palestrantes.map((palestrante, index) => (
    //               <div className="flex flex-col gap-1 " key={index}>
    //                 <Image
    //                   src={palestrante.foto}
    //                   alt={palestrante.nome}
    //                   width={60}
    //                   height={60}
    //                   className="rounded-full"
    //                 />
    //                 <p className="text-sm font-semibold w-[100px]">{palestrante.nome}</p>
    //             </div>
    //             ))
    //             ) : null
    //           }
    //         </div>
    //       </div>

    //       {
    //         palestra.debatedores ? (
    //           <div className="font-semibold">
    //             <h4>Debatedore(s):</h4>
    //             <div className="flex mt-2 gap-6">
    //               {
    //                 palestra.debatedores.map((debatedor, index) => (
    //                   <p
    //                     key={index}
    //                     className="text-sm font-semibold w-[80px]"
    //                   >{debatedor}</p>
    //                 ))
    //               }
    //             </div>
    //           </div>
    //         ) :
    //         null
    //       }

    //     </div>
    //     {/* <p className="mt-4 font-bold">Palestrante(s)</p>
    //     <div className="flex mt-2 gap-1">

    //       {
    //         palestra.palestrantes ? (

    //           palestra.palestrantes.map((palestrante, index) => (
    //           <div className="flex flex-col gap-1 " key={index}>
    //             <Image
    //               src={palestrante.foto}
    //               alt={palestrante.nome}
    //               width={60}
    //               height={60}
    //               className="rounded-full"
    //             />
    //             <p className="text-sm font-semibold w-[100px]">{palestrante.nome}</p>
    //         </div>
    //         ))
    //         ) : null

    //       }

    //       {
    //         palestra.debatedores ? (
    //           <div className="ml-8">
    //             <p className="font-bold">Debatedores:</p>
    //             <div  className="flex gap-1">
    //             {
    //               palestra.debatedores.map((debatedor, index) => (

    //                   <p key={index} className="text-sm font-semibold w-[100px]">          {debatedor}
    //                   </p>

    //               ))
    //             }
    //             </div>
    //           </div>

    //         ) : null
    //       }
    //     </div>
    //      */}
    //   </CardContent>
    // </Card>
  );
};

export default CardPalestras;
