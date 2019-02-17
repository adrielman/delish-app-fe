import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DropdownInput.scss";

const DropdownInput = props => {
  const select = React.createRef();

  const onChange = event => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };

  const focusOnSelect = event => {
    select.current.focus();
  };

  return (
    <div className="DropdownInput">
      <select
        value={props.value}
        name={props.name}
        onChange={onChange}
        ref={select}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="DropdownInput-control">
        <FontAwesomeIcon
          icon="angle-down"
          className="decrease"
          onClick={focusOnSelect}
        />
      </div>
    </div>
  );
};

export default DropdownInput;
