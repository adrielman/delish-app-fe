import React, { Component } from "react";
import "./TextInput.scss";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let { name, value } = event.target;
    this.props.onChange(name, value);
  }

  render() {
    return (
      <div className="TextInput">
        <input
          value={this.props.value}
          name={this.props.name}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default TextInput;
