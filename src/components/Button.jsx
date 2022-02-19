import React from "react";

const Button = ({ text, href, onClick }) => {
  return (
    <button
      className="text-lg px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-slate-900"
      href={href}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
