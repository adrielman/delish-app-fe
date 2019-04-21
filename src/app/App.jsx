import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";
import { RecipeProvider } from "./RecipeContext";

import { Navigation, Link } from "./components/navigation/Navigation";
import { RecipesPage } from "./recipes/RecipesPage";
import { NewRecipe } from "./NewRecipe";

export const App = () => (
  <Router>
    <RecipeProvider>
      <Navigation>
        <Link to="/recipes" exact>
          Recipes
        </Link>
        <Link to="/new-recipe">New Recipe</Link>
      </Navigation>
      <div className={styles.app}>
        <Route exact path="/" component={NewRecipe} />
        <Route path="/new-recipe" component={NewRecipe} />
        <Route path="/recipes" component={RecipesPage} />
      </div>
    </RecipeProvider>
  </Router>
);

export default App;
