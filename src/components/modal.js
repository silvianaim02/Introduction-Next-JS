import React from 'react';

const Modal = ({ children }) => {
  return (
    <div className="">
      <p className="bg-red-500">ini modal </p>
      {children}
    </div>
  );
};

export default Modal;
