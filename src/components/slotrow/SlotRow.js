import classes from "./SlotRow.module.css";
import Transition from "react-transition-group/Transition";
import { useEffect, useState, useRef } from "react";
import { playSingleRowMatchAudio } from "./singleRowMatchAudio";
import {
  getRowMatchClass,
  getTimingClass,
  getTimingStates,
  handleTransition,
} from "./rowFunctions";

const SlotRow = (props) => {
  const { src, timing, rowIsAMatch, colPosition } = props;

  const [imgSourceBoolean, setImgSourceBoolean] = useState(false);

  useEffect(() => {
    setImgSourceBoolean((state) => !state);
  }, [src]);

  const nodeRef = useRef(null);

  playSingleRowMatchAudio(colPosition, rowIsAMatch);

  let timingClass = getTimingClass(timing);

  let timingStates = getTimingStates(timing);

  let rowMatchClass = getRowMatchClass(colPosition);

  let imgContainerClasses = classes["slot-img-container"];

  return (
    <>
      <div className={classes["main-container"]}>
        <Transition
          in={imgSourceBoolean}
          nodeRef={nodeRef}
          timeout={timingStates}
        >
          {(state) => {
            return handleTransition(
              state,
              nodeRef,
              src,
              timingClass,
              rowMatchClass,
              rowIsAMatch,
              imgContainerClasses
            );
          }}
        </Transition>
      </div>
    </>
  );
};

export default SlotRow;
