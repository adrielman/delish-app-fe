import React from "react";
import styles from "./TextareaInput.module.scss";

export const TextareaInput = ({
  id,
  name,
  placeholder,
  onChange,
  cols,
  rows
}) => {
  return (
    <div className={styles.input}>
      <textarea
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        cols={cols}
        rows={rows}
      />
    </div>
  );
};
