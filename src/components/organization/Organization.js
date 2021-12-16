import { useContext } from "react";
import { OrgContext } from '../../store/OrgContext';
import { Item } from "./Item";

export const Organization = () => {
    const { orgStructure } = useContext(OrgContext);
    return  (
        <Item data={orgStructure} />
    );
};