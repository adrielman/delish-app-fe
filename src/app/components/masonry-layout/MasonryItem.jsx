import React from "react";
import styles from "./MasonryLayout.module.scss";

export const MasonryItem = ({ children }) => (
  <div className={styles.item}>{children}</div>
);
