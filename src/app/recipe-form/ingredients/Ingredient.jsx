import React from "react";
// import styles from "./Ingredient.module.scss";
export const Ingredient = ({ name, amount, unit }) => (
  <span>
    {name} {amount} {unit}
  </span>
);
