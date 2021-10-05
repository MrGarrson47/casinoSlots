import containerClasses from "./PaylinesOverlay_containers.module.css";
import numberClasses from "./PaylinesOverlay_numbers.module.css";
import { getAllPaylineClasses } from "./paylineClasses";

const PaylinesOverlay = (props) => {

  const {showPaylines, amountOfLines, paylineMatches} = props;

  let {
    payline1Classes,
    payline2Classes,
    payline3Classes,
    payline4Classes,
    payline5Classes,
    payline6Section1Classes,
    payline6Section2Classes,
    payline6Section3Classes,
    payline6Section4Classes,
    payline6Section5Classes,
    payline7Section1Classes,
    payline7Section2Classes,
    payline7Section3Classes,
    payline7Section4Classes,
    payline7Section5Classes,
    paylineNumber6RightSideClasses,
    paylineNumber7RightSideClasses
} = getAllPaylineClasses(showPaylines, paylineMatches, amountOfLines);

  return (
    <>
      <div className={payline4Classes}></div>
      <div className={payline5Classes}></div>
      <div className={containerClasses["main-container"]}>
          {/* Top */}
        <div className={containerClasses["payline-main-container"]}>
          <div className={payline6Section3Classes}></div>
          <div className={containerClasses["payline-inner-container-top-left"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-4"]].join(" ")}>4</div>
          </div>
          <div className={containerClasses["payline-inner-container-top-right"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-5"]].join(" ")}>5</div>
          </div>
          <div className={containerClasses["payline-inner-container"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-1"]].join(" ")}>1</div>
            <div className={payline1Classes}></div>
            <div className={[numberClasses["payline-number"], numberClasses["number-1-right"]].join(" ")}>1</div>
          </div>
        </div>
        {/* Middle */}
        <div className={containerClasses["payline-main-container"]}>
        <div className={containerClasses["payline-inner-container"]} style={{justifyContent: "normal"}}>
            <div className={[numberClasses["payline-number"], numberClasses["number-6"]].join(" ")}>6</div>
            <div className={payline6Section1Classes}></div>
            <div className={payline6Section2Classes}></div>
            <div className={payline6Section4Classes}></div>
            <div className={[numberClasses["payline-number"], paylineNumber6RightSideClasses].join(" ")}>6</div>
            <div className={payline6Section5Classes}></div>
          </div>   
          <div className={containerClasses["payline-inner-container"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-2"]].join(" ")}>2</div>
            <div className={payline2Classes}></div>
            <div className={[numberClasses["payline-number"], numberClasses["number-2-right"]].join(" ")}>2</div>
          </div>   
          <div className={containerClasses["payline-inner-container"]} style={{justifyContent: "normal"}}>
            <div className={[numberClasses["payline-number"], numberClasses["number-7"]].join(" ")}>7</div>
            <div className={payline7Section1Classes}></div>
            <div className={payline7Section2Classes}></div>
            <div className={payline7Section4Classes}></div>
            <div className={[numberClasses["payline-number"], paylineNumber7RightSideClasses].join(" ")}>7</div>
            <div className={payline7Section5Classes}></div> 
          </div>
        </div>
        {/* Bottom */}
        <div className={containerClasses["payline-main-container"]}>
          <div className={payline7Section3Classes}></div>
          <div className={containerClasses["payline-inner-container"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-3"]].join(" ")}>3</div>
            <div className={payline3Classes}></div>
            <div className={[numberClasses["payline-number"], numberClasses["number-3-right"]].join(" ")}>3</div>
          </div>
          <div className={containerClasses["payline-inner-container-bottom-right"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-4"]].join(" ")}>4</div>
          </div>
          <div className={containerClasses["payline-inner-container-bottom-left"]}>
            <div className={[numberClasses["payline-number"], numberClasses["number-5"]].join(" ")}>5</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaylinesOverlay;
