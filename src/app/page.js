
import HeroSection from './components/HeroSection'
import PalestrantesSection from './components/PalestrantesSection'
import React, { Suspense } from 'react'
import MapaEvento from './components/MapaEvento'
import HubSec from './components/hub2'
import DoityInscricao from './components/DoityInscricao'
import SponsorsSection from './components/Sponsors'

export default function Home() {
  
  const InfoSection = React.lazy(() => import('./components/InfoSection'))
  const Carousel = React.lazy(() => import('./components/CarouselTest'))
  const Patrocinador = React.lazy(() => import('./components/Patrocinador'))

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading....</div>}>
        <PalestrantesSection /> 
        <InfoSection />
        <MapaEvento />
        <Carousel />
        <HubSec />
        <SponsorsSection /> 
        <Patrocinador />
      </Suspense>
      <DoityInscricao />
      
    </>
  )
}
