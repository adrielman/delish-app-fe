import React, { useState } from "react";
import { TextInput } from "../components/form/text-input/TextInput";
import { Button } from "../components/button/Button";
import { Directions } from "./Directions";
import { Ingredients } from "./ingredients/Ingredients";
import { ListEditor } from "../components/list-editor/ListEditor";
import { Ingredient } from "./ingredients/Ingredient";
import IngredientForm from "./ingredients/IngredientForm";

export const RecipeEditor = props => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [directions, setDirections] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const onSubmit = () => {
    props.onSubmit({
      title,
      image,
      directions
    });
  };

  return (
    <div>
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
        {/* <Ingredients data={ingredients} onChange={newIngredients => setIngredients(newIngredients)} />
        <Directions data={directions} onChange={newDirections => setDirections(newDirections)} /> */}
        <ListEditor
          displayComponent={Ingredient}
          editorComponent={IngredientForm}
          data={ingredients}
          title="ingredients"
          onChange={newIngredients => setIngredients(newIngredients)}
        />
        <Button onClick={onSubmit}>Save</Button>
      </form>
    </div>
  );
};