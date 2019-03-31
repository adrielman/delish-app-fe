import React, { useState } from "react";
import { TextInput } from "../components/form/text-input/TextInput";
import { Button } from "../components/button/Button";
import { Direction } from "./directions/directions";
import { ListEditor } from "../components/list-editor/ListEditor";
import { Ingredient } from "./ingredients/Ingredient";
import IngredientForm from "./ingredients/IngredientForm";
import DirectionForm from "./directions/DirectionForm";

export const RecipeEditor = props => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [directions, setDirections] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = () => {
    props.onSubmit({
      name: title,
      image,
      directions,
      ingredients
    });
  };

  return (
    <form>
      <TextInput
        value={title}
        label="Title"
        name="title"
        onChange={(name, value) => setTitle(value)}
      />
      <TextInput
        value={image}
        label="Image URL"
        name="image"
        onChange={(name, value) => setImage(value)}
      />
      <ListEditor
        displayComponent={Ingredient}
        editorComponent={IngredientForm}
        data={ingredients}
        title="ingredients"
        onChange={newIngredients => setIngredients(newIngredients)}
      />
      <ListEditor
        displayComponent={Direction}
        editorComponent={DirectionForm}
        data={directions}
        title="directions"
        onChange={newDirections => setDirections(newDirections)}
      />
      <Button onClick={onSubmit}>Save</Button>
    </form>
  );
};
