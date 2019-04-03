import React from "react";
import { Image } from "../components/image/Image";
import styles from "./Recipe.module.scss";

export const Recipe = ({ recipe, onSelect }) => (
  <div className={styles.recipe} onClick={onSelect}>
    <Image src={recipe.image} alt={recipe.name} />
    <div className={styles.detail}>
      <h2>{recipe.title}</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  </div>
);
