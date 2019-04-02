import React from "react";
import { Recipe } from "./Recipe";
import "../components/masonry-layout/MasonryStandardStyle.css";
import { MasonryLayout } from "../components/masonry-layout/MasonryLayout";

export const Recipes = ({ recipes, onSelect }) => (
  <MasonryLayout>
    {recipes.map((recipe, index) => (
      <div className="grid-item" key={index}>
        <Recipe onSelect={() => onSelect(recipe)} recipe={recipe} />
      </div>
    ))}
  </MasonryLayout>
);
