import { useState } from "react";

const timings = [300, 380, 460];

const getTiming = () => {
  return timings[Math.floor(Math.random() * 3)];
};

let arrayOfTimingsToStopSpinner = [2, 3, 4];

export const useTimerHandlerFunctions = (imageIndexHandler, singleSlotStop, slotsSpinningAudio) => {
  const [spinCount, setSpinCount] = useState(0);

  const [slotsAreSpinning, setSlotsAreSpinning] = useState(false);

  const [col1SpinningFlashTiming, setCol1SpinningFlashTiming] = useState(0);
  const [col2SpinningFlashTiming, setCol2SpinningFlashTiming] = useState(0);
  const [col3SpinningFlashTiming, setCol3SpinningFlashTiming] = useState(0);

  let timingColumn1 = getTiming();
  let timingColumn2 = getTiming();
  let timingColumn3 = getTiming();

  // time until the first column stops spinning
  let stopTime =
    arrayOfTimingsToStopSpinner[Math.floor(Math.random() * 3)] * 1000;

  const setFlashSpinnerTimers = () => {
    setCol1SpinningFlashTiming(stopTime);
    setCol2SpinningFlashTiming(stopTime + 1000);
    setCol3SpinningFlashTiming(stopTime + 2000);
  };

  const clearSingleSpinnerTimer = (timer) => {
    clearInterval(timer);
  };

  const setAllColumnSpinnerTimers = () => {

    const spinner1Timer = setInterval(
      imageIndexHandler.firstColumnSpinner,
      timingColumn1
    );
    const spinner2Timer = setInterval(
      imageIndexHandler.secondColumnSpinner,
      timingColumn2
    );
    const spinner3Timer = setInterval(
      imageIndexHandler.thirdColumnSpinner,
      timingColumn3
    );

    setTimeout(() => {
      slotsSpinningAudio.play();
    }, 500);

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

    // all reels have stopped spinning, calc spin results by increasing spin count state which initiates a useEffect
    setTimeout(() => {
      setSlotsAreSpinning(false);
      setSpinCount((state) => {
        return (state += 1);
      });
    }, stopTime + 2150);
  };

  return {
    col1SpinningFlashTiming,
    col2SpinningFlashTiming,
    col3SpinningFlashTiming,
    spinCount,
    slotsAreSpinning,
    timingColumn1,
    timingColumn2,
    timingColumn3,
    setAllColumnSpinnerTimers,
    setFlashSpinnerTimers,
    setSlotsAreSpinning
  };
};
