import React from "react";
import { RecipeEditor } from "../components/recipe-editor/RecipeEditor";
import { RecipeConsumer } from "../RecipeContext";
import { Layout } from "../components/layout/Layout";
export const RecipeEditorPage = ({ match,history }) => {

  
  const isNew = match.params.id === "new";

  const onSubmit = (updateRecipeConsumer,recipe) =>{
    updateRecipeConsumer(recipe);
    history.push('/');
  }
  
  return (
    <Layout width={500}>
      <RecipeConsumer>
        {({ onCreate, onUpdate, selectedRecipe }) =>
          isNew ? (
            <RecipeEditor onSubmit={recipe => onSubmit(onCreate,recipe)} />
          ) : (
            <RecipeEditor recipe={selectedRecipe} onSubmit={recipe => onSubmit(onUpdate,recipe)} />
          )
        }
      </RecipeConsumer>
    </Layout>
  );
};
