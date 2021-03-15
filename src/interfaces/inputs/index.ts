interface IInputs {
  text?: any;
  size?: any;
  color?: any;
  variant?: any;
  disabled?: any;
  name?: any;
  value?: any;
  error?: boolean;
  onChange?: (e: any) => void;
}

interface IForm {
  InitialValue: Array<object>;
  validateOnChange: boolean;
  validate: (fieldValues?: any) => boolean | undefined;
}

interface IButton extends IInputs {
  loading?: boolean;
  onClick?: () => any;
}

interface IMultSelect extends IInputs {
  items: Array<IMultSelectEnum>;
}

interface IMultSelectEnum {
  id?: string;
  title?: string;
  value?: string;
}

export type { IInputs, IButton, IMultSelect, IMultSelectEnum, IForm };
