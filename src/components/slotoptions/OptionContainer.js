import classes from "./OptionContainer.module.css";
import Button from '../ui/Button';

const OptionContainer = (props) => {
  const { hasPlacedBet, onStartSpinner, slotsAreSpinning, newOnBet, perLineBet, amountOfLines, onSelectAmountOfLines, totalCostOfSpin, disabled } = props;
  console.log(totalCostOfSpin)
  return (
    <>
      <div className={classes["main-container"]}>
        <select className={classes["line-selector-input"]} value={amountOfLines} onChange={onSelectAmountOfLines} >
          <option>Select Paylines</option>
          <option>3</option>
          <option>5</option>
          <option>7</option>
        </select>
        <input className={classes["bet-input"]} onChange={newOnBet} value={perLineBet} type="number" step="0.20" min="0.20" />
        { isNaN(totalCostOfSpin) ?<p className={classes["spin-cost"]}>Select Paylines</p>  : <p className={classes["spin-cost"]}>Spin Cost {totalCostOfSpin.toFixed(2)}</p> }
        <Button disabled={disabled} onClick={onStartSpinner}>
          Spin
        </Button>
      </div>
    </>
  );
};

export default OptionContainer;
