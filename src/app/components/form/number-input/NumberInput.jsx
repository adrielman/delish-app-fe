import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NumberInput.module.scss";

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
    <div className={styles.input}>
      <input
        placeholder={label}
        value={value}
        name={name}
        ref={input}
        onChange={onChangeHandler}
      />
      <div className={styles.controls}>
        <div className={styles.increase}>
          <FontAwesomeIcon icon="angle-up" onClick={onIncrease} />
        </div>
        <div className={styles.decrease}>
          <FontAwesomeIcon icon="angle-down" onClick={onDecrease} />
        </div>
      </div>
    </div>
  );
};
