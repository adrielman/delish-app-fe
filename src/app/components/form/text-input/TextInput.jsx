import React from "react";
import "./TextInput.scss";

export const TextInput = props => {
  const onChange = event => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };

  return (
    <div className="TextInput">
      <input
        placeholder={props.label}
        value={props.value}
        name={props.name}
        onChange={onChange}
      />
    </div>
  );
};
