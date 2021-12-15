import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Org from "./components/Org";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import OrgProvider from "./store/orgProvider";
import OrgContext from "./store/org-context";

const Index = () => {
  const store = OrgProvider();
  return (
    <OrgContext.Provider value={store}>
      <App />
    </OrgContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
