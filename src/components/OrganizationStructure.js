import React, { Fragment } from "react";
import OrganizationItem from "./OrganizationItem";

import classes from './Organization-structure.module.css'

const OrganizationStructure = ({ data, reporteeEdit }) => {
  return (
    <>
      {data.length > 0 && (
        <ul className={`${classes.content}`}>
          {data.map((item) => (
            <Fragment key={item.id}>
              <li>
                <OrganizationItem item={item} reporteeEdit={reporteeEdit} />
                {item.children && (
                  <OrganizationStructure
                    data={item.children}
                    reporteeEdit={reporteeEdit}
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
