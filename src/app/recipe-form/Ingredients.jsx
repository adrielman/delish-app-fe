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

  onDelete(event) {
    event.preventDefault();
    console.log("Potato");
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
