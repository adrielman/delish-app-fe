import React, { Component } from "react";
import { Recipes } from "./Recipes";
import { RecipeExpanded } from "./RecipeExpanded";
import { RecipeConsumer } from "../RecipeContext";
const NONE = null;
export class RecipesPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRecipe: NONE };
  }

  closeRecipe() {
    this.setState({ selectedRecipe: NONE });
  }

  selectRecipe = recipe => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const { selectedRecipe } = this.state;
    const isRecipeSelected = !!selectedRecipe;
    if (isRecipeSelected) {
      console.log("SELECTED RECIPE", selectedRecipe);
    }

    return (
      <RecipeConsumer>
        {({ recipes, onEdit, onDelete }) =>
          isRecipeSelected ? (
            <RecipeExpanded
              recipe={selectedRecipe}
              onEdit={onEdit}
              onDelete={() => {
                onDelete(selectedRecipe._id);
                this.closeRecipe();
              }}
              onClose={() => this.closeRecipe()}
            />
          ) : (
            <Recipes onSelect={this.selectRecipe} recipes={recipes} />
          )
        }
      </RecipeConsumer>
    );
  }
}
