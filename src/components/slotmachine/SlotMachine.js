import SlotColumn from "../slotcolumn/SlotColumn";
import OptionContainer from "../slotoptions/OptionContainer";
import classes from "./SlotMachine.module.css";
import {
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
} from "../../slotImages";
import { useState, useReducer, useEffect } from "react";
import UserBar from "../userbar/UserBar";

const userReducer = (state, action) => {
  if (action.type === "PLACE_BET") {
    return {
      ...state,
      cash: state.cash,
      bet: action.payload,
    };
  }
  if (action.type === "COMMIT_BET") {
    return {
      cash: state.cash - state.bet,
      bet: state.bet,
      col1Row1Match: false,
      col1Row2Match: false,
      col1Row3Match: false,
      col2Row1Match: false,
      col2Row2Match: false,
      col2Row3Match: false,
      col3Row1Match: false,
      col3Row2Match: false,
      col3Row3Match: false,
      foundMatch: null,
    };
  }
  if (action.type === "CALC_SPIN_RESULTS") {
    return {
      cash: state.cash + state.bet * (1.5 * action.payload.payoutMultiplier),
      bet: 0,
      col1Row1Match: action.payload.col1Row1Match,
      col1Row2Match: action.payload.col1Row2Match,
      col1Row3Match: action.payload.col1Row3Match,
      col2Row1Match: action.payload.col2Row1Match,
      col2Row2Match: action.payload.col2Row2Match,
      col2Row3Match: action.payload.col2Row3Match,
      col3Row1Match: action.payload.col3Row1Match,
      col3Row2Match: action.payload.col3Row2Match,
      col3Row3Match: action.payload.col3Row3Match,
      foundMatch:
        action.payload.payoutMultiplier > 0
          ? "match"
          : action.payload.payoutMultiplier === 0
          ? "noMatch"
          : null,
    };
  }
};

const initialUserReducerState = {
  cash: 500,
  bet: 0,
  col1Row1Match: false,
  col1Row2Match: false,
  col1Row3Match: false,
  col2Row1Match: false,
  col2Row2Match: false,
  col2Row3Match: false,
  col3Row1Match: false,
  col3Row2Match: false,
  col3Row3Match: false,
  foundMatch: null,
};

let bet1Audio = new Audio(process.env.PUBLIC_URL + "/sounds/bet1.wav");
let bet5Audio = new Audio(process.env.PUBLIC_URL + "/sounds/bet5.wav");
let bet10Audio = new Audio(process.env.PUBLIC_URL + "/sounds/bet10.wav");
let clickSpinAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/clickSpin.wav"
);
let slotsSpinningAudio = new Audio(
  process.env.PUBLIC_URL + "/sounds/slotsSpinning.wav"
);
let noMatchAudio = new Audio(process.env.PUBLIC_URL + "/sounds/noMatch.mp3");
let foundMatch = new Audio(process.env.PUBLIC_URL + "/sounds/foundMatch.wav");
let singleSlotStop = new Audio(process.env.PUBLIC_URL + "/sounds/singleSlotStop.wav");

const SlotMachine = (props) => {
  const [imageIndexForCol1Row1, setImageIndexForCol1Row1] = useState(3);
  const [imageIndexForCol1Row2, setImageIndexForCol1Row2] = useState(4);
  const [imageIndexForCol1Row3, setImageIndexForCol1Row3] = useState(5);

  const [imageIndexForCol2Row1, setImageIndexForCol2Row1] = useState(3);
  const [imageIndexForCol2Row2, setImageIndexForCol2Row2] = useState(4);
  const [imageIndexForCol2Row3, setImageIndexForCol2Row3] = useState(5);

  const [imageIndexForCol3Row1, setImageIndexForCol3Row1] = useState(3);
  const [imageIndexForCol3Row2, setImageIndexForCol3Row2] = useState(4);
  const [imageIndexForCol3Row3, setImageIndexForCol3Row3] = useState(5);

  const [slotsAreSpinning, setSlotsAreSpinning] = useState(false);

  const [spinCount, setSpinCount] = useState(0);

  const [userState, userDispatch] = useReducer(
    userReducer,
    initialUserReducerState
  );

  // only runs when the slots have spun, calculates the row matches and winning row payouts
  useEffect(() => {
    spinResults();
  }, [spinCount]);

  // only runs after the row matches and payout have been calculated, plays a win or lose sound
  useEffect(() => {
    if (userState.foundMatch === "match") {
      foundMatch.play();
    }
    if (userState.foundMatch === "noMatch") {
      noMatchAudio.play();
    }
  }, [userState.foundMatch]);

  // runs every render, handles when to restart the slots spinning sound, the sound is 6 seconds long and the slots spin for 12 seconds
  useEffect(() => {
    if (slotsAreSpinning && slotsSpinningAudio.currentTime > 3) {
      slotsSpinningAudio.currentTime = 1;
    }
    if (!slotsAreSpinning) {
      slotsSpinningAudio.pause();
      slotsSpinningAudio.currentTime = 0;
    }
  });

  const arrayOfCol1ImageIndexes = [
    imageIndexForCol1Row1,
    imageIndexForCol1Row2,
    imageIndexForCol1Row3,
  ];
  const arrayOfCol2ImageIndexes = [
    imageIndexForCol2Row1,
    imageIndexForCol2Row2,
    imageIndexForCol2Row3,
  ];
  const arrayOfCol3ImageIndexes = [
    imageIndexForCol3Row1,
    imageIndexForCol3Row2,
    imageIndexForCol3Row3,
  ];

  const arrayOfCol1Matches = [
    userState.col1Row1Match,
    userState.col1Row2Match,
    userState.col1Row3Match,
  ];

  const arrayOfCol2Matches = [
    userState.col2Row1Match,
    userState.col2Row2Match,
    userState.col2Row3Match,
  ];

  const arrayOfCol3Matches = [
    userState.col3Row1Match,
    userState.col3Row2Match,
    userState.col3Row3Match,
  ];

  const timings = [300, 380, 460];

  const columnSpinnerStateAdjustor = (fn1, fn2, fn3) => {
    return () => {
      fn1((state) => {
        if (state === 0) {
          return 8;
        } else {
          return state - 1;
        }
      });

      fn2((state) => {
        if (state === 0) {
          return 8;
        } else {
          return state - 1;
        }
      });

      fn3((state) => {
        if (state === 0) {
          return 8;
        } else {
          return state - 1;
        }
      });
    };
  };

  const firstColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol1Row1,
    setImageIndexForCol1Row2,
    setImageIndexForCol1Row3
  );
  const secondColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol2Row1,
    setImageIndexForCol2Row2,
    setImageIndexForCol2Row3
  );
  const thirdColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol3Row1,
    setImageIndexForCol3Row2,
    setImageIndexForCol3Row3
  );

  const clearAllSpinnerTimers = (
    spinner1Timer,
    spinner2Timer,
    spinner3Timer
  ) => {
    clearInterval(spinner1Timer);
    clearInterval(spinner2Timer);
    clearInterval(spinner3Timer);
  };

  const clearSingleSpinnerTimer = (timer)=>{
    clearInterval(timer);
  }

  const getTiming = () => {
    return timings[Math.floor(Math.random() * 3)];
  };

  const userBetHandler = (e) => {
    const { id } = e.target;
    bet1Audio.pause();
    bet5Audio.pause();
    bet10Audio.pause();
    bet1Audio.currentTime = 0;
    bet5Audio.currentTime = 0;
    bet10Audio.currentTime = 0;
    switch (id) {
      case "1":
        bet1Audio.play();
        break;
      case "5":
        bet5Audio.play();
        break;
      case "10":
        bet10Audio.play();
        break;
    }
    userDispatch({ type: "PLACE_BET", payload: parseInt(id) });
  };

  const subtractBetFromUser = () => {
    userDispatch({ type: "COMMIT_BET" });
  };

  const calculateResults = () => {
    //let payoutMultiplier = 0;
    let spinResult = {
      payoutMultiplier: 0,
      firstColumnRow1Match: false,
      firstColumnRow2Match: false,
      firstColumnRow3Match: false,
      secondColumnRow1Match: false,
      secondColumnRow2Match: false,
      secondColumnRow3Match: false,
      thirdColumnRow1Match: false,
      thirdColumnRow2Match: false,
      thirdColumnRow3Match: false,
    };
    if (
      firstColumnImages[imageIndexForCol1Row1].id ===
        secondColumnImages[imageIndexForCol2Row1].id &&
      firstColumnImages[imageIndexForCol1Row1].id ===
        thirdColumnImages[imageIndexForCol3Row1].id
    ) {
      //payoutMultiplier += 1;
      spinResult.payoutMultiplier += 1;
      spinResult.col1Row1Match = true;
      spinResult.col2Row1Match = true;
      spinResult.col3Row1Match = true;
      console.log("top row match!");
      console.log(
        "col 1 row 1 :" + firstColumnImages[imageIndexForCol1Row1].id,
        "col 2 row 1" + secondColumnImages[imageIndexForCol2Row1].id,
        "col 3 row 1" + thirdColumnImages[imageIndexForCol3Row1].id
      );
    }

    if (
      firstColumnImages[imageIndexForCol1Row2].id ===
        secondColumnImages[imageIndexForCol2Row2].id &&
      firstColumnImages[imageIndexForCol1Row2].id ===
        thirdColumnImages[imageIndexForCol3Row2].id
    ) {
      //payoutMultiplier += 1;
      spinResult.payoutMultiplier += 1;
      spinResult.col1Row2Match = true;
      spinResult.col2Row2Match = true;
      spinResult.col3Row2Match = true;
      console.log("middle row match!");
      console.log(
        "col 1 row 2 :" + firstColumnImages[imageIndexForCol1Row2].id,
        "col 2 row 2" + secondColumnImages[imageIndexForCol2Row2].id,
        "col 3 row 2" + thirdColumnImages[imageIndexForCol3Row2].id
      );
    }

    if (
      firstColumnImages[imageIndexForCol1Row3].id ===
        secondColumnImages[imageIndexForCol2Row3].id &&
      firstColumnImages[imageIndexForCol1Row3].id ===
        thirdColumnImages[imageIndexForCol3Row3].id
    ) {
      //payoutMultiplier += 1;
      spinResult.payoutMultiplier += 1;
      spinResult.col1Row3Match = true;
      spinResult.col2Row3Match = true;
      spinResult.col3Row3Match = true;
      console.log("bottom row match!");
      console.log(
        "col 1 row 3 :" + firstColumnImages[imageIndexForCol1Row3].id,
        "col 2 row 3" + secondColumnImages[imageIndexForCol2Row3].id,
        "col 3 row 3" + thirdColumnImages[imageIndexForCol3Row3].id
      );
    }

    if (
      firstColumnImages[imageIndexForCol1Row1].id ===
        secondColumnImages[imageIndexForCol2Row2].id &&
      firstColumnImages[imageIndexForCol1Row1].id ===
        thirdColumnImages[imageIndexForCol3Row3].id
    ) {
      //payoutMultiplier += 1;
      spinResult.payoutMultiplier += 1;
      spinResult.col1Row1Match = true;
      spinResult.col2Row2Match = true;
      spinResult.col3Row3Match = true;
      console.log("top left to bottom right diagonal match!");
      console.log(
        "col 1 row 1 :" + firstColumnImages[imageIndexForCol1Row1].id,
        "col 2 row 2" + secondColumnImages[imageIndexForCol2Row2].id,
        "col 3 row 3" + thirdColumnImages[imageIndexForCol3Row3].id
      );
    }

    if (
      firstColumnImages[imageIndexForCol1Row3].id ===
        secondColumnImages[imageIndexForCol2Row2].id &&
      firstColumnImages[imageIndexForCol1Row3].id ===
        thirdColumnImages[imageIndexForCol3Row1].id
    ) {
      //payoutMultiplier += 1;
      spinResult.payoutMultiplier += 1;
      spinResult.col1Row3Match = true;
      spinResult.col2Row2Match = true;
      spinResult.col3Row1Match = true;
      console.log("top row match!");
      console.log(
        "col 1 row 3 :" + firstColumnImages[imageIndexForCol1Row3].id,
        "col 2 row 2" + secondColumnImages[imageIndexForCol2Row2].id,
        "col 3 row 1" + thirdColumnImages[imageIndexForCol3Row1].id
      );
    }

    return spinResult;
  };

  const spinResults = () => {
    let results = calculateResults();
    userDispatch({ type: "CALC_SPIN_RESULTS", payload: results });
  };

  let timingColumn1 = getTiming();
  let timingColumn2 = getTiming();
  let timingColumn3 = getTiming();

  let arrayOfTimingsToStopSpinner = [8, 9, 10];

  const startSpinnerHandler = (e) => {
    console.log("started spinning!");
    userState.bet && clickSpinAudio.play();
    setSlotsAreSpinning(true);
    subtractBetFromUser();
    const spinner1Timer = setInterval(firstColumnSpinner, timingColumn1);
    const spinner2Timer = setInterval(secondColumnSpinner, timingColumn2);
    const spinner3Timer = setInterval(thirdColumnSpinner, timingColumn3);
    setTimeout(() => {
      slotsSpinningAudio.play();
    }, 500);

    // time until the first column stops spinning
    let stopTime = arrayOfTimingsToStopSpinner[Math.floor(Math.random() * 3)] * 1000;

    // first column timeout
    setTimeout(() => {
      clearSingleSpinnerTimer(spinner1Timer);
      singleSlotStop.pause();
      singleSlotStop.currentTime = 0;
      singleSlotStop.play();
    }, stopTime);
    // second column timeout
    setTimeout(() => {
      clearSingleSpinnerTimer(spinner2Timer);
      singleSlotStop.pause();
      singleSlotStop.currentTime = 0;
      singleSlotStop.play();
    }, stopTime + 1000);
    // third column timeout
    setTimeout(() => {
      clearSingleSpinnerTimer(spinner3Timer);
      singleSlotStop.pause();
      singleSlotStop.currentTime = 0;
      singleSlotStop.play();
    }, stopTime + 2000);

    
    setTimeout(() => {
      console.log("stopped spinning!");
      setSlotsAreSpinning(false);
       setSpinCount((state) => {
         return (state += 1);
       });
    }, stopTime + 2001);

    // setTimeout(() => {
    //   clearAllSpinnerTimers(spinner1Timer, spinner2Timer, spinner3Timer);
    //   console.log("stopped spinning!");
    //   setSlotsAreSpinning(false);
    //   setSpinCount((state) => {
    //     return (state += 1);
    //   });
    // }, 12000);
  };

  return (
    <>
      <div className={classes["main-container"]}>
        <div className={classes["user-bar-container"]}>
          <UserBar availableCash={userState.cash} currentBet={userState.bet} />
        </div>
        <div className={classes["rows-container"]}>
          <SlotColumn
            rowMatches={arrayOfCol1Matches}
            timing={timingColumn1}
            slotsAreSpinning={slotsAreSpinning}
            slotImages={arrayOfCol1ImageIndexes}
            images={firstColumnImages}
          />
          <SlotColumn
            rowMatches={arrayOfCol2Matches}
            slotsAreSpinning={slotsAreSpinning}
            timing={timingColumn2}
            slotImages={arrayOfCol2ImageIndexes}
            images={secondColumnImages}
          />
          <SlotColumn
            rowMatches={arrayOfCol3Matches}
            slotsAreSpinning={slotsAreSpinning}
            timing={timingColumn3}
            slotImages={arrayOfCol3ImageIndexes}
            images={thirdColumnImages}
          />
        </div>
        <div className={classes["options-container"]}>
          <OptionContainer
            onUserBet={userBetHandler}
            onStartSpinner={startSpinnerHandler}
            hasPlacedBet={!userState.bet}
            slotsAreSpinning={slotsAreSpinning}
          />
        </div>
      </div>
    </>
  );
};

export default SlotMachine;
