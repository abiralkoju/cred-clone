import React from "react";
import "./button.css";

const Button = ({ prefix, buttonText, onClick, customClass }) => {
  return (
    <div
      className={`button-wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix} {buttonText}
    </div>
  );
};

export default Button;
