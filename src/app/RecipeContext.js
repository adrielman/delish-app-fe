import React, { Component } from "react";
import Api from "./RecipeApi";

const { Provider, Consumer } = React.createContext();

class RecipeProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      selectedRecipe: null
    };
  }
  onSelect = selectedRecipe => {
    this.setState({ selectedRecipe });
  };

  componentDidMount() {
    Api.getRecipes().then(recipes => this.setState({ recipes }));
  }

  onCreate = recipe => {
    Api.createRecipe(recipe).then(id => {
      const recipeWithId = {
        ...recipe,
        id
      };
      const recipes = [recipeWithId, ...this.state.recipes];
      this.setState({ recipes });
    });
  };
  onClose = () => {
    this.setState({ selectedRecipe: null });
  };

  onUpdate = recipe => {
    const { id } = this.state.selectedRecipe;
    Api.updateRecipe({ ...recipe, id }).then(() => {
      const recipes = [...this.state.recipes];
      const index = this.findRecipeIndex(id);
      recipes.splice(index, 1, recipe);
      this.setState({ recipes });
    });
  };

  onDelete = () => {
    const { id } = this.state.selectedRecipe;
    Api.deleteRecipe(id).then(() => {
      const recipes = [...this.state.recipes];
      const index = this.findRecipeIndex(id);
      recipes.splice(index, 1);
      this.setState({ recipes });
      this.onClose();
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
          selectedRecipe: this.state.selectedRecipe,
          onCreate: this.onCreate,
          onUpdate: this.onUpdate,
          onDelete: this.onDelete,
          onSelect: this.onSelect,
          onClose: this.onClose
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { RecipeProvider, Consumer as RecipeConsumer };
