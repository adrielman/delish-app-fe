import React from "react";
import { Recipes } from "./Recipes";
import { RecipeExpanded } from "./RecipeExpanded";
import { RecipeConsumer } from "../RecipeContext";

export const RecipesPage = () => {
  return (
    <RecipeConsumer>
      {({ recipes, selectedRecipe, onEdit, onDelete, onClose, onSelect }) =>
        !!selectedRecipe ? (
          <RecipeExpanded
            recipe={selectedRecipe}
            onEdit={onEdit}
            onDelete={onDelete}
            onClose={onClose}
          />
        ) : (
          <Recipes onSelect={onSelect} recipes={recipes} />
        )
      }
    </RecipeConsumer>
  );
};
