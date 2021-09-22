import SlotRow from "../slotrow/SlotRow";
import classes from "./SlotColumn.module.css";

const SlotColumn = (props) => {
  const { images, rowMatches} = props;
  const [slotRowImage1, slotRowImage2, slotRowImage3] = props.slotImages;

  let mainContainerClasses = classes["main-container"];

  return (
    <>
      <div className={mainContainerClasses}>
        <SlotRow
          rowIsAMatch={rowMatches[0]}
          timing={props.timing}
          src={images[slotRowImage1].src}
          imageIndex={slotRowImage1}
        />
        <SlotRow
          rowIsAMatch={rowMatches[1]}
          timing={props.timing}
          src={images[slotRowImage2].src}
          imageIndex={slotRowImage2}
        />
        <SlotRow
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
