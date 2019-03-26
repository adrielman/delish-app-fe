import React, { Fragment } from "react";
import { Button } from "../components/button/Button";

export const RecipeExpanded = ({ recipe, onEdit, onDelete, onClose }) => {
  return (
    <Fragment>
      <span>{recipe.name}</span>
      <span>
        <Button onClick={() => onClose()}>X</Button>
      </span>
      <br />
      <span>
        <img src={recipe.image} alt="not found img" />
      </span>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.amount} : {ingredient.name}
          </li>
        ))}
      </ul>

      <ul>
        {recipe.instructions.map((instriction, index) => (
          <li key={index}>{instriction.message}</li>
        ))}
      </ul>
      <span>Serving for {recipe.servings}</span>
      <br />
      <br />
      <span>{recipe.time}</span>
      <br />
      <a href={recipe.link} target="_blank" without rel="noopener noreferrer">
        Origin
      </a>
      {recipe.id}

      <Button onClick={() => onDelete(recipe._id)}>Delete</Button>
    </Fragment>
  );
};
