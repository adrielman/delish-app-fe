import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => (
  <nav className={styles.navigation}>
    <div className={styles.link}>
      <NavLink to="/" exact activeClassName={styles.selected}>
        Recipes
      </NavLink>
    </div>
    <div className={styles.link}>
      <NavLink to="/new-recipe" activeClassName={styles.selected}>
        New Recipe
      </NavLink>
    </div>
  </nav>
);
