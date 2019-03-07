import React from "react";

const Recipe = ({ recipe, onDelete }) => <div>{recipe.message}</div>;

const Recipes = ({ recipes, onDelete }) =>
  recipes.map((message, index) => (
    <Recipe key={index} recipe={message} onDelete={onDelete} />
  ));
export default Recipes;
