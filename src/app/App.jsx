import React, { Component } from "react";
import "./App.scss";
import Ingredients from "./recipe-form/Ingredients";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ingredients />
      </div>
    );
  }
}

export default App;
