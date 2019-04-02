import React from "react";
import { Image } from "../components/image/Image";

export const Recipe = ({ recipe, onSelect }) => (
  <div onClick={onSelect}>
    <Image src={recipe.image} alt={recipe.name} />
    <br />

    {recipe.name}
  </div>
);
