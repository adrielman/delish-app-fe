import React, { Component } from "react";
import { Recipes } from "./Recipes";
import { RecipeExpanded } from "../recipes/RecipeExpanded";
import { RecipeConsumer } from "../RecipeContext";
import { MasonryLayout } from "../components/masonry-layout/MasonryLayout";
const NONE = -1;
class RecipePage extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedRecipe: NONE };
  }

  closeRecipe() {
    this.setState({ selectedRecipe: NONE });
  }

  selectRecipe = index => {
    this.setState({ selectedRecipe: index });
  };

  render() {
    const isSelection = this.state.selectedRecipe !== NONE;
    return (
      <RecipeConsumer>
        {({ recipes, onEdit, onDelete }) => (
          <MasonryLayout>
            {isSelection ? (
              <RecipeExpanded
                recipe={recipes[this.state.selectedRecipe]}
                onEdit={onEdit}
                onDelete={() => {
                  onDelete();
                  this.closeRecipe();
                }}
                onClose={() => this.closeRecipe()}
              />
            ) : (
              <Recipes onSelect={this.selectRecipe} recipes={recipes} />
            )}
          </MasonryLayout>
        )}
      </RecipeConsumer>
    );
  }
}

export default RecipePage;
