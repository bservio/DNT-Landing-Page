import React from 'react'
import CardPalestrante from './CardPalestrante'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { palestraHVerde, keynotesQuinta, keynotesSexta, palestrantesSalasQuinta, palestrantesSalasSexta } from '@/lib/palestras'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SplideExample from './Swiper'

export default function GridPalestrantes2() {
  return (
    <>
      <Tabs defaultValue="quarta">
        <TabsList className="mb-5 grid w-full lg:w-1/2 grid-cols-3 mx-auto justify-items-center content-center bg-transparent border-b-4 border-[#ffff00]">
          <TabsTrigger className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]" value="quarta">Dia 06/03</TabsTrigger>
          <TabsTrigger className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]" value="quinta">Dia 07/03</TabsTrigger>
          <TabsTrigger className="lg:text-xl font-semibold data-[state=active]:bg-transparent data-[state=active]:text-[#ffff00] data-[date=active]:underline data-[state=inactive]:text-[#ffff006b]" value="sexta">Dia 08/03</TabsTrigger>
        </TabsList>
        <TabsContent value="quarta">
          <div className="lg:max-w-[50vw] mx-auto">
            <h3 className='text-[#ffff00] text-left font-semibold my-4 lg:text-xl'>Abertura do Evento</h3>
            <div
              className="w-full h-40 lg:h-60 rounded-lg bg-cover relative"
              style={{ backgroundImage: `url("/img/orquestra-sanfonica.webp")` }}
            >
              <p className='absolute bottom-8 left-2 text-xl lg:text-2xl font-bold'>Apresentação: Orquestra Sanfônica</p>
            </div>

            <div className="mt-8">
              <h3 className='text-[#ffff00] text-left font-semibold mb-4 lg:text-xl'>Palestra: O Piauí que queremos, agora!</h3>

              {
                palestraHVerde.map((palestrante, index) => (
                  <div key={index} className="flex flex-col items-center justify-center lg:hidden">
                    <Card className="w-full mb-4">
                      <CardContent className="py-2 px-2 flex items-center ">
                        <Image
                          src={palestrante.imageUrl}
                          alt={palestrante.nome}
                          width={110}
                          height={110}
                        />
                        <CardHeader className="flex flex-col items-start justify-center">
                          <CardTitle className="text-xl text">
                            {palestrante.nome}
                          </CardTitle>
                          <CardDescription>
                            {palestrante.shortBio}
                          </CardDescription>
                        </CardHeader>


                      </CardContent>
                    </Card>
                  </div>
                ))
              }
              <div className="hidden gap-2 lg:flex flex-wrap mx-auto items-center justify-center lg:max-w-[650px]">
                {
                  palestraHVerde.map((palestrante, index) => (
                    <CardPalestrante palestrante={palestrante} key={index} />
                  ))
                }
              </div>
            </div>

          </div>
        </TabsContent>
        <TabsContent value="quinta">
          {
            keynotesQuinta.map((palestrante, index) => (
              <div key={index} className="flex flex-col items-center justify-center lg:hidden">
                <Card className="w-full mb-4">
                  <CardContent className="py-4 px-2 flex items-center ">
                    <Image
                      src={palestrante.imageUrl}
                      alt={palestrante.nome}
                      width={110}
                      height={110}
                    />
                    <CardHeader className="flex flex-col items-start justify-center">
                      <CardTitle className="text-xl text">
                        {palestrante.nome}
                      </CardTitle>
                      <CardDescription>
                        {palestrante.shortBio}
                      </CardDescription>
                    </CardHeader>


                  </CardContent>
                </Card>
              </div>
            ))
          }

          <div className="hidden gap-2 lg:flex flex-wrap mx-auto items-center justify-center lg:max-w-[650px]">
            {
              keynotesQuinta.map((palestrante, index) => (
                <CardPalestrante palestrante={palestrante} key={index} />
              ))
            }
          </div>


          <div className="mt-10 flex flex-col items-center justify-center">
            <h3 className="text-[#ffff00] font-bold text-lg">
              e muito mais ...
            </h3>
          </div>

          <div className="lg:hidden mt-5">
            <SplideExample data={palestrantesSalasQuinta} />
          </div>

          <div className="hidden mt-10 mx-auto lg:flex justify-center items-center gap-x-2 gap-y-6 max-w-[700px] flex-wrap">
            {
              palestrantesSalasQuinta.map((palestrante, index) => (
                <div
                  key={index}
                  className="relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${palestrante.imageUrl})` }}
                >
                  <div className="z-10 absolute bottom-0 text-white text-center w-full bg-black/35 p-2 min-h-[60px]">
                    <h4 className="text-base lg:text-xl font-bold w-full">
                      {palestrante.nome}
                    </h4>

                  </div>
                </div>
              ))
            }
          </div>
        </TabsContent>
        <TabsContent value="sexta">
          {
            keynotesSexta.map((palestrante, index) => (
              <div key={index} className="flex flex-col items-center justify-center lg:hidden">
                <Card className="w-full mb-4">
                  <CardContent className="py-4 px-2 flex items-center ">
                    <Image
                      src={palestrante.imageUrl}
                      alt={palestrante.nome}
                      width={110}
                      height={110}
                    />
                    <CardHeader className="flex flex-col items-start justify-center">
                      <CardTitle className="text-xl text">
                        {palestrante.nome}
                      </CardTitle>
                      <CardDescription>
                        {palestrante.shortBio}
                      </CardDescription>
                    </CardHeader>


                  </CardContent>
                </Card>
              </div>
            ))
          }

          <div className="hidden gap-2 lg:flex flex-wrap mx-auto items-center justify-center lg:max-w-[650px]">
            {
              keynotesSexta.map((palestrante, index) => (
                <CardPalestrante palestrante={palestrante} key={index} />
              ))
            }
          </div>


          <div className="mt-10 flex flex-col items-center justify-center">
            <h3 className="text-[#ffff00] font-bold text-lg">
              e muito mais ...
            </h3>
          </div>

          <div className="lg:hidden mt-5">
            <SplideExample data={palestrantesSalasSexta} />
          </div>

          <div className="hidden mt-10 mx-auto lg:flex justify-center items-center gap-x-2 gap-y-6 max-w-[700px] flex-wrap">
            {
              palestrantesSalasSexta.map((palestrante, index) => (
                <div
                  key={index}
                  className="relative w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-cover rounded-lg"
                  style={{ backgroundImage: `url(${palestrante.imageUrl})` }}
                >
                  <div className="z-10 absolute bottom-0 text-white text-center w-full bg-black/35 p-2 min-h-[60px]">
                    <h4 className="text-base lg:text-xl font-bold w-full">
                      {palestrante.nome}
                    </h4>

                  </div>
                </div>
              ))
            }
          </div>
        </TabsContent>
      </Tabs>

    </>

  )
}
