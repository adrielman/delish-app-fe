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
  }
  onSubmit(ingredient) {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] });
  }
  render() {
    return (
      <div className="IngredientsList">
        <IngredientsList ingredients={this.state.ingredients} />
        <IngredientForm
          className="IngredientsList-form"
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}
export default Ingredients;
