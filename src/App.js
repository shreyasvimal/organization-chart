import React, { useContext, useState, useCallback } from "react";
import OrgContext from "./store/org-context";
import OrganizationStructure from "./components/OrganizationStructure";
import Popup from "./components/Popup";
import MainHeader from "./components/MainHeader";

import classes from "./App.module.css";

const App = () => {
  //Global State and Actions
  const { state, actions } = useContext(OrgContext);
  // Setting a dummy state and forceUpdate to prevent rerender and a method to update on state change only.
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  //Flag to open add popup
  const [isOpen, setIsOpen] = useState(false);
  //Parent Id to add reportee
  const [parentId, setParentId] = useState({});
  //Handle Popup Close
  const handleClose = () => {
    setIsOpen(false);
  };
  const editPosition = (action, payload) => {
    if (action === "addPosition") {
      setParentId(payload);
      setIsOpen(true);
    } else {
      actions({ type: action, payload: payload });
      forceUpdate();
    }
  };
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <div className={`${classes.organizationStructure}`}>
        <OrganizationStructure data={state} editPosition={editPosition} />     
        {isOpen && (
          <Popup
            handleClose={handleClose}
            handleSave={editPosition}
            parentId={parentId}
          />
        )}
           
      </div>
    </>
  );
};
export default App;
