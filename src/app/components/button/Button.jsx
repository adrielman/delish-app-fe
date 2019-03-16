import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export const ButtonType = {
  Danger: "danger",
  Default: "default",
  Primary: "primary"
};

export const Button = ({
  onClick,
  children,
  compact = false,
  nospacing = false,
  type = ButtonType.Default,
  style
}) => {
  const clickHandler = event => {
    event.preventDefault();
    onClick();
  };
  let buttonStyle = classNames(styles.button, {
    [styles.compact]: compact,
    [styles.nospacing]: nospacing,
    [styles.danger]: type === ButtonType.Danger,
    [styles.default]: type === ButtonType.Default,
    [styles.primary]: type === ButtonType.Primary
  });
  return (
    <button className={buttonStyle} onClick={clickHandler} style={style}>
      {children}
    </button>
  );
};
