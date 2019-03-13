import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DropdownInput.module.scss";

export const DropdownInput = props => {
  const select = React.createRef();

  const onChange = event => {
    const { name, value } = event.target;
    props.onChange(name, value);
  };

  const focusOnSelect = event => {
    select.current.focus();
  };

  return (
    <div className={styles.input}>
      <select
        value={props.value}
        name={props.name}
        onChange={onChange}
        ref={select}
      >
        {props.options.map((option, index) => (
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
