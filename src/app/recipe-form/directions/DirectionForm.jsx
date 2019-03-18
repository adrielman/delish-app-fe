import React, { Component } from "react";
import { TextInput } from "../../components/form/text-input/TextInput";
import { TextareaInput } from "../../components/form/textarea-input/TextareaInput";
import styles from "./DirectionForm.module.scss";
import { Button } from "../../components/button/Button.jsx";

class IngredientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || ""
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
        <div className={styles.name}>
          <TextareaInput
            label="Direction"
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
