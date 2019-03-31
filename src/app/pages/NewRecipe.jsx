import React from "react";
import { RecipeEditor } from "../recipe-form/RecipeEditor";
import { RecipeConsumer } from "../RecipeContext";
import { Layout } from "../components/layout/Layout";
export const NewRecipe = () => {
  return (
    <Layout width={500}>
      <RecipeConsumer>
        {({ onCreate }) => <RecipeEditor onSubmit={onCreate} />}
      </RecipeConsumer>
    </Layout>
  );
};
