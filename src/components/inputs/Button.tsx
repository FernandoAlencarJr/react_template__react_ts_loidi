import { makeStyles, CircularProgress } from "@material-ui/core";
import ButtonComponent from "@material-ui/core/Button";
import { blue } from "@material-ui/core/colors";
import { IButton } from "../../interfaces/inputs/Index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    color: blue[300],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Button: React.FC<IButton> = ({
  size,
  color,
  variant,
  text,
  onClick,
  loading,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <ButtonComponent
          variant={variant || "contained"}
          color={color || "primary"}
          disabled={loading || false}
          onClick={onClick}
          size={size || "small"}
          {...rest}
        >
          {text}
        </ButtonComponent>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export default Button;
