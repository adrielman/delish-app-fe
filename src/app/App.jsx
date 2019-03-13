import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";

import Ingredients from "./recipe-form/Ingredients";
import RecipeWatch from "./recipe-watch/RecipeWatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <span>
              <Link to="/">Home</Link>
            </span>

            <span>
              <Link to="/">My Recipes</Link>
            </span>
            <span>
              <Link to="/AllRecipes">AllRecipes</Link>
            </span>
            <span>
              <Link to="/NewRecipe">New Recipe</Link>
            </span>
          </nav>
          <div className={styles.app}>
            <Route exact path="/" component={Home} />
            <Route path="/AllRecipes" component={AllRecipes} />
            <Route path="/NewRecipe" component={NewRecipe} />
          </div>
        </div>
      </Router>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function AllRecipes() {
  return (
    <div>
      <RecipeWatch />
    </div>
  );
}
function NewRecipe() {
  return (
    <div>
      <Ingredients />
    </div>
  );
}

export default App;
