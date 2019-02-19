import React from 'react';
import './TextInput.scss';

export const TextInput = ({ label, value, name, onChange }) => {
  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="TextInput">
      <input
        placeholder={label}
        value={value}
        name={name}
        onChange={onChangeHandler}
      />
    </div>
  );
};
