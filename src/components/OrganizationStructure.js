import React, { Fragment } from "react";
import OrganizationItem from "./OrganizationItem";

import classes from "./Organization-structure.module.css";

const OrganizationStructure = ({ data, editPosition, id }) => {
  return (
    <>
      {data.length > 0 && (
        <ul className={`${classes.content}`}>
          {data.map((item) => (
            <Fragment key={item.id}>
              <li>
                <OrganizationItem item={item} parentId={id} editPosition={editPosition} />
                {item.children && (
                  <OrganizationStructure
                    data={item.children}
                    editPosition={editPosition}
                  />
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      )}
    </>
  );
};

export default OrganizationStructure;
