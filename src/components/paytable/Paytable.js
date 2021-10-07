import classes from "./Paytable.module.css";
import {firstColumnImages} from "../../slotImages";

const Paytable = () => {
  return (
    <>
      <div className={classes["main-container"]}>

        <h3 className={classes["rules-heading"]}>Rules</h3>
        <div className={classes["rules-container"]}>
          <h4 className={classes.heading}>Matching Symbols</h4>
          <ul className={classes["rules-list"]}>
            <li className={classes["rules-info"]}>To form a match, symbols must start on the left-hand reel!</li>
            <li className={classes["rules-info"]}>To form a match, symbols must be consecutive!</li>
            <li className={classes["rules-info"]}>Successful matches can be formed with 2 or 3 consecutive symbols, always starting from the left-hand reel!</li>
          </ul>

          <h4 className={classes.heading}>Pay Lines</h4>
          <ul className={classes["rules-list"]}>
            <li className={classes["rules-info"]}>There are 7 pay lines.</li>
            <li className={classes["rules-info"]}>A player can choose to play with 3, 5 or all 7 pay lines!</li>
            <li className={classes["rules-info"]}>The cost of a player's spin is the amount of lines chosen multiplied by the chosen bet eg. 3 pay lines chosen and bet is 0.2, spin cost is 0.6!</li>
          </ul>

          <h4 className={classes.heading}>Calculating Pay Outs</h4>
          <ul className={classes["rules-list"]}>
            <li className={classes["rules-info"]}>Each symbol has a different pay out rate for a double or triple match!</li>
            <li className={classes["rules-info"]}>Successful matches will pay the matching symbol's rate multiplied by the bet per pay line, not the total cost of the spin! </li> 
          </ul>

          <h4 className={classes.heading}>The Wild Card</h4>
          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]} style={{marginRight: 0}}>
                <img className={classes.img} src={firstColumnImages[9].src} />
            </div>
          </div>   
          <ul className={classes["rules-list"]}>
            <li className={classes["rules-info"]}>The wild card symbol will clone any non-wild-card symbol in its pay line, giving a player that receives it further chances at successful matches!</li>
            <li className={classes["rules-info"]}>The wild card symbol will clone the first available non-wild-card symbol in it's pay line, starting from the left.</li>
            <li className={classes["rules-info"]}>The wild card symbol's cloning is not limited to one pay line, and will clone for each pay line that intersects it! </li>
            <li className={classes["rules-info"]}>Three wild cards in a pay line will pay out a rate of 30 multiplied by the per line bet, but will still clone for any other pay lines that intersect them!</li>
            <li className={classes["rules-info"]}>The wild card symbol will clone scatter card symbols!</li>
          </ul>

          <h4 className={classes.heading}>The Scatter Card</h4>
          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]} style={{marginRight: 0}}>
                <img className={classes.img} src={firstColumnImages[10].src} />
            </div>
          </div>          
          <ul className={classes["rules-list"]}>
            <li className={classes["rules-info"]}>The scatter card symbol will award free spins to a player who receives it!</li>
            <li className={classes["rules-info"]}>The scatter card symbol does not need to form a match to award free spins!</li> 
            <li className={classes["rules-info"]}>The amount of free spins awarded to a player depends on the following: </li> 
            <ul className={classes["rules-list"]}>
              <li className={classes["rules-info"]}>The amount of scatter card symbols that are active</li>
              <li className={classes["rules-info"]}>The amount of pay lines that intersect a scatter card symbol</li>
            </ul>
            <li className={classes["rules-info"]}>For example: 1 scatter card symbol is active, and it is intersected by 2 pay lines, which will result in 2 free spins!</li> 
          </ul>
        </div>

        <h3 className={classes["rules-heading"]}>Pay Out Rates</h3>

        <div className={classes["matching-container"]}>

          <h3 className={classes.heading}>Double Trouble!</h3>
          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[0].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[0].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>3 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[1].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[1].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>4 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[2].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[2].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>5 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[3].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[3].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>6 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[4].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[4].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>7 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[5].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[5].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>8 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[6].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[6].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>12 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[7].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[7].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>14 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[8].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[8].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>16 * Line Cost</p>
          </div>

        </div>

        <div className={classes["matching-container"]}>
        <h3 className={classes.heading}>Triple Threat!</h3>

        <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[0].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[0].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[0].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>5 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[1].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[1].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[1].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>6 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[2].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[2].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[2].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>7 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[3].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[3].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[3].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>8 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[4].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[4].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[4].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>9 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[5].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[5].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[5].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>10 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[6].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[6].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[6].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>14 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[7].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[7].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[7].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>16 * Line Cost</p>
          </div>

          <div className={classes["inner-container"]}>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[8].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[8].src} />
            </div>
            <p className={classes["plus-character"]}>+</p>
            <div className={classes["img-container"]}>
              <img className={classes.img} src={firstColumnImages[8].src} />
            </div>
            <p className={classes["equals-character"]}>=</p>
            <p className={classes["payout-info"]}>18 * Line Cost</p>
          </div>


        </div>

      </div>
    </>
  );
};

export default Paytable;
