import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NumberInput.scss";

export const NumberInput = ({ label, value, name, onChange }) => {
  const input = React.createRef();

  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, sanitize(value));
  };

  const onIncrease = () => {
    input.current.focus();
    onChange(name, sanitize(value) + 1);
  };

  const onDecrease = () => {
    input.current.focus();
    const sanitizedValue = sanitize(value);
    onChange(name, sanitizedValue === 0 ? 0 : sanitizedValue - 1);
  };

  const sanitize = value => {
    const sanitizedValue = value.toString().replace(/\D+/g, "");
    return Number(sanitizedValue);
  };

  return (
    <div className="NumberInput">
      <input
        placeholder={label}
        value={value}
        name={name}
        ref={input}
        onChange={onChangeHandler}
      />
      <div className="NumberInput-controls">
        <div className="increase">
          <FontAwesomeIcon icon="angle-up" onClick={onIncrease} />
        </div>
        <div className="decrease">
          <FontAwesomeIcon icon="angle-down" onClick={onDecrease} />
        </div>
      </div>
    </div>
  );
};
