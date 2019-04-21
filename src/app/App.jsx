import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";
import { RecipeProvider } from "./RecipeContext";

import { Navigation, Link } from "./components/navigation/Navigation";
import { RecipesPage } from "./recipes/RecipesPage";
import { RecipeEditorPage } from "./recipes/RecipeEditorPage";

export const App = () => (
  <Router>
    <RecipeProvider>
      <Navigation>
        <Link to="/recipes" exact>
          Recipes
        </Link>
        <Link to="/recipes/new">New Recipe</Link>
      </Navigation>
      <div className={styles.app}>
        <Route exact path="/" component={RecipesPage} />
        <Route exact path="/recipes" component={RecipesPage} />
        <Route path="/recipes/:id" component={RecipeEditorPage} />
      </div>
    </RecipeProvider>
  </Router>
);

export default App;
