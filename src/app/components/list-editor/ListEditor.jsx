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
  const onAdd = item => {
    onChange([...data, item]);
    setEditIndex(defaultIndex);
  };
  const onEdit = (item, index) => {
    let dataArray = data.slice();
    dataArray[index] = item;
    onChange(dataArray);
    setEditIndex(defaultIndex);
  };

  const onDelete = (item, index) => {
    var newItem = item;
    newItem.splice(index, 1);
    onChange(newItem);
    setEditIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <EditorComponent
                onSubmit={item => onEdit(item, index)}
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
                      nospacing
                    >
                      <FontAwesomeIcon icon="pen" />
                    </Button>
                  </div>
                  <div className={styles.delete}>
                    <Button
                      type={ButtonType.Danger}
                      onClick={() => {
                        onDelete(data, index);
                      }}
                      compact
                      nospacing
                    >
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
            nospacing
          >
            <FontAwesomeIcon icon="plus" />
          </Button>
        </div>
      )}
    </div>
  );
};
