import React, { Component } from "react";
import { NumberInput } from "../../components/form/number-input/NumberInput";
import { TextInput } from "../../components/form/text-input/TextInput";
import { DropdownInput } from "../../components/form/dropdown-input/DropdownInput";
import styles from "./IngredientForm.module.scss";
import { Button } from "../../components/button/Button.jsx";

const UNITS = [
  { value: "", label: "" },
  { value: "teaspoon", label: "teaspoon" },
  { value: "tablespoon", label: "tablespoon" },
  { value: "cup", label: "cup" },
  { value: "ml", label: "ml" },
  { value: "l", label: "l" },
  { value: "dl", label: "dl" },
  { value: "mg", label: "mg" },
  { value: "g", label: "g" },
  { value: "kg", label: "kg" }
];

class IngredientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      amount: 0,
      unit: "",
      message: ""
    };

    this.changeState = this.changeState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitState = this.submitState.bind(this);
  }

  onChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.changeState(name, value);
  }

  changeState(name, value) {
    this.setState({ [name]: value });
  }

  submitState() {
    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.preview}>
          {this.state.name} {this.state.amount} {this.state.unit}
        </div>
        <div className={styles.form}>
          <TextInput label="Ingredient" name="name" onChange={this.changeState} value={this.state.name} />
          <NumberInput label="Amount" name="amount" value={this.state.amount} onChange={this.changeState} />
          <DropdownInput label="Unit" name="unit" value={this.state.unit} options={UNITS} onChange={this.changeState} />
          <Button onClick={this.submitState} text={"Add"} />
        </div>
      </div>
    );
  }
}

export default IngredientForm;
