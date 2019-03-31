import React from "react";
import styles from "./Image.module.scss";

export const Image = ({ src, alt }) => {
  if (src === "") src = "https://i.ytimg.com/vi/WRJ-1O-mjKg/maxresdefault.jpg";
  return <img src={src} alt={alt} className={styles.image} />;
};
