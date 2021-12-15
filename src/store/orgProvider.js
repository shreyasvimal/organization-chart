import { useState } from "react";
import data from "./data.json";
const OrgProvider = () => {






  const [state, setState] = useState(data);
  const getNodeStructure = (node, nodeId) => {
    if (node.id == nodeId) {
      return node;
    } else if (node.children != null) {
      let result = null;
      for (let i = 0; result == null && i < node.children.length; i++) {
        result = getNodeStructure(node.children[i], nodeId);
      }
      return result;
    }
    return null;
  };
  const editEmployee = (payload) => {
    let employeeStack = state;
    let reporter = getNodeStructure(employeeStack[0], payload.id);
    reporter.title = payload.title;
    reporter.name = payload.name;
    reporter.startDate = payload.startDate;
    return setState(employeeStack);
  };
  const getPath = (node, target) => {
    let result;
    node.some(({ id, children = [] }) => {
      if (id === target) return (result = id);
      let temp = getPath(children, target);
      if (temp) return (result = id + "." + temp);
    });
    return result;
  };
  const deleteEmployee = (payload) => {
    let employeeStack = state;
    let pathToNode = getPath(employeeStack, payload.id).split(".");
    let parentId = pathToNode[pathToNode.length - 2];
    let reporter = getNodeStructure(employeeStack[0], payload.id);
    let parent = getNodeStructure(employeeStack[0], parentId);
    if (reporter.children != null) {
      parent.children = [...parent.children, ...reporter.children];
    }
    parent.children = parent.children.filter((item) => item.id !== payload.id);
    return setState(employeeStack);
  };
  const addPosition = (payload) => {
    let employeeStack = state;
    let reporter = getNodeStructure(employeeStack[0], payload.id);
    if (!reporter.children) {
      reporter.children = [];
    }
    reporter.children.push({
      id: reporter.id + "-" + reporter.children.length,
      title: payload.title,
      startDate: payload.startDate,
      name: payload.name,
    });
    return setState(employeeStack);
  };

  const actions = (action) => {
    const { type, payload } = action;
    switch (type) {
      case "add":
        return addPosition(payload);
      case "delete":
        return deleteEmployee(payload);
      case "edit":
        return editEmployee(payload);
      default:
        return state;
    }
  };
  return { state, actions };
};
export default OrgProvider;
