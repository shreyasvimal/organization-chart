import { useContext } from 'react';
import { OrgContext } from '../../store/OrgContext';
import ButtonComponent from '../Button';
import { UpsertEmployee } from './footer/UpsertEmployee';
import classes from './item-content.module.css';
export const ItemContent = ({ item }) => {
    const { getEmployee } = useContext(OrgContext);
    const { deleteEmployee } = useContext(OrgContext);
    const employee = getEmployee(item.id);

    const removeEmployee = () => {
        deleteEmployee(item);
    }

    return (
        <div className={`${classes.card}`}>
            <div className={`${classes.cardbody}`}>
                <h4>{employee.name}</h4>
                <p>
                    {employee.title}
                </p>
                {employee.startDate && (
                    <p>{employee.startDate}</p>
                )}
            </div>
            <div className={`${classes.cardfooter}`}>
                <UpsertEmployee employee={employee} label="Edit"/>
                <ButtonComponent
                    onClick={removeEmployee}
                    >
                    Delete
                </ButtonComponent>
                <UpsertEmployee employee={employee} label="Add" isInsert/>
            </div>
        </div>
    );
}