import React, { Component } from "react";
import "./App.scss";
import Ingredients from "./recipe-form/Ingredients";

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
