import Image from "next/image";
import { MapPin } from "lucide-react";

export default function CardProgramacao({ event }) {
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
        <div className="flex gap-2 mt-2">
          {event.enucompi ? (
            <span className="text-[10px] uppercase bg-amber-700 font-semibold px-2 py-1 w-max rounded-full">
              Enucompi
            </span>
          ) : null}

          {event.type === "Palestra" && (
            <span className="text-[10px] uppercase bg-emerald-600 font-semibold px-2 py-1 w-max rounded-full">
              Palestra
            </span>
          )}

          {event.type === "Oficina" && (
            <span className="text-[10px] uppercase bg-sky-700 font-semibold px-2 py-1 w-max rounded-full">
              Oficina
            </span>
          )}

          {event.type === "Minicurso" && (
            <span className="text-[10px] uppercase bg-violet-800 font-semibold px-2 py-1 w-max rounded-full">
              Minicurso
            </span>
          )}
        </div>
        <div className="flex gap-4 mt-2 flex-wrap">
          {event.speakers
            ? event.speakers.map((speaker, key) => (
                <div key={key} className="">
                  {speaker.image ? (
                    <Image
                      src={speaker.image}
                      width={150}
                      height={150}
                      alt={speaker.name}
                      className="rounded-lg shadow-lg"
                    />
                  ) : null}
                  <p className="text-sm font-semibold">{speaker.name}</p>
                </div>
              ))
            : null}

          {event.eventImg ? (
            <Image
              src={event.eventImg}
              width={350}
              height={120}
              alt={event.title}
              className="rounded-lg shadow-lg w-ful"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
