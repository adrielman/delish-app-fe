import React, { Component } from "react";
import { Button } from "../components/button/Button";
import { deleteRecipe } from "../recipe-form/RecipeApi";
import { Recipes } from "../recipes/Recipes";
import { RecipeExpanded } from "../recipes/RecipeExpanded";
import Store, { onUpdate } from "../../store/store";

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = { toWatch: -1 };
    this.ViewMe = this.ViewMe.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  ViewMe(index) {
    this.setState({ toWatch: index });
  }
  onDelete(id) {
    deleteRecipe(id);
    this.ViewMe(-1);
    onUpdate();
  }
  render() {
    if (this.state.toWatch !== -1) {
      return (
        <Store.Consumer>
          {({ recipes, OnUpdate, error }) => (
            <div className="recipe-watch">
              <RecipeExpanded
                recipe={recipes[this.state.toWatch]}
                onEdit="potato"
                onDelete={this.onDelete}
                onClose={() => this.ViewMe(-1)}
              />
            </div>
          )}
        </Store.Consumer>
      );
    }
    return (
      <div className="recipe-watch">
        <Store.Consumer>
          {({ recipes, OnUpdate, error }) => (
            <ul>
              <Button onClick={OnUpdate}> OHNO</Button>
              {error == null ? (
                <div>oh no error!</div>
              ) : (
                <Recipes ViewMe={this.ViewMe} recipes={recipes} />
              )}
            </ul>
          )}
        </Store.Consumer>
      </div>
    );
  }
}

export default RecipePage;
