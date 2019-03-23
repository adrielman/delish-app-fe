import React from "react";
import styles from "./TextareaInput.module.scss";

export const TextareaInput = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  cols,
  rows
}) => {
  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <div className={styles.input}>
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChangeHandler}
        cols={cols}
        rows={rows}
      />
    </div>
  );
};
