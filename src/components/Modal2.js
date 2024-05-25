import React from 'react';

const Modal2 = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 overflow-auto bg-smoke-dark flex top-0 left-0 bottom-0 right-0 w-full h-full outline-none focus:outline-none justify-center items-center">
      <div className="relative w-auto mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={closeModal}
          >
            x
          </button>
          <div className="relative p-6 flex-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
