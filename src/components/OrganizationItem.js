import React, { useState } from "react";

import TextInput from "./Input";
import ButtonComponent from "./Button";
import classes from "./Organization-Item.module.css";

const OrganizationItem = ({
  item,
  editPosition,
  editFlag,
  parentId,
  handleClose,
}) => {
  const [showEdit, setShowEdit] = useState(editFlag);
  const [name, setName] = useState(item.name);
  const [title, setTitle] = useState(item.title);
  const [startDate, setStartDate] = useState(item.startDate);
  const [error, setError] = useState("");
  
  const reset = () => {
    setName(item.name);
    setTitle(item.title);
    setStartDate(item.startDate);
  };
  const closeEdit = (type) => {
    reset();
    type === "cancel" ? setShowEdit(false) : handleClose();
  };
  const validate = () => {
    let invalidArray = [];
    if (name === "") invalidArray.push("Name");
    if (title === "") invalidArray.push("Title");
    invalidArray.length > 0
      ? setError(invalidArray.join(",") + " is required")
      : setError("");
    return invalidArray.length === 0;
  };
  
    const saveEdit = () => {
    if (validate()) {
      editPosition("edit", {
        id: item.id,
        name: name,
        title: title,
        startDate: startDate,
      });
      setShowEdit(false);
    }
  };
  const addUser = () => {
    if (validate()) {
      editPosition("add", {
        id: parentId,
        name: name,
        title: title,
        startDate: startDate,
      });
      handleClose();
    }
  };
  return (
    <div className={`${classes.card}`}>
      {showEdit ? (
        <div className={`${classes.cardbody}`}>
          <TextInput
            id="name"
            name="name"
            label="Name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
        
            
          />
          <TextInput
            id="title"
            name="title"
            label="Designation"
            defaultValue={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextInput
            id="startDate"
            name="startDate"
            label="Start Date"
            defaultValue={name}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p>{error}</p>     
        </div>
      ) : (
        <div className={`${classes.cardbody}`}>
          <h4>{name}</h4>
          <p>
            {title} {startDate ? ` - ${startDate}` : ""}
          </p>
        </div>
      )}
      <div className={`${classes.cardfooter}`}>
        {showEdit ? (
          <>
            {editFlag ? (
              <>
                <ButtonComponent onClick={() => addUser()}>Add</ButtonComponent>
                <ButtonComponent onClick={() => closeEdit("close")}>
                  Cancel
                </ButtonComponent>
              </>
            ) : (
              <>
                <ButtonComponent onClick={() => saveEdit()}>
                  Add
                </ButtonComponent>
                <ButtonComponent onClick={() => closeEdit("cancel")}>
                  Cancel
                </ButtonComponent>
              </>
            )}
          </>
        ) : (
          <>
            <ButtonComponent onClick={() => setShowEdit(true)}>
              Edit
            </ButtonComponent>

            {item.id !== 0 && (
              <>
                <ButtonComponent
                  onClick={() => editPosition("remove", { id: item.id })}
                >
                  Delete
                </ButtonComponent>
              </>
            )}

            <ButtonComponent
              onClick={() => editPosition("addPosition", item.id)}
            >
              Add
            </ButtonComponent>
          </>
        )}
      </div>
    </div>
  );
};
export default OrganizationItem;
