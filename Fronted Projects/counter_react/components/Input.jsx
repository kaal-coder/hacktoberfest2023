import React from "react";

const Input = ({ onChange, inputRef, value }) => {
  return (
    <input
      readOnly
      className="bg-transparent border-none font-bold text-xl text-center w-14 h-14"
      onChange={onChange}
      ref={inputRef}
      type="text"
      value={value}
    />
  );
};

export default Input;
