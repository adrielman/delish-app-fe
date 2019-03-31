import React from "react";
import { Recipe } from "./Recipe";

export const Recipes = ({ recipes, onSelect }) =>
  recipes.map((message, index) => (
    <div class="grid-item" key={index}>
      <Recipe onSelect={onSelect} index={index} recipe={message} />
    </div>
  ));
