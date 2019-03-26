import React, { Component } from "react";
import {
  getRecipes,
  deleteRecipe,
  updateRecipe
} from "./recipe-form/RecipeApi";

const { Provider, Consumer } = React.createContext();

class RecipeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    getRecipes().then(recipes => this.setState({ recipes }));
  }

  onUpdate = recipe => {
    updateRecipe(recipe).then(() => this.updateRecipeInState());
  };

  updateRecipeInState = recipe => {
    const recipes = [...this.state.recipes];
    const index = this.findRecipeIndex(recipe.id);
    recipes.splice(index, 1, recipe);
  };

  onDelete = id => {
    deleteRecipe(id).then(() => this.deleteRecipeInState());
  };

  deleteRecipeInState = id => {
    const recipes = [...this.state.recipes];
    const index = this.findRecipeIndex(id);
    recipes.splice(index, 1);
    this.setState(recipes);
  };

  findRecipeIndex = id => {
    const { recipes = [] } = this.state;
    return recipes.findIndex(recipe => recipe.id === id);
  };

  render() {
    return (
      <Provider
        value={{
          recipes: this.state.recipes,
          onUpdate: this.onUpdate,
          onDelete: this.onDelete
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { RecipeProvider, Consumer as RecipeConsumer };
