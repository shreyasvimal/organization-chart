import React from "react";
import MainHeader from "./components/MainHeader";

import classes from "./App.module.css";
import { Organization } from "./components/organization/Organization";

const App = () => {
  
  return (
    <>
      <header>
        <MainHeader />
      </header>
      <div className={`${classes.organizationStructure}`}>
        <Organization />
      </div>
    </>
  );
};
export default App;
