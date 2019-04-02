import React from "react";
import { Recipe } from "./Recipe";
import "../components/masonry-layout/MasonryStandardStyle.css";

export const Recipes = ({ recipes, onSelect }) =>
  recipes.map((recipe, index) => (
    <div className="grid-item" key={index}>
      <Recipe onSelect={() => onSelect(recipe)} recipe={recipe} />
    </div>
  ));
