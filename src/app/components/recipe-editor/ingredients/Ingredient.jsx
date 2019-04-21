import React from "react";
import styles from "./Ingredient.module.scss";

export const Ingredient = ({ name, quantity, unit }) => (
  <div className={styles.ingredient}>
    <div className={styles.quantity}>{quantity}</div>
    <div className={styles.unit}>{unit}</div>
    <div className={styles.name}>{name}</div>
  </div>
);
