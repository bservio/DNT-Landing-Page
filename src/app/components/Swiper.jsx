"use client"

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

export default function SplideExample({ data }) {
  return (
    <Splide
      options={{
        type: "loop",
        gap: "",
        drag: "true",
        arrows: false,
        pagination: false,
        perPage: 2,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}
    >
      {
        data.map((palestrante, index) => (
          <SplideSlide key={index}>
            <div
              key={index}
              className="relative w-[130px] h-[130px] bg-cover rounded-lg"
              style={{ backgroundImage: `url(${palestrante.imageUrl})` }}
            >
              <div className="z-10 absolute bottom-0 text-white text-center w-full bg-black/25 p-2 min-h-[60px]">
                <h4 className="text-base lg:text-xl font-bold w-full">
                  {palestrante.nome}
                </h4>

              </div>
            </div>
          </SplideSlide>
        ))
      }
    </Splide>
  );
}