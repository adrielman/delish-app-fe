import React, { Component } from "react";
import "./App.css";
import Ingredients from "./RecipeForm/Ingredients";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Ingredients />
        </header>
      </div>
    );
  }
}

export default App;
