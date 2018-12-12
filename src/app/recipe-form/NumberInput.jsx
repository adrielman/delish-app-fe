import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NumberInput.scss";
class NumberInput extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();

    this.onChange = this.onChange.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onChange(event) {
    let { name, value } = event.target;
    value = value.replace(/\D+/g, "");
    this.props.onChange(name, Number(value));
  }

  onIncrease() {
    this.input.current.focus();
    this.props.onChange(this.props.name, Number(this.props.value) + 1);
  }
  onDecrease() {
    this.input.current.focus();
    let value = this.props.value === 0 ? 0 : Number(this.props.value) - 1;
    this.props.onChange(this.props.name, value);
  }
  render() {
    return (
      <div className="NumberInput">
        <input
          placeholder={this.props.label}
          value={this.props.value}
          name={this.props.name}
          ref={this.input}
          onChange={this.onChange}
        />
        <div className="NumberInput-controls">
          <FontAwesomeIcon
            icon="angle-up"
            className="increase"
            onClick={this.onIncrease}
          />
          <FontAwesomeIcon
            icon="angle-down"
            className="decrease"
            onClick={this.onDecrease}
          />
        </div>
      </div>
    );
  }
}

export default NumberInput;
