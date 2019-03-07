import React from "react";
import "./TextAreaInput.scss";

export const TextAreaInput = ({
  id,
  name,
  placeholder,
  onChange,
  cols,
  rows
}) => {
  return (
    <div>
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
