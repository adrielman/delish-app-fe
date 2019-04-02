import React from "react";
import { Recipe } from "./Recipe";
import "../components/masonry-layout/MasonryStandardStyle.css";
import { MasonryLayout } from "../components/masonry-layout/MasonryLayout";
import { MasonryItem } from "../components/masonry-layout/MasonryItem";

export const Recipes = ({ recipes, onSelect }) => (
  <MasonryLayout>
    {recipes.map((recipe, index) => (
      <MasonryItem key={index}>
        <Recipe onSelect={() => onSelect(recipe)} recipe={recipe} />
      </MasonryItem>
    ))}
  </MasonryLayout>
);
