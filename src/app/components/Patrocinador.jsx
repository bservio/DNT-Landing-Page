import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

export default function Patrocinador() {
  return (
    <div className='w-full h-[80px] px-8 bg-[#ffff00] flex items-center justify-center '>
      <a href="https://wa.me/558631337070" className="flex items-center justify-center space-x-2 text-black hover:text-gray-600 transition-colors ease-in-out duration-500 font-bold">
        <p>Quero patrocinar o melhor congresso acadêmico do Piauí</p>
        <BsArrowUpRight className='text-black font-bold' />
      </a>
      
    </div>
  )
}
