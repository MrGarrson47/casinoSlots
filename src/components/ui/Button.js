import classes from "./Button.module.css";

const Button = (props) => {
  const allClasses = props.classes || classes.button ;

  return (
    <button disabled={props.disabled} onClick={props.onClick} id={props.id} className={allClasses}>
      {props.children}
    </button>
  );
};

export default Button;
