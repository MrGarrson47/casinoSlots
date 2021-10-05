import classes from "./SlotColumn.module.css";

export const getMainContainerClass = (
  slotsAreSpinning,
  flashTiming,
  mainContainerClasses
) => {
  if (slotsAreSpinning) {
    if (flashTiming === 2000) {
      mainContainerClasses = [
        classes["main-container"],
        classes["col-flash-animation"],
        classes["timing-1"],
      ].join(" ");
    }
    if (flashTiming === 3000) {
      mainContainerClasses = [
        classes["main-container"],
        classes["col-flash-animation"],
        classes["timing-2"],
      ].join(" ");
    }
    if (flashTiming === 4000) {
      mainContainerClasses = [
        classes["main-container"],
        classes["col-flash-animation"],
        classes["timing-3"],
      ].join(" ");
    }
    if (flashTiming === 5000) {
      mainContainerClasses = [
        classes["main-container"],
        classes["col-flash-animation"],
        classes["timing-4"],
      ].join(" ");
    }
    if (flashTiming === 6000) {
      mainContainerClasses = [
        classes["main-container"],
        classes["col-flash-animation"],
        classes["timing-5"],
      ].join(" ");
    }
  }
  return mainContainerClasses;
};
