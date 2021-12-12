import React, { useState } from "react";

import classes from './Organization-Item.module.css'
const OrganizationItem = ({
  item,
  reporteeEdit,
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
    if (type === "cancel") {
      setShowEdit(false);
    } else {
      handleClose();
    }
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
      reporteeEdit("edit", {
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
      reporteeEdit("add", {
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
          <label>
            Name:
            <input
              id="name"
              type="text"
              name="name"
              defaultValue={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Title:
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Start Date:
            <input
              id="startDate"
              type="text"
              name="startDate"
              defaultValue={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
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
                <span onClick={() => addUser()}>Add </span>|
                <span onClick={() => closeEdit("close")}> Cancel</span> 
              </>
            ) : (
              <>
                <span onClick={() => saveEdit()}>Save </span>|
                <span onClick={() => closeEdit("cancel")}> Cancel</span> 
              </>
            )}
          </>
        ) : (
          <>
            <span onClick={() => setShowEdit(true)}>Edit </span>
            {item.id != 0 && (
              <>
                |
                <span onClick={() => reporteeEdit("remove", { id: item.id })}>
                  {" "}
                  Remove{" "}
                </span>
              </>
            )}
            |
            <span onClick={() => reporteeEdit("addReportee", item.id)}>
              {" "}
              Add Reportee{" "}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
export default OrganizationItem;
