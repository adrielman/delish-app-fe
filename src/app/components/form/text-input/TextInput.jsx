import React from "react";
import styles from "./TextInput.module.scss";

export const TextInput = ({ label, value, name, onChange }) => {
  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className={styles.input}>
      <input
        placeholder={label}
        value={value}
        name={name}
        onChange={onChangeHandler}
      />
    </div>
  );
};
