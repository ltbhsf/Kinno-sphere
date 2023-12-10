import classes from "./Button.module.css";

const Button = (props) => {
    
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`${classes.button} ${classes[props.size]} ${
        classes[props.color]
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
