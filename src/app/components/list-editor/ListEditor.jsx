import React, { useState } from "react";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultIndex = -1;
const newItemIndex = -2;

export const ListEditor = ({
  displayComponent: DisplayComponent,
  editorComponent: EditorComponent,
  data,
  title,
  onChange
}) => {
  const [editIndex, setEditIndex] = useState(defaultIndex);
  const onAdd = ingredient => {
    onChange([...data, ingredient]);
  };
  const onEdit = (ingredient, index) => {
    let dataArray = data.slice();
    dataArray[index] = ingredient;
    onChange(dataArray);
  };

  return (
    <div>
      <div>{title}</div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <EditorComponent
                onSubmit={ingredient => onEdit(ingredient, index)}
                {...item}
              />
            ) : (
              <div>
                <DisplayComponent {...item} />
                <Button
                  text={<div> potato </div>}
                  onClick={() => {
                    setEditIndex(index);
                  }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      {editIndex === newItemIndex ? (
        <EditorComponent onSubmit={onAdd} />
      ) : (
        <Button
          onClick={() => {
            setEditIndex(newItemIndex);
          }}
        >
          +
        </Button>
      )}
    </div>
  );
};
