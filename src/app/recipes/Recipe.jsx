import React, { Fragment } from "react";
import { Button } from "../components/button/Button";

export const Recipe = ({ recipe, index, onSelect }) => (
  <Fragment>
    <Button
      onClick={() => {
        onSelect(index);
      }}>
      View Me
    </Button>
    {recipe.name} <br />
    <img src={recipe.image} alt="not found this img" />
  </Fragment>
);
