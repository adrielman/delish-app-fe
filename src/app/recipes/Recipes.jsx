import React, { Component } from "react";
import { Button } from "../components/button/Button";
import { deleteRecipe } from "../recipe-form/RecipeApi";

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = { recipes: [], isLoading: true, error: null, toWatch: -1 };
    this.ViewMe = this.ViewMe.bind(this);
  }

  ViewMe(index) {
    this.setState({ toWatch: index });
  }
  DeleteMe(id) {
    console.log(id);
    deleteRecipe(id);
    // fetch("https://delish-recipe-api.herokuapp.com/api/recipes/" + id, {
    //   method: "DELETE",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   redirect: "follow",
    //   referrer: "no-referrer"
    // }).then(response => {
    //   response.json();
    //   console.log(response);
    // });
  }
  render() {
    if (this.state.isLoading) {
      return <div className="recipe-watch">Loading ...</div>;
    }
    if (this.state.error != null) {
      return <div className="recipe-watch">oh no error!</div>;
    }
    if (this.state.recipes.length > 0) {
      if (this.state.toWatch !== -1) {
        return (
          <div className="recipe-watch">
            <span>{this.state.recipes[this.state.toWatch].name}</span>
            <span>
              <Button
                onClick={() => {
                  this.ViewMe(-1);
                }}
              >
                X
              </Button>
            </span>
            <br />
            <span>
              <img
                src={this.state.recipes[this.state.toWatch].image}
                alt="not found img"
              />
            </span>
            <ul>
              {this.state.recipes[this.state.toWatch].ingredients.map(
                (ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} : {ingredient.name}
                  </li>
                )
              )}
            </ul>

            <ul>
              {this.state.recipes[this.state.toWatch].instructions.map(
                (instriction, index) => (
                  <li key={index}>{instriction.message}</li>
                )
              )}
            </ul>
            <span>
              Serving for {this.state.recipes[this.state.toWatch].servings}
            </span>
            <br />
            <br />
            <span>{this.state.recipes[this.state.toWatch].time}</span>
            <br />
            <a
              href={this.state.recipes[this.state.toWatch].link}
              target="_blank"
              without
              rel="noopener noreferrer"
            >
              Origin
            </a>
          </div>
        );
      }
      return (
        <div className="recipe-watch">
          <ul>
            {this.state.recipes.map((recipe, index) => (
              <li key={index}>
                <Button
                  onClick={() => {
                    this.ViewMe(index);
                  }}
                >
                  Watch
                </Button>
                {recipe.name} <br />
                <img src={recipe.image} alt="not found this img" />
                <Button
                  onClick={() => {
                    this.DeleteMe(recipe._id);
                  }}
                >
                  Watch
                </Button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <div className="recipe-watch">No Content</div>;
  }

  componentDidMount() {
    fetch("https://delish-recipe-api.herokuapp.com/api/recipes")
      .then(response => response.json())
      .then(data => this.setState({ recipes: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }
}

export default Recipes;
