import React, { Component } from "react";
import { NumberInput } from "../../components/form/number-input/NumberInput";
import { TextInput } from "../../components/form/text-input/TextInput";
import { DropdownInput } from "../../components/form/dropdown-input/DropdownInput";
import styles from "./IngredientForm.module.scss";
import { Button } from "../../components/button/Button.jsx";

const units = [
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
      name: props.name || "",
      amount: props.amount || 0,
      unit: props.unit || "",
      message: props.message || ""
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
      <div className={styles.form}>
        <div className={styles.amount}>
          <NumberInput
            label="Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.changeState}
            compact
            nospacing
          />
          <div className={styles.unit} />
          <DropdownInput
            label="Unit"
            name="unit"
            value={this.state.unit}
            options={units}
            onChange={this.changeState}
            compact
            nospacing
          />
        </div>
        <div className={styles.name}>
          <TextInput
            label="Ingredient"
            name="name"
            onChange={this.changeState}
            value={this.state.name}
            compact
            nospacing
          />
        </div>
        <div className={styles.submit}>
          <Button onClick={this.submitState} compact nospacing>
            Save
          </Button>
        </div>
      </div>
    );
  }
}

export default IngredientForm;
