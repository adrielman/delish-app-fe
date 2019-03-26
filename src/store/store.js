import React from "react";
import { getRecipes } from "../app/recipe-form/RecipeApi";

const Context = React.createContext();

export const onUpdate = setRecipes =>
  getRecipes().then(data => setRecipes(data));

export default Context;
