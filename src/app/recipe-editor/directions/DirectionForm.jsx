import React, { Component } from "react";
import { TextareaInput } from "../../components/form/textarea-input/TextareaInput";
import styles from "./DirectionForm.module.scss";
import { Button } from "../../components/button/Button.jsx";

class DirectionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: props.direction || ""
    };
  }

  onChange = (name, value) => {
    this.setState({ direction: value });
  };

  submitState = () => {
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className={styles.form}>
        <div className={styles.name}>
          <TextareaInput
            label="Direction"
            name="direction"
            onChange={this.onChange}
            value={this.state.direction}
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

export default DirectionForm;
