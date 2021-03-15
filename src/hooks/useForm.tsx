//react
import React from "react";

export function useForm(
  InitialValue: any,
  validateOnChange: boolean,
  validate: (fieldValues?: any) => any
) {
  const [values, setValues] = React.useState(InitialValue);
  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(InitialValue);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

interface formProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

export function Form({ children, onSubmit }: formProps) {
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      {children}
    </form>
  );
}
