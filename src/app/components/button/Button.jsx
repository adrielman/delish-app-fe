import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ onClick, children, compact = false }) => {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  };
  let buttonStyle = classNames(styles.button, { [styles.compact]: compact });
  return (
    <button className={buttonStyle} onClick={clickHandler}>
      {children}
    </button>
  );
};
