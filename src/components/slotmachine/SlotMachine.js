import SlotColumn from "../slotcolumn/SlotColumn";
import OptionContainer from "../slotoptions/OptionContainer";
import classes from "./SlotMachine.module.css";
import { useState, useEffect } from "react";
import UserBar from "../userbar/UserBar";
import PaylinesOverlay from "../paylines/PaylinesOverlay";
import Paytable from "../paytable/Paytable";
import { useImageHandlerFunctions } from "./useImageHandlerFunctions";
import { useSlotReducerHandler } from "./useSlotReducerHandler";
import { useEachColumnImageObjects } from "./useEachColumnImageObjects";
import { calcSpinResults } from "./paylineCalculator";
import { useTimerHandlerFunctions } from "./useTimerHandlerFunctions";

let clickSpinAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/clickSpin.wav"
);
let slotsSpinningAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/slotsSpinning.wav"
);
let noMatchAudio = new Audio(process.env.PUBLIC_URL + "/sounds/noMatch.mp3");
let foundMatch = new Audio(process.env.PUBLIC_URL + "/sounds/foundMatch.wav");
let singleSlotStop = new Audio(
  process.env.PUBLIC_URL + "/sounds/singleSlotStop.wav"
);
let selectLinesAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/linesSelect.wav"
);
let backgroundAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/background.wav"
);

const SlotMachine = () => {
  const [showPaytable, setShowPaytable] = useState(false);

  let eachColumnImageObjectHandler = useEachColumnImageObjects();
  let slotReducerHandler = useSlotReducerHandler();
  let imageIndexHandler = useImageHandlerFunctions(
    slotReducerHandler.userState
  );
  let getSpinResults = calcSpinResults(
    slotReducerHandler.userState,
    eachColumnImageObjectHandler.col1ArrayOfImageObjects,
    eachColumnImageObjectHandler.col2ArrayOfImageObjects,
    eachColumnImageObjectHandler.col3ArrayOfImageObjects,
    imageIndexHandler.imageIndexForCol1Row1,
    imageIndexHandler.imageIndexForCol1Row2,
    imageIndexHandler.imageIndexForCol1Row3,
    imageIndexHandler.imageIndexForCol2Row1,
    imageIndexHandler.imageIndexForCol2Row2,
    imageIndexHandler.imageIndexForCol2Row3,
    imageIndexHandler.imageIndexForCol3Row1,
    imageIndexHandler.imageIndexForCol3Row2,
    imageIndexHandler.imageIndexForCol3Row3
  );
  let spinTimerHandler = useTimerHandlerFunctions(
    imageIndexHandler,
    singleSlotStop,
    slotsSpinningAudio
  );

  if (!spinTimerHandler.slotsAreSpinning) {
    backgroundAudio.loop = true;
    backgroundAudio.play();
    backgroundAudio.volume = 0.5;
  }else{
    backgroundAudio.pause();
  }

  // only runs when the player changes the amount of pay lines, plays a sound
  useEffect(() => {
    selectLinesAudio.pause();
    selectLinesAudio.currentTime = 0;
    selectLinesAudio.play();
  }, [slotReducerHandler.userState.amountOfLines]);

  // only runs when the slots have spun, calculates the row matches and winning row payouts
  useEffect(() => {
    spinResults();
  }, [spinTimerHandler.spinCount]);

  // only runs after the row matches and payout have been calculated, plays a win or lose sound
  useEffect(() => {
    if (slotReducerHandler.userState.foundMatch === "match") {
      setTimeout(() => {
        foundMatch.play();
      }, 1000);
    }
    if (slotReducerHandler.userState.foundMatch === "noMatch") {
      noMatchAudio.play();
    }
  }, [slotReducerHandler.userState.foundMatch]);

  // runs every render, handles when to restart the slots spinning sound, the sound is 6 seconds long and the slots spin for 12 seconds
  useEffect(() => {
    if (
      spinTimerHandler.slotsAreSpinning &&
      slotsSpinningAudio.currentTime > 3
    ) {
      slotsSpinningAudio.currentTime = 1;
    }
    if (!spinTimerHandler.slotsAreSpinning) {
      slotsSpinningAudio.pause();
      slotsSpinningAudio.currentTime = 0;
    }
  });

  const showPaytableHandler = (e) => {
    setShowPaytable((state) => {
      return !state;
    });
  };

  const spinResults = () => {
    if (spinTimerHandler.spinCount !== 0) {
      slotReducerHandler.userDispatch({
        type: "NEW_CALC_SPIN_RESULTS",
        payload: getSpinResults,
      });
    }
  };

  const startSpinnerHandler = (e) => {
    slotReducerHandler.userState.bet && clickSpinAudio.play();
    spinTimerHandler.setSlotsAreSpinning(true);
    slotReducerHandler.subtractBetFromUser();
    eachColumnImageObjectHandler.setRandomImageObjectsForColumns();
    spinTimerHandler.setAllColumnSpinnerTimers();
    spinTimerHandler.setFlashSpinnerTimers();
  };

  return (
    <>
      <div className={classes["main-container"]}>
        <div className={classes["user-bar-container"]}>
          <UserBar
            freeSpins={slotReducerHandler.userState.freeSpins}
            availableCash={slotReducerHandler.userState.cash}
            currentBet={slotReducerHandler.userState.bet}
            onClickPaytable={showPaytableHandler}
          />
        </div>
        <div className={classes["rows-container"]}>
          {showPaytable && <Paytable />}
          <PaylinesOverlay
            showPaylines={slotReducerHandler.userState.showPaylines}
            amountOfLines={slotReducerHandler.userState.amountOfLines}
            paylineMatches={{
              payline1MatchDouble:
                slotReducerHandler.userState.payline1MatchDouble,
              payline2MatchDouble:
                slotReducerHandler.userState.payline2MatchDouble,
              payline3MatchDouble:
                slotReducerHandler.userState.payline3MatchDouble,
              payline4MatchDouble:
                slotReducerHandler.userState.payline4MatchDouble,
              payline5MatchDouble:
                slotReducerHandler.userState.payline5MatchDouble,
              payline6MatchDouble:
                slotReducerHandler.userState.payline6MatchDouble,
              payline7MatchDouble:
                slotReducerHandler.userState.payline7MatchDouble,
              payline1MatchTriple:
                slotReducerHandler.userState.payline1MatchTriple,
              payline2MatchTriple:
                slotReducerHandler.userState.payline2MatchTriple,
              payline3MatchTriple:
                slotReducerHandler.userState.payline3MatchTriple,
              payline4MatchTriple:
                slotReducerHandler.userState.payline4MatchTriple,
              payline5MatchTriple:
                slotReducerHandler.userState.payline5MatchTriple,
              payline6MatchTriple:
                slotReducerHandler.userState.payline6MatchTriple,
              payline7MatchTriple:
                slotReducerHandler.userState.payline7MatchTriple,
            }}
          />

          <SlotColumn
            colPosition={1}
            rowMatches={slotReducerHandler.arrayOfCol1Matches}
            timing={spinTimerHandler.timingColumn1}
            slotsAreSpinning={spinTimerHandler.slotsAreSpinning}
            slotImages={imageIndexHandler.arrayOfCol1ImageIndexes}
            images={eachColumnImageObjectHandler.col1ArrayOfImageObjects}
            flashTiming={spinTimerHandler.col1SpinningFlashTiming}
          />
          <SlotColumn
            colPosition={2}
            rowMatches={slotReducerHandler.arrayOfCol2Matches}
            slotsAreSpinning={spinTimerHandler.slotsAreSpinning}
            timing={spinTimerHandler.timingColumn2}
            slotImages={imageIndexHandler.arrayOfCol2ImageIndexes}
            images={eachColumnImageObjectHandler.col2ArrayOfImageObjects}
            flashTiming={spinTimerHandler.col2SpinningFlashTiming}
          />
          <SlotColumn
            colPosition={3}
            rowMatches={slotReducerHandler.arrayOfCol3Matches}
            slotsAreSpinning={spinTimerHandler.slotsAreSpinning}
            timing={spinTimerHandler.timingColumn3}
            slotImages={imageIndexHandler.arrayOfCol3ImageIndexes}
            images={eachColumnImageObjectHandler.col3ArrayOfImageObjects}
            flashTiming={spinTimerHandler.col3SpinningFlashTiming}
          />
        </div>
        <div className={classes["options-container"]}>
          <OptionContainer
            paylineSelectorIsDisabled={
              spinTimerHandler.slotsAreSpinning ||
              slotReducerHandler.userState.freeSpins > 0 ||
              showPaytable
            }
            changingBetIsDisabled={
              spinTimerHandler.slotsAreSpinning ||
              slotReducerHandler.userState.freeSpins > 0 ||
              slotReducerHandler.userState.amountOfLines ===
                "Select Paylines" ||
              showPaytable
            }
            startingSpinIsDisabled={
              spinTimerHandler.slotsAreSpinning ||
              slotReducerHandler.userState.amountOfLines ===
                "Select Paylines" ||
              showPaytable
            }
            newOnBet={slotReducerHandler.newBetHandler}
            perLineBet={slotReducerHandler.userState.perLineBet}
            amountOfLines={slotReducerHandler.userState.amountOfLines}
            onSelectAmountOfLines={slotReducerHandler.linesSelectHandler}
            totalCostOfSpin={slotReducerHandler.userState.bet}
            onStartSpinner={startSpinnerHandler}
            hasPlacedBet={!slotReducerHandler.userState.bet}
          />
        </div>
      </div>
    </>
  );
};

export default SlotMachine;
