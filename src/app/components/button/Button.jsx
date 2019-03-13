import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ onClick, text }) => {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <button className={styles.button} onClick={clickHandler}>
      {text}
    </button>
  );
};
