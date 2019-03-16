import React, { Fragment, useState } from "react";
import { Button, ButtonType } from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ListEditor.module.scss";

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
    setEditIndex(defaultIndex);
  };
  const onEdit = (ingredient, index) => {
    let dataArray = data.slice();
    dataArray[index] = ingredient;
    onChange(dataArray);
    setEditIndex(defaultIndex);
  };

  const onDelete = (ingredient, index) => {
    setEditIndex(defaultIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <EditorComponent
                onSubmit={ingredient => onEdit(ingredient, index)}
                {...item}
              />
            ) : (
              <Fragment>
                <DisplayComponent {...item} />
                <div className={styles.actions}>
                  <div className={styles.edit}>
                    <Button
                      onClick={() => {
                        setEditIndex(index);
                      }}
                      compact
                      nospacing>
                      <FontAwesomeIcon icon="pen" />
                    </Button>
                  </div>
                  <div className={styles.delete}>
                    <Button
                      type={ButtonType.Danger}
                      onClick={() => {
                        onDelete(index);
                      }}
                      compact
                      nospacing>
                      <FontAwesomeIcon icon="times" />
                    </Button>
                  </div>
                </div>
              </Fragment>
            )}
          </li>
        ))}
      </ul>

      {editIndex === newItemIndex ? (
        <EditorComponent onSubmit={onAdd} />
      ) : (
        <div className={styles.add}>
          <Button
            type={ButtonType.Primary}
            onClick={() => {
              setEditIndex(newItemIndex);
            }}
            compact
            nospacing>
            <FontAwesomeIcon icon="plus" />
          </Button>
        </div>
      )}
    </div>
  );
};
