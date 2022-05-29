import React from "react";

const Button = ({ text, href, onClick }) => {
  return (
    <button
      className="text-lg px-4 py-2 rounded-md bg-rose-500 text-white hover:bg-rose-600"
      href={href}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
