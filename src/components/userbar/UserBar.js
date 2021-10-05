import Button from "../ui/Button";
import classes from "./UserBar.module.css";

const UserBar = (props) => {
  const {availableCash, onClickPaytable} = props;
  return (
    <>
      <div className={classes['main-container']}>
        <Button onClick={onClickPaytable}>Paytable</Button>
        <p className={classes['player-cash']}>{availableCash.toFixed(2)}</p>
      </div>
    </>
  );
};

export default UserBar;
