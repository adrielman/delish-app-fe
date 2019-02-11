import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientsList";

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: []
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onSubmit(ingredient) {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] });
  }

  onDelete(index) {
    var newIngredients = this.state.ingredients;
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  }

  render() {
    return (
      <div className="IngredientsList">
        <IngredientsList
          ingredients={this.state.ingredients}
          onDelete={this.onDelete}
        />
        <IngredientForm
          className="IngredientsList-form"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
export default Ingredients;
