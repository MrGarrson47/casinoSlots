import Button from "../ui/Button";
import classes from "./StartScreen.module.css";

const StartScreen = (props) => {
  return (
    <>
      <div className={classes["main-container"]}>
          <Button classes={classes["start-btn"]} onClick={props.onStartGame}>Start</Button>
      </div>
    </>
  );
};

export default StartScreen;
