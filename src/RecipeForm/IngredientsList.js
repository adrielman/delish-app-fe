import React from "react";

const Ingredient = ({ ingredient }) => (
  <li>
    {ingredient.name} {ingredient.amount} {ingredient.type}{" "}
  </li>
);
const IngredientsList = ({ ingredients }) =>
  ingredients.map((ingredient, index) => (
    <Ingredient key={index} ingredient={ingredient} />
  ));

export default IngredientsList;
