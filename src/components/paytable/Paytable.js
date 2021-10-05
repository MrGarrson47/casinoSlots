import classes from "./Paytable.module.css";
import {firstColumnImages} from "../../slotImages";

const Paytable = () => {
  return (
    <>
      <div className={classes["main-container"]}>
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
            <p className={classes["payout-info"]}>1.5 * Line Cost</p>
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
            <p className={classes["payout-info"]}>1.6 * Line Cost</p>
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
            <p className={classes["payout-info"]}>1.7 * Line Cost</p>
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
            <p className={classes["payout-info"]}>1.8 * Line Cost</p>
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
            <p className={classes["payout-info"]}>1.9 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.0 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.1 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.2 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.3 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.4 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.5 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.6 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.7 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.8 * Line Cost</p>
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
            <p className={classes["payout-info"]}>2.9 * Line Cost</p>
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
            <p className={classes["payout-info"]}>3.0 * Line Cost</p>
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
            <p className={classes["payout-info"]}>3.1 * Line Cost</p>
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
            <p className={classes["payout-info"]}>3.2 * Line Cost</p>
          </div>


        </div>

      </div>
    </>
  );
};

export default Paytable;
