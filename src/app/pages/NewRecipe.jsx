import React from "react";
import { RecipeEditor } from "../recipe-form/RecipeEditor";

import { postRecipe } from "../recipe-form/RecipeApi";

import { Layout } from "../components/layout/Layout";
export const NewRecipe = () => {
  const onSubmit = ({ title, image, directions, ingredients }) => {
    const date = new Date();

    const recipe = {
      name: title,
      description: "this.state.description",
      image: image,
      time: date.getTime(),
      servings: 100,
      link: "this.state.source",
      ingredients: ingredients,
      instructions: directions
    };
    postRecipe(recipe);
  };
  return (
    <Layout width={500}>
      <RecipeEditor onSubmit={onSubmit} />
    </Layout>
  );
};
