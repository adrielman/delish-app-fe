import React, { Component } from "react";
import IngredientForm from "./IngredientForm";
import IngredientsList from "./IngredientsList";
import RecipeForm from "./recipeForm";
import Recipes from "./recipes";
import { Button } from "../components/button/Button";
import RecipeSettingsForm from "./recipeSettingsForm";

class Ingredients extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      recipes: [],
      ready: false,
      name: "",
      source: "",
      imgUrl: "",
      description: "",
      servings: 0
    };
    this.onAddIngredient = this.onAddIngredient.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAddInstruction = this.onAddInstruction.bind(this);
    this.onAddRecipe = this.onAddRecipe.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onImgUrl = this.onImgUrl.bind(this);
    this.onDescription = this.onDescription.bind(this);
    this.onServings = this.onServings.bind(this);
  }

  onImgUrl(text) {
    this.setState({ imgUrl: text });
  }

  onDescription(text) {
    this.setState({ description: text });
  }

  onServings(text) {
    this.setState({ servings: text });
  }
  onAddIngredient(ingredient) {
    this.setState({ ingredients: [...this.state.ingredients, ingredient] });
  }

  onAddRecipe() {
    if (
      this.state.recipes.length !== 0 &&
      this.state.ingredients.length !== 0
    ) {
      this.setState({ ready: true });
    }
  }

  onDelete(index) {
    var newIngredients = this.state.ingredients;
    newIngredients.splice(index, 1);
    this.setState({ ingredients: newIngredients });
  }
  onAddInstruction(recipe) {
    this.setState({ recipes: [...this.state.recipes, recipe] });
  }

  onSubmit() {
    let date = new Date();

    let output = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.imgUrl,
      time: date.getTime(),
      servings: this.state.servings,
      link: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.recipes
    };
    fetch("https://delish-recipe-api.herokuapp.com/api/recipes", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(output)
    }).then(response => response.json()); // parses response to JSON

    console.log(JSON.stringify(output));
  }
  onChangeName(text) {
    this.setState({ name: text });
  }

  onChangeSource(text) {
    this.setState({ source: text });
  }

  render() {
    if (this.state.ready) {
      return (
        <RecipeSettingsForm
          ChangeName={this.onChangeName}
          value={this.state.servings}
          ChangeSoure={this.onChangeSource}
          onDescription={this.onDescription}
          onSubmit={this.onSubmit}
          onImgUrl={this.onImgUrl}
          onServings={this.onServings}
        />
      );
    }
    return (
      <div className="IngredientsList">
        <IngredientsList
          ingredients={this.state.ingredients}
          onDelete={this.onDelete}
        />
        <IngredientForm
          className="IngredientsList-form"
          onSubmit={this.onAddIngredient}
        />
        <RecipeForm onAdd={this.onAddInstruction} />
        <Recipes recipes={this.state.recipes} onDelete="potato" />
        <Button text="Push" onClick={this.onAddRecipe} />
      </div>
    );
  }
}
export default Ingredients;
