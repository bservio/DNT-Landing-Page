"use client"
import React, { Fragment, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Modal from './Modal'



export default function CardPalestrante({ className = '', palestrante, ...restProps }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <Fragment>
      <div
        className={twMerge('w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] relative cursor-pointer rounded-lg', className)} {...restProps}
        onClick={() => setShowModal(true)}
      >
        <div
          className="rounded-lg w-full h-full relative bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url("${palestrante.imageUrl}")` }}
        >

        </div>
        <div className="hidden min-h-[90px] md:block absolute bottom-0 text-white text-center w-full bg-black/50 p-2">
          <h4 className="text-xl font-bold w-full">
            {palestrante.nome}
          </h4>
          <p className='text-sm'>{palestrante.shortBio}</p>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className='flex items-center'>
          <div
            className='h-[300px] w-[200px] bg-cover bg-no-repeat bg-center rounded shrink-0 hidden lg:block'
            style={{ backgroundImage: `url(${palestrante.imageUrl})` }}
          ></div>
          <div className='flex flex-col gap-4 px-4 py-8'>
            <h1 className='text-xl lg:text-2xl font-semibold'>{palestrante.nome}</h1>
            <p className='text-sm italic'>{palestrante.shortBio}</p>
            <p className='text-justify'>{palestrante.fullBio}</p>
            <p className='text-sm italic'><a target='blank' href={palestrante.curriculo}>Clique e acesse o Currículo Completo</a></p>
          </div>
        </div>

      </Modal>
    </Fragment>
  )
}
