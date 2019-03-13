import React from "react";
import "./TextareaInput.scss";

export const TextareaInput = ({
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
        className="TextareaInput"
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
