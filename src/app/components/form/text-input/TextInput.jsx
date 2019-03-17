import React from "react";
import classNames from "classnames";
import styles from "./TextInput.module.scss";

export const TextInput = ({
  label,
  value,
  name,
  onChange,
  compact,
  nospacing
}) => {
  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const inputStyle = classNames(styles.input, {
    [styles.compact]: compact,
    [styles.nospacing]: nospacing
  });

  return (
    <div className={inputStyle}>
      <input
        placeholder={label}
        value={value}
        name={name}
        onChange={onChangeHandler}
      />
    </div>
  );
};
