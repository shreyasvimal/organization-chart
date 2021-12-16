import { useContext, useEffect, useState } from "react";
import ButtonComponent from "../../Button";
import TextInput from '../../Input';
import Dialog from '@mui/material/Dialog';

import classes from '../item-content.module.css';
import { OrgContext } from "../../../store/OrgContext";

export const UpsertEmployee = ({ employee = {}, label, isInsert = false }) => {

    const [showPopup, setShowPopup] = useState(false);
    const [name, setName] = useState(!isInsert ? employee.name : '');
    const [title, setTitle] = useState(!isInsert ? employee.title : '');
    const [startDate, setStartDate] = useState(!isInsert ? employee.startDate : '');
    const [error, setError] = useState("");

    const { addEmployee, editEmployee } = useContext(OrgContext);

    const validate = () => {
        let invalidArray = [];
        if (name === "") invalidArray.push("Name");
        if (title === "") invalidArray.push("Title");
        invalidArray.length > 0
            ? setError(invalidArray.join(",") + " is required")
            : setError("");
        return invalidArray.length === 0;
    };

    const upsertEmployee = () => {
        if(validate()) {
            if(isInsert) {
                addEmployee({
                    name, title, startDate
                }, employee.id);
            } else {
                const updatedEmp = {...employee, ...{
                    name, title, startDate
                }}
                editEmployee(updatedEmp);
            }
        }
        setShowPopup(false);
    }

    return (
        <>
            <ButtonComponent
                onClick={() => setShowPopup(true)}
            >
            {label}
            </ButtonComponent>
            {showPopup && (
                <Dialog
                    open={showPopup}
                    onClose={() => setShowPopup(false)}
                >
                    <div className={`${classes.card}`}>
                        <div className={`${classes.cardbody}`}>
                            <TextInput
                                id="name"
                                name="name"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <TextInput
                                id="title"
                                name="title"
                                label="Designation"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <TextInput
                                id="startDate"
                                name="startDate"
                                label="Start Date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                            <p className={`${classes.errorText}`}>{error}</p>     
                        </div>
                        <div>
                            <ButtonComponent onClick={upsertEmployee}>
                                {isInsert ? 'Add' : 'Save'}
                            </ButtonComponent>
                        </div>
                    </div>
                </Dialog>
            )}
        </>
    );
}