import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { IMultSelect } from "../../interfaces/inputs/Index";

const Select: React.FC<IMultSelect> = ({
  name,
  text,
  value,
  error,
  onChange,
  items,
  variant,
  size,
}) => {
  console.log(error);
  return (
    <FormControl
      variant={variant || "outlined"}
      size={size || "small"}
      {...(error && { error: true })}
    >
      <InputLabel>{text}</InputLabel>
      <MuiSelect label={text} name={name} value={value} onChange={onChange}>
        <MenuItem value="0">nenhuma</MenuItem>
        {items.map((item, index) => (
          <MenuItem key={index.toString()} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
