import React from "react";
import "./index.css";

const Input = ({
  className,
  placeholder,
  onChange,
  variation,
  type,
  size,
  name,
  value,
}: {
  className?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
  variation?: string;
  type?: string;
  size?: string;
  name?: string;
  value?: string;
}) => {
  return (
    <input
      className={`search-bar ${className} ${variation} ${size}`}
      type={type}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      defaultValue={value}
    />
  );
};
export default Input;
