import React, { Fragment } from "react";
import { Button } from "../components/button/Button";
import { Image } from "../components/image/Image";
export const Recipe = ({ recipe, index, onSelect }) => (
  <div>
    <Image src={recipe.image} alt="not found this img" />
    <br />
    <Button
      onClick={() => {
        onSelect(index);
      }}
    >
      View Me
    </Button>
    {recipe.name}
  </div>
);
