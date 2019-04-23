import React, { useState } from "react";
import { TextInput } from "../form/text-input/TextInput";
import { Button } from "../button/Button";
import { Direction } from "./directions/Direction";
import { ListEditor } from "../list-editor/ListEditor";
import { Ingredient } from "./ingredients/Ingredient";
import IngredientForm from "./ingredients/IngredientForm";
import DirectionForm from "./directions/DirectionForm";
import { NumberInput } from "../form/number-input/NumberInput";

export const RecipeEditor = ({ onSubmit, recipe = {} }) => {
  const [title, setTitle] = useState(recipe.title || "");
  const [image, setImage] = useState(recipe.image || "");
  const [directions, setDirections] = useState(recipe.directions || []);
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const [servings, setServings] = useState(recipe.servings || []);
  const [link, setLink] = useState(recipe.link || []);

  const onSubmitTriggered = () => {
    onSubmit({
      title,
      image,
      directions: directions.map(d => d.direction),
      ingredients,
      time: new Date().getTime(),
      servings,
      link
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
      <TextInput
        value={link}
        label="Link to main host"
        name="link"
        onChange={(name, value) => setLink(value)}
      />
      <NumberInput
        value={servings}
        lavel="Servings"
        name="servings"
        onChange={(name, value) => setServings(value)}
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
      <Button onClick={onSubmitTriggered}>Save</Button>
    </form>
  );
};
