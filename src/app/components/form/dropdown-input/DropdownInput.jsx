import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DropdownInput.module.scss";

export const DropdownInput = ({
  value,
  name,
  options,
  onChange,
  compact,
  nospacing
}) => {
  const select = React.createRef();

  const onChangeHandler = event => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const focusOnSelect = event => {
    select.current.focus();
  };

  const inputStyle = classNames(styles.input, {
    [styles.compact]: compact,
    [styles.nospacing]: nospacing
  });

  return (
    <div className={inputStyle}>
      <select value={value} name={name} onChange={onChangeHandler} ref={select}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles.control}>
        <FontAwesomeIcon
          icon="angle-down"
          className="decrease"
          onClick={focusOnSelect}
        />
      </div>
    </div>
  );
};
