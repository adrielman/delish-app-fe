import React from "react";
import { Button } from "../components/button/Button";
import { TextInput } from "../components/form/text-input/TextInput";
import { TextareaInput } from "../components/form/textarea-input/TextareaInput";
import { NumberInput } from "../components/form/number-input/NumberInput";

const SettingsForm = props => {
  const onSubmit = () => {
    props.onSubmit();
  };
  const ChangeName = (name, value) => {
    props.ChangeName(value);
  };
  const ChangeSource = (name, value) => {
    props.ChangeSoure(value);
  };
  const ChangeDescription = (name, value) => {
    props.onDescription(value);
  };

  const onImgUrl = (name, value) => {
    props.onImgUrl(value);
  };

  const onServings = (name, value) => {
    props.onServings(value);
  };
  return (
    <form>
      <TextInput label="Name" name="name" onChange={ChangeName} />
      <TextInput label="Source" name="source" onChange={ChangeSource} />
      <TextInput label="ImageUrl" name="ImageUrl" onChange={onImgUrl} />
      <NumberInput
        value={props.value}
        label="NumberInput"
        name="Servings"
        onChange={onServings}
      />
      <TextareaInput
        label="TextArea"
        name="TextArea"
        onChange={ChangeDescription}
      />
      <Button text="Submit" onClick={() => onSubmit()} />
    </form>
  );
};

export default SettingsForm;
