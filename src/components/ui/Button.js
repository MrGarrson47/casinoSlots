import classes from "./Button.module.css";

const Button = (props) => {
  const allClasses = [classes.button, props.classes || ""].join(" ");

  return (
    <button disabled={props.disabled} onClick={props.onClick} id={props.id} className={allClasses}>
      {props.children}
    </button>
  );
};

export default Button;
