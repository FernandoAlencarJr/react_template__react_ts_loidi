//react
import React from "react";

//styles and material-ui components
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { IMultSelect } from "../../interfaces/inputs/Index";

const InputRadio: React.FC<IMultSelect> = ({
  color,
  text,
  value,
  name,
  onChange,
  disabled,
  items,
}) => {
  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        value={value}
        onChange={onChange}
        color={color || "primary"}
      >
        {items.map((item, index) => (
          <FormControlLabel
            key={index.toString()}
            value={item.value}
            control={<Radio />}
            label={item.title}
            disabled={disabled}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default InputRadio;
