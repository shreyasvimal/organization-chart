import { Fragment } from "react";
import classes from "./item.module.css";
import { ItemContent } from './ItemContent';
export const Item = ({ data }) => (
    <>
      {data.length > 0 && (
        <ul className={`${classes.content}`}>
          {data.map((item) => (
            <Fragment key={item.id}>
              <li>
                <ItemContent item={item}/>
                {item.children && (
                  <Item
                    data={item.children}
                  />
                )}
              </li>
            </Fragment>
          ))}
        </ul>
      )}
    </>
);