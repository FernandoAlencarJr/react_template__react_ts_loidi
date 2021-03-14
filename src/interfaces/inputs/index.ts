interface IInputs {
  text?: any;
  size?: any;
  color?: any;
  variant?: any;
}

interface IButton extends IInputs {
  loading?: boolean;
  onClick?: () => any;
}

export type { IInputs, IButton };
