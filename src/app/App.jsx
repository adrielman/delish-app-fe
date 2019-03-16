import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";

import { Navigation, Link } from "./components/navigation/Navigation";
import Recipes from "./recipes/Recipes";
import { RecipeEditor } from "./recipe-form/RecipeEditor";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation>
            <Link to="/recipes" exact>
              Recipes
            </Link>
            <Link to="/new-recipe">New Recipe</Link>
          </Navigation>
          <div className={styles.app}>
            <Route exact path="/" component={RecipeEditor} />
            <Route path="/new-recipe" component={RecipeEditor} />
            <Route path="/recipes" component={Recipes} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
