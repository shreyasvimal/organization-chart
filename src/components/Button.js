import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  const { onClick } = props;

  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={onClick}>{props.children}</Button>
      </ButtonGroup>
    </>
  );
};

export default ButtonComponent;
