import React from "react";
import style from "./Button.module.scss";

const Button = ({ onClick, text }) => {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <button className={style.button} onClick={clickHandler}>
      {text}
    </button>
  );
};

export default Button;
