import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = ({ children }) => <nav className={styles.navigation}>{children}</nav>;

export const Link = ({ to, exact, children }) => (
  <div className={styles.link}>
    <NavLink to={to} exact={exact} activeClassName={styles.selected}>
      {children}
    </NavLink>
  </div>
);
