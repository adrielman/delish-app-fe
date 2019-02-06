import React from "react";

const Ingredient = ({ ingredient, onDelete }) => (
  <li>
    <span>
      {ingredient.name} {ingredient.amount} {ingredient.unit}
    </span>
    <span>
      <button onClick={() => onDelete()}>Delete me</button>
    </span>
  </li>
);

const IngredientsList = ({ ingredients }) =>
  ingredients.map((ingredient, index) => (
    <Ingredient key={index} ingredient={ingredient} />
  ));

export default IngredientsList;
