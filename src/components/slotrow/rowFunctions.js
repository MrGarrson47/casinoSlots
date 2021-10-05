import classes from "./SlotRow.module.css";

export const getTimingClass = (timing) => {
    let timingClass;

  if (timing === 300) {
    timingClass = classes["timing-1"];
  }
  if (timing === 380) {
    timingClass = classes["timing-2"];
  }
  if (timing === 460) {
    timingClass = classes["timing-3"];
  }
  return timingClass;
};

export const getTimingStates = (timing) => {
  return {
    appear: 0,
    enter: timing / 2,
    exit: timing / 2,
  };
};

export const getRowMatchClass = (colPosition)=>{
  let rowMatchClass;
  if(colPosition.col === 1){
    rowMatchClass = [classes["row-match"], classes["match-as-first-symbol"]].join(" ");
  }
  if(colPosition.col === 2){
    rowMatchClass = [classes["row-match"], classes["match-as-second-symbol"]].join(" ");
  }
  if(colPosition.col === 3){
    rowMatchClass = [classes["row-match"], classes["match-as-third-symbol"]].join(" ");
  }
  return rowMatchClass;
}

export const handleTransition = (state, nodeRef, src, timingClass, rowMatchClass, rowIsAMatch, imgContainerClasses) => {
  if (state === "entering") {
    imgContainerClasses = [classes["img-enter"], timingClass].join(
      " "
    );
  }
  if (state === "exiting") {
    imgContainerClasses = [classes["img-exit"], timingClass].join(
      " "
    );
  }
  if (rowIsAMatch) {
    imgContainerClasses = [
      classes["slot-img-container"],
      rowMatchClass,
    ].join(" ");
  }
  return (
    <div ref={nodeRef} className={imgContainerClasses}>
      <img ref={nodeRef} className={classes["slot-img"]} src={src} />
    </div>
  );
}
