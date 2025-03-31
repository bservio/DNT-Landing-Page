import React from 'react'

export default function Modal({ isOpen, onClose, children }) {
  if(!isOpen) return null

  const handleClose = (e) => {
    if(e.target.id === "wrapper") onClose()
  }
  return (
    <div className='z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
      <div className="w-[90%] lg:w-[900px] max-h-screen flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
        <div className="bg-white text-black p-2 rounded">
          {children}
        </div>
      </div>
    </div>
  )
}
