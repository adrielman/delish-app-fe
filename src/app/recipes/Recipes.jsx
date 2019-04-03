import React from "react";
import { Recipe } from "./Recipe";
import styles from "./Recipes.module.scss";

export const Recipes = ({ recipes, onSelect }) => (
  <div className={styles.recipes}>
    {recipes.map((recipe, index) => (
      <article key={index} className={styles.item}>
        <Recipe onSelect={() => onSelect(recipe)} recipe={recipe} />
      </article>
    ))}
  </div>
);
