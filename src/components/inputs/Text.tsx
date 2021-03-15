import React from "react";

//styles and material-ui components
import { TextField } from "@material-ui/core";
import { IInputs } from "../../interfaces/inputs/Index";

const InputText: React.FC<IInputs> = ({
  name,
  variant,
  text,
  value,
  onChange,
  error = null,
  ...other
}) => {
  return (
    <TextField
      variant={variant || "outlined"}
      margin="none"
      title={text}
      value={value}
      label={text}
      name={name}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
};

export default InputText;
