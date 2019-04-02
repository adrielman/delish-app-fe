import React from "react";
import styles from "./Image.module.scss";

export const Image = ({ src, alt }) =>
  src ? <img src={src} alt={alt} className={styles.image} /> : null;
