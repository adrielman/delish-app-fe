import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";

import { Navigation, Link } from "./components/navigation/Navigation";
import Ingredients from "./recipe-form/Ingredients";
import Recipes from "./recipes/Recipes";

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
            <Route exact path="/" component={Ingredients} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/new-recipe" component={Ingredients} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
