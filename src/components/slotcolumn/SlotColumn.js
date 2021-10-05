import SlotRow from "../slotrow/SlotRow";
import { getMainContainerClass } from "./columnFunctions";
import classes from "./SlotColumn.module.css";

const SlotColumn = (props) => {
  const { images, rowMatches, colPosition, flashTiming, slotsAreSpinning} = props;
  const [slotRowImage1, slotRowImage2, slotRowImage3] = props.slotImages;

  let mainContainerClasses = [classes["main-container"], classes["col-stop-animation"]].join(" ");

  mainContainerClasses = getMainContainerClass(slotsAreSpinning, flashTiming, mainContainerClasses);

  return (
    <>
      <div className={mainContainerClasses}>
        <SlotRow
          colPosition={{col: colPosition, row: 1}}
          rowIsAMatch={rowMatches[0]}
          timing={props.timing}
          src={images[slotRowImage1].src}
          imageIndex={slotRowImage1}
        />
        <SlotRow
          colPosition={{col: colPosition, row: 2}}
          rowIsAMatch={rowMatches[1]}
          timing={props.timing}
          src={images[slotRowImage2].src}
          imageIndex={slotRowImage2}
        />
        <SlotRow
          colPosition={{col: colPosition, row: 3}}
          rowIsAMatch={rowMatches[2]}
          timing={props.timing}
          src={images[slotRowImage3].src}
          imageIndex={slotRowImage3}
        />
      </div>
    </>
  );
};

export default SlotColumn;
