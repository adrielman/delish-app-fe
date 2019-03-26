import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import "./Icons";
import Store, { onUpdate } from "../store/store";

import { Navigation, Link } from "./components/navigation/Navigation";
import RecipePage from "./recipes/RecipePage";
import { NewRecipe } from "./pages/NewRecipe";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState([]);

  const Update = () => {
    onUpdate(setRecipes);
  };
  Update();

  return (
    <Router>
      <Store.Provider
        value={{ recipes: recipes, OnUpdate: Update, error: error }}
      >
        <Navigation>
          <Link to="/recipes" exact>
            Recipes
          </Link>
          <Link to="/new-recipe">New Recipe</Link>
        </Navigation>
        <div className={styles.app}>
          <Route exact path="/" component={NewRecipe} />
          <Route path="/new-recipe" component={NewRecipe} />
          <Route path="/recipes" component={RecipePage} />
        </div>
      </Store.Provider>
    </Router>
  );
};

export default App;
