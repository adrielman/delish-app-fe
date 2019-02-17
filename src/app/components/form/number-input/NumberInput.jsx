import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NumberInput.scss";
export const NumberInput = props => {
  const input = React.createRef();

  const onChange = event => {
    let { name, value } = event.target;
    value = value.replace(/\D+/g, "");
    props.onChange(name, Number(value));
  };

  const onIncrease = () => {
    input.current.focus();
    props.onChange(props.name, Number(props.value) + 1);
  };
  const onDecrease = () => {
    input.current.focus();
    let value = props.value === 0 ? 0 : Number(props.value) - 1;
    props.onChange(props.name, value);
  };
  return (
    <div className="NumberInput">
      <input
        placeholder={props.label}
        value={props.value}
        name={props.name}
        ref={input}
        onChange={onChange}
      />
      <div className="NumberInput-controls">
        <FontAwesomeIcon
          icon="angle-up"
          className="increase"
          onClick={onIncrease}
        />
        <FontAwesomeIcon
          icon="angle-down"
          className="decrease"
          onClick={onDecrease}
        />
      </div>
    </div>
  );
};
