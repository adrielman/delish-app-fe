import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NumberInput.scss";
class NumberInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="NumberInput">
        <input
          name={this.props.name}
          type="number"
          onChange={this.props.onChange}
        />
        <div className="NumberInput-controls">
          <FontAwesomeIcon icon="angle-up" className="increase" />
          <FontAwesomeIcon icon="angle-down" className="decrease" />
        </div>
      </div>
    );
  }
}

export default NumberInput;
