import TextField from "@mui/material/TextField";

const TextInput = (props) => {

  const {
    id,
    value,
    onChange,
    validate,
    placeholder,
    error,
    label = "",
    helperText
   
  } = props;
  
  return (
    <>
      <TextField
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        variant="standard"
        label={label}
        validate={validate}
        placeholder={placeholder}
        className="textInput"
        error={error}
        helperText={helperText}
      />
      {/* <p >// place for errors</p> */}
    </>
  );
};

export default TextInput;
