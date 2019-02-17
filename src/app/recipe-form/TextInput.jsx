import React, { Component } from "react";
import "./TextInput.scss";

const TextInput = () => {
  const onChange = event => {
    const { name, value } = event.target;
    this.props.onChange(name, value);
  };

  return (
    <div className="TextInput">
      <input
        placeholder={this.props.label}
        value={this.props.value}
        name={this.props.name}
        onChange={this.onChange}
      />
    </div>
  );
};

export default TextInput;
