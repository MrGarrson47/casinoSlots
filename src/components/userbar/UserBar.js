import classes from "./UserBar.module.css";

const UserBar = (props) => {
  const {availableCash, currentBet} = props;
  return (
    <>
      <div className={classes['main-container']}>
        <p className={classes['player-name']}>Player Name</p>
        <p className={classes['player-cash']}>{availableCash}</p>
        <p className={classes['player-bet']}>{currentBet}</p>
      </div>
    </>
  );
};

export default UserBar;
