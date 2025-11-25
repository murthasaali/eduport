import React from 'react';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] relative">
        {title && (
          <h2 className="text-xl font-bold mb-4">{title}</h2>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg"
        >
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;