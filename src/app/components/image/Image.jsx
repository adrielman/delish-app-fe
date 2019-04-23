import React from "react";
import styles from "./Image.module.scss";

export const Image = ({ src, alt }) => {
  const handleError = event => {
    event.target.classList.add(styles.hidden);
  };
  return (
    <img src={src} alt={alt} className={styles.image} onError={handleError} />
  );
};
