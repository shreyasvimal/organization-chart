import OrganizationItem from "./OrganizationItem";

import classes from "./Popup.module.css";
const Popup = ({ handleClose, handleSave, parentId }) => {
  return (
    <div className={`${classes.popupBox}`}>
      <div className={`${classes.box}`}>
        <span className={`${classes.closeIcon}`} onClick={handleClose}>
          x
        </span>
        <OrganizationItem
          item={{ name: "", title: "" }}
          editPosition={handleSave}
          editFlag={true}
          parentId={parentId}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};
export default Popup;
