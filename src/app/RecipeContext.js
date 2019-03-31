import React, { Component } from "react";
import {
  getRecipes,
  deleteRecipe,
  updateRecipe,
  createRecipe
} from "./RecipeApi";

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

  onCreate = recipe => {
    createRecipe(recipe).then(() => this.createRecipeInState());
  };

  onUpdate = recipe => {
    updateRecipe(recipe).then(() => this.updateRecipeInState());
  };

  onDelete = id => {
    deleteRecipe(id).then(() => this.deleteRecipeInState());
  };

  createRecipeInState = recipe => {
    const recipes = [...this.state.recipes, recipe];
    this.setState({ recipes });
  };

  updateRecipeInState = recipe => {
    const recipes = [...this.state.recipes];
    const index = this.findRecipeIndex(recipe.id);
    recipes.splice(index, 1, recipe);
    this.setState({ recipes });
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
