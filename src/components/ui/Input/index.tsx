import React from "react";
import "./index.css";

const Input = ({
  className,
  placeholder,
  onChange,
  variation,
  type
}: {
  className: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  variation: string;
  type: string
}) => {
  return (
    <input
      className={`search-bar ${className} ${variation}`}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
export default Input;
