import React from "react";
import { RecipeEditor } from "../components/recipe-editor/RecipeEditor";
import { RecipeConsumer } from "../RecipeContext";
import { Layout } from "../components/layout/Layout";
export const RecipeEditorPage = ({ match }) => {
  const isNew = match.params.id === "new";
  return (
    <Layout width={500}>
      <RecipeConsumer>
        {({ onCreate, onUpdate, selectedRecipe }) =>
          isNew ? (
            <RecipeEditor onSubmit={onCreate} />
          ) : (
            <RecipeEditor recipe={selectedRecipe} onSubmit={onUpdate} />
          )
        }
      </RecipeConsumer>
    </Layout>
  );
};
