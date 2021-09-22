import classes from "./OptionContainer.module.css";
import Button from '../ui/Button';

const OptionContainer = (props) => {
  const { onUserBet, hasPlacedBet, onStartSpinner, slotsAreSpinning } = props;
  return (
    <>
      <div className={classes["main-container"]}>
        <Button disabled={slotsAreSpinning} id="1" onClick={onUserBet}>
          Bet 1
        </Button>
        <Button disabled={slotsAreSpinning} id="5" onClick={onUserBet}>
          Bet 5
        </Button>
        <Button disabled={slotsAreSpinning} id="10" onClick={onUserBet}>
          Bet 10
        </Button>
        <Button disabled={hasPlacedBet || slotsAreSpinning} onClick={onStartSpinner}>
          Spin
        </Button>
      </div>
    </>
  );
};

export default OptionContainer;
