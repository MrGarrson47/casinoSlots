import classes from "./OptionContainer.module.css";
import Button from "../ui/Button";

const OptionContainer = (props) => {
  const {
    onStartSpinner,
    newOnBet,
    perLineBet,
    amountOfLines,
    onSelectAmountOfLines,
    totalCostOfSpin,
    paylineSelectorIsDisabled,
    changingBetIsDisabled,
    startingSpinIsDisabled,
  } = props;
  console.log(totalCostOfSpin);
  return (
    <>
      <div className={classes["main-container"]}>
        <select
          className={classes["line-selector-input"]}
          value={amountOfLines}
          onChange={onSelectAmountOfLines}
          disabled={paylineSelectorIsDisabled}
        >
          <option>Select Paylines</option>
          <option>3</option>
          <option>5</option>
          <option>7</option>
        </select>
        <input
          className={classes["bet-input"]}
          onChange={newOnBet}
          value={perLineBet}
          type="number"
          step="0.20"
          min="0.20"
          disabled={changingBetIsDisabled}
        />
        {isNaN(totalCostOfSpin) ? (
          <p className={classes["spin-cost"]}>Select Paylines</p>
        ) : (
          <p className={classes["spin-cost"]}>
            Spin Cost {totalCostOfSpin.toFixed(2)}
          </p>
        )}
        <Button disabled={startingSpinIsDisabled} onClick={onStartSpinner}>
          Spin
        </Button>
      </div>
    </>
  );
};

export default OptionContainer;
