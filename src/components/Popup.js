import classes from "./Popup.module.css";
const Popup = ({ handleClose, children}) => {
  return (
    <div className={`${classes.popupBox}`}>
      <div className={`${classes.box}`}>
        <span className={`${classes.closeIcon}`} onClick={handleClose}>
          x
        </span>
        {children}
      </div>
    </div>
  );
};
export default Popup;
