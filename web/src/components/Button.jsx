import React from 'react';

const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;