import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";

import { Navigation } from "./components/navigation/Navigation";
import Ingredients from "./recipe-form/Ingredients";
import RecipeWatch from "./recipe-watch/RecipeWatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div className={styles.app}>
            <Route exact path="/" component={NewRecipe} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/new-recipe" component={NewRecipe} />
          </div>
        </div>
      </Router>
    );
  }
}

function Recipes() {
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
