import React from "react";
import { Recipe } from "./Recipe";

export const Recipes = ({ recipes, ViewMe }) =>
  recipes.map((message, index) => (
    <li key={index}>
      <Recipe ViewMe={ViewMe} index={index} recipe={message} />
    </li>
  ));
