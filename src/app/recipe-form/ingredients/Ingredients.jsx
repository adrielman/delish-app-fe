import React from "react";
import IngredientForm from "./IngredientForm";
import { Ingredient } from "./Ingredient";

export const Ingredients = ({ data, onChange }) => {
  const onAdd = ingredient => {
    onChange([...data, ingredient]);
  };

  const onDelete = index => {
    onChange(data.splice(index, 1));
  };

  return (
    <div>
      {data.map((ingredient, index) => (
        <Ingredient key={index} {...ingredient} />
      ))}
      <IngredientForm onSubmit={onAdd} />
    </div>
  );
};
