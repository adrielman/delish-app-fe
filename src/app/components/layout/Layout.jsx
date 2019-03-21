import React from "react";
import styles from "./Layout.module.scss";

export const Layout = ({ children, width }) => {
  return (
    <div style={{ width }} className={styles.layout}>
      {children}
    </div>
  );
};
