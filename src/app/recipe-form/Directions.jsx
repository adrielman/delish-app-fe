import React from "react";
// import { Button } from "../components/button/Button.jsx";
// import { TextareaInput } from "../components/form/textarea-input/TextareaInput";

export const Directions = ({ data, onChange }) => {
  return (
    <div>
      <ol>
        {data.map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ol>
      {/* <TextareaInput onChange={(name, value) => this.onChangeTextField} name="x" rows="2" /> */}
    </div>
  );
};
