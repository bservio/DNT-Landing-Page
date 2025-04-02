import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[90%] lg:w-[800px] rounded-xl max-h-screen flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div
          className=" text-black bg-white p-4 rounded-3xl bg-opacity-90"
          // style={{
          //   background:
          //     "linear-gradient(189deg, rgba(0,38,77,1) 34%,  rgba(122,27,98,1) 97%)",
          // }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
