import Image from "next/image";
import { MapPin } from "lucide-react";

export default function NoImgCardProgramacao({ event }) {
  return (
    <div className="w-full bg-slate-900 p-4 rounded-2xl shadow-md mt-4 flex flex-col-reverse lg:flex-row lg:gap-16 gap-8 items-start">
      <div className="">
        <span className="flex items-center gap-1 text-sm">
          <MapPin size={14} /> {event.location}
        </span>
        <div className="flex items-center gap-1 text-sm mt-4">
          <p>Data:</p>
          <span className="font-semibold">{event.date}</span>
        </div>
        <div className="flex items-center gap-1 text-sm mt-1">
          <p>Início:</p>
          <span className="font-semibold">{event.start}</span>
        </div>
        <div className="flex items-center gap-1 text-sm mt-1">
          <p>Término:</p>
          <span className="font-semibold">{event.finish}</span>
        </div>
      </div>
      <div className="">
        <h4 className="font-bold uppercase max-w-[800px]">{event.title}</h4>
        <div className="">
          {event.enucompi ? (
            <p className="text-[10px] uppercase bg-amber-700 p-1 w-max rounded-full">
              Enucompi
            </p>
          ) : null}
          {event.speakers.map((speaker, key) => (
            <div key={key}>
              <p className="text-xs text-neutral-100 mt-2">{speaker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
