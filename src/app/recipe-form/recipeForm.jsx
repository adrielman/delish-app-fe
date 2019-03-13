import React, { Component } from "react";
import "./IngredientForm.scss";
import { Button } from "../components/button/Button.jsx";
import { TextareaInput } from "../components/form/textarea-input/TextareaInput";

class RecipeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };

    this.onChangeTextField = this.onChangeTextField.bind(this);
    this.onSubmitTextField = this.onSubmitTextField.bind(this);
  }

  onChangeTextField(event) {
    let value = event.target.value;
    this.setState({ message: value });
  }

  onSubmitTextField() {
    this.props.onAdd(this.state);
  }

  render() {
    return (
      <div className="Recipe-Form">
        <TextareaInput
          onChange={this.onChangeTextField}
          name="it's lit"
          cols="30"
          rows="10"
        />
        <div className="Recipe-Form-Button">
          <Button onClick={this.onSubmitTextField} text={"Add"} />
        </div>
      </div>
    );
  }
}
export default RecipeForm;
