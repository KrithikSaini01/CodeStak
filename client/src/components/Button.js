

import React from "react";

const Button = ({ text, onClick, type = "button", disabled = false, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg font-semibold transition-all 
                  ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}
                  ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;