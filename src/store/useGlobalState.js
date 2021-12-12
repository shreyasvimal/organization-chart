import {useState} from "react";
import data from "./data.json";
const useGlobalState = () => {
  const [state, setState] = useState(data);
  const getNodeFromTree = (node, nodeId) => {
    if (node.id == nodeId) {
      return node;
    } else if (node.children != null) {
      var result = null;
      for (let i = 0; result == null && i < node.children.length; i++) {
        result = getNodeFromTree(node.children[i], nodeId);
      }
      return result;
    }
    return null;
  };
  const editReportee = (payload) => {
    let employeeStack = state;
    let reporter = getNodeFromTree(employeeStack[0], payload.id);
    reporter.title = payload.title;
    reporter.name = payload.name;
    reporter.startDate = payload.startDate;
    return setState(employeeStack);
  };
  const getPath = (node, target) => {
    var result;
    node.some(({id, children = []}) => {
      if (id === target) return (result = id);
      var temp = getPath(children, target);
      if (temp) return (result = id + "." + temp);
    });
    return result;
  };
  const removeReportee = (payload) => {
    let employeeStack = state;
    let pathToNode = getPath(employeeStack, payload.id).split(".");
    let parentId = pathToNode[pathToNode.length - 2];
    let reporter = getNodeFromTree(employeeStack[0], payload.id);
    let parent = getNodeFromTree(employeeStack[0], parentId);
    if (reporter.children != null) {
      parent.children = [...parent.children, ...reporter.children];
    }
    parent.children = parent.children.filter((item) => item.id !== payload.id);
    return setState(employeeStack);
  };
  const addReportee = (payload) => {
    let employeeStack = state;
    let reporter = getNodeFromTree(employeeStack[0], payload.id);
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
    const {type, payload} = action;
    switch (type) {
      case "add":
        return addReportee(payload);
      case "remove":
        return removeReportee(payload);
      case "edit":
        return editReportee(payload);
      default:
        return state;
    }
  };
  return {state, actions};
};
export default useGlobalState;
