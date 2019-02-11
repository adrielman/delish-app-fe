import React from "react";
import Button from "../components/button/Button";

const Ingredient = ({ ingredient, onDelete }) => (
  <li>
    <span>
      {ingredient.name} {ingredient.amount} {ingredient.unit}
    </span>
    <span>
      <Button onClick={onDelete} text="Delete me" />
    </span>
  </li>
);

const IngredientsList = ({ ingredients, onDelete }) =>
  ingredients.map((ingredient, index) => (
    <Ingredient
      key={index}
      ingredient={ingredient}
      onDelete={() => {
        onDelete(index);
      }}
    />
  ));

export default IngredientsList;
