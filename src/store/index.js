import { useState } from "react";
import { EMPLOYEES, ORG_STRUCTURE } from './data';

export const Store = () => {
    const [employees, setEmployees] = useState(EMPLOYEES);
    const [orgStructure, setOrgStructure] = useState(ORG_STRUCTURE);

    const getOrgStructure = (node, nodeId) => {
        if (node.id == nodeId) {
          return node;
        } else if (node.children != null) {
          let result = null;
          for (let i = 0; result == null && i < node.children.length; i++) {
            result = getOrgStructure(node.children[i], nodeId);
          }
          return result;
        }
        return null;
      };

    const generateId = () => employees.sort((first, second) => (second.id - first.id));

    const addEmployee = (data, parentId) => {
        const id = generateId()[0].id + 1;
        const newOrg = [...orgStructure];
        const newEmployees = [...employees];
        const parentNode = getOrgStructure(newOrg[0], parentId);
        if(!parentNode.children) {
            parentNode.children = [];
        }
        parentNode.children.push({
            id,
            parentId,
            children: null
        });
        console.log(newOrg);
        newEmployees.push({
            id,
            title: data.title,
            startDate: data.startDate,
            name: data.name
        })
        setEmployees(newEmployees)
        setOrgStructure(newOrg);

    }

    const deleteEmployee = (data) => {
        const newOrg = [...orgStructure];
        const reporter = getOrgStructure(newOrg[0], data.id);
        const parent = getOrgStructure(newOrg[0], data.parentId);
        if (reporter.children != null) {
            parent.children = [...parent.children, ...reporter.children];
        }
        parent.children = parent.children.filter((item) => {
            item.parentId = parent.id;
            return item.id !== data.id
        });
        setOrgStructure(newOrg);
    }

    const editEmployee = (data) => {
        const newEmployees = [...employees];
        for(let count = 0 ; count < employees.length; count++) {
            if(data.id === employees[count].id) {
                employees[count].name = data.name;
                employees[count].title = data.title;
                employees[count].startDate = data.startDate;
                break;
            }
        }
        setEmployees(newEmployees);
    }

    const getEmployee = (id) => employees.find(element => element.id === id);

    return {
        addEmployee, deleteEmployee, editEmployee, getEmployee, orgStructure, employees
    }
}