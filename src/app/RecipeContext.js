import React, { Component } from "react";
import Api from "./RecipeApi";

const { Provider, Consumer } = React.createContext();

class RecipeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    Api.getRecipes().then(recipes => this.setState({ recipes }));
  }

  onCreate = recipe => {
    Api.createRecipe(recipe).then(() => {
      const recipes = [...this.state.recipes, recipe];
      this.setState({ recipes });
    });
  };

  onUpdate = recipe => {
    Api.updateRecipe(recipe).then(() => {
      const recipes = [...this.state.recipes];
      const index = this.findRecipeIndex(recipe.id);
      recipes.splice(index, 1, recipe);
      this.setState({ recipes });
    });
  };

  onDelete = id => {
    Api.deleteRecipe(id).then(() => {
      const recipes = [...this.state.recipes];
      const index = this.findRecipeIndex(id);
      recipes.splice(index, 1);
      this.setState(recipes);
    });
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
          onCreate: this.onCreate,
          onUpdate: this.onUpdate,
          onDelete: this.onDelete
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { RecipeProvider, Consumer as RecipeConsumer };
