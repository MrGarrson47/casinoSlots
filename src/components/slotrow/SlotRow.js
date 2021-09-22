import classes from "./SlotRow.module.css";
import Transition from "react-transition-group/Transition";
import { useEffect, useState, useRef } from "react";

const SlotRow = (props) => {
  const { src, timing, rowIsAMatch } = props;

  const [imgSourceBoolean, setImgSourceBoolean] = useState(false);
  
  useEffect(() => {
    setImgSourceBoolean((state) => !state);
  }, [src]);

  const nodeRef = useRef(null);

  let mainContainerClasses = classes["main-container"];

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

  let imgContainerClasses = classes["slot-img-container"];

  let timingStates = {
    appear: 0,
    enter: timing / 2,
    exit: timing / 2,
  };

  return (
    <>
      <div className={mainContainerClasses}>
        <Transition in={imgSourceBoolean} nodeRef={nodeRef} timeout={timingStates}>
          {(state) => {
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
                classes["row-match"],
              ].join(" ");
            }
            return (
              <div ref={nodeRef} className={imgContainerClasses}>
                <img ref={nodeRef} className={classes["slot-img"]} src={src} />
              </div>
            );
          }}
        </Transition>
      </div>
    </>
  );
};

export default SlotRow;
