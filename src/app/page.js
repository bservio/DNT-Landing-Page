// import HubSection from './components/HubSection'
import HeroSection from './components/HeroSection'
// import CarouselTest from './components/CarouselTest'
import PalestrantesSection from './components/PalestrantesSection'
import Footer from './components/Footer'
// import Patrocinador from './components/Patrocinador'
import React, { Suspense } from 'react'
import MapaEvento from './components/MapaEvento'
import Navbar from './components/Header'
import HubSec from './components/hub2'
import DoityInscricao from './components/DoityInscricao'
import SponsorsSection from './components/Sponsors'
// import InfoSection from './components/InfoSection'

export default function Home() {
  
  const InfoSection = React.lazy(() => import('./components/InfoSection'))
  const Carousel = React.lazy(() => import('./components/CarouselTest'))
  const Patrocinador = React.lazy(() => import('./components/Patrocinador'))

  return (
    <>
           
      <Navbar />
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
      <Footer />
    </>
  )
}
