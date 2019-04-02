import React from "react";
import { Recipe } from "./Recipe";
import "../components/masonry-layout/MasonryStandardStyle.css";

export const Recipes = ({ recipes, onSelect }) =>
  recipes.map((message, index) => (
    <div className="grid-item" key={index}>
      <Recipe onSelect={onSelect} index={index} recipe={message} />
    </div>
  ));
