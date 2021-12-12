import OrganizationItem from "./OrganizationItem";
const Popup = ({ handleClose, handleSave, parentId }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <OrganizationItem
          item={{ name: "", title: "" }}
          reporteeEdit={handleSave}
          editFlag={true}
          parentId={parentId}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};
export default Popup;
