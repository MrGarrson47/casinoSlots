import { useReducer } from "react";

const userReducer = (state, action) => {
  if (action.type === "SHOW_PAYLINES") {
    return {
      ...state,
      showPaylines: action.payload,
    };
  }
  if (action.type === "SELECT_AMOUNT_LINES") {
    return {
      ...state,
      amountOfLines: action.payload,
      bet: state.perLineBet * action.payload,
    };
  }
  if (action.type === "PLACE_BET") {
    return {
      ...state,
      cash: state.cash,
      bet: action.payload * state.amountOfLines,
      perLineBet: action.payload,
    };
  }
  if (action.type === "COMMIT_BET") {
    return {
      ...state,
      showPaylines: false,
      cash: state.cash - state.bet,
      payline1MatchDouble: false,
      payline1MatchTriple: false,
      payline2MatchDouble: false,
      payline2MatchTriple: false,
      payline3MatchDouble: false,
      payline3MatchTriple: false,
      payline4MatchDouble: false,
      payline4MatchTriple: false,
      payline5MatchDouble: false,
      payline5MatchTriple: false,
      payline6MatchDouble: false,
      payline6MatchTriple: false,
      payline7MatchDouble: false,
      payline7MatchTriple: false,
      col1Row1Match: false,
      col1Row2Match: false,
      col1Row3Match: false,
      col2Row1Match: false,
      col2Row2Match: false,
      col2Row3Match: false,
      col3Row1Match: false,
      col3Row2Match: false,
      col3Row3Match: false,
      foundMatch: null,
    };
  }

  if (action.type === "NEW_CALC_SPIN_RESULTS") {
    return {
      ...state,
      totalWinnings: action.payload.payout,
      cash: state.cash + action.payload.payout,
      ...action.payload.matches,
      ...action.payload.paylineMatches,
      foundMatch: action.payload.payout > 0 ? "match" : "noMatch",
    };
  }
};

const initialUserReducerState = {
  totalWinnings: 0,
  cash: 500,
  bet: NaN,
  perLineBet: 0.2,
  amountOfLines: "Select Paylines",
  showPaylines: true,
  payline1MatchDouble: false,
  payline1MatchTriple: false,
  payline2MatchDouble: false,
  payline2MatchTriple: false,
  payline3MatchDouble: false,
  payline3MatchTriple: false,
  payline4MatchDouble: false,
  payline4MatchTriple: false,
  payline5MatchDouble: false,
  payline5MatchTriple: false,
  payline6MatchDouble: false,
  payline6MatchTriple: false,
  payline7MatchDouble: false,
  payline7MatchTriple: false,
  col1Row1Match: false,
  col1Row2Match: false,
  col1Row3Match: false,
  col2Row1Match: false,
  col2Row2Match: false,
  col2Row3Match: false,
  col3Row1Match: false,
  col3Row2Match: false,
  col3Row3Match: false,
  foundMatch: null,
};

export const useSlotReducerHandler = () => {
  const [userState, userDispatch] = useReducer(
    userReducer,
    initialUserReducerState
  );

  const newBetHandler = (e) => {
    if (e.target.value < 0.2) {
      userDispatch({ type: "PLACE_BET", payload: 0.2 });
    } else {
      userDispatch({ type: "PLACE_BET", payload: e.target.value });
    }
  };

  const subtractBetFromUser = () => {
    userDispatch({ type: "COMMIT_BET" });
  };

  const linesSelectHandler = (e) => {
    userDispatch({ type: "SHOW_PAYLINES", payload: true });
    userDispatch({ type: "SELECT_AMOUNT_LINES", payload: e.target.value });
  };

  const arrayOfCol1Matches = [
    userState.col1Row1Match,
    userState.col1Row2Match,
    userState.col1Row3Match,
  ];

  const arrayOfCol2Matches = [
    userState.col2Row1Match,
    userState.col2Row2Match,
    userState.col2Row3Match,
  ];

  const arrayOfCol3Matches = [
    userState.col3Row1Match,
    userState.col3Row2Match,
    userState.col3Row3Match,
  ];

  return {
    arrayOfCol1Matches,
    arrayOfCol2Matches,
    arrayOfCol3Matches,
    payline1MatchDouble: userState.payline1MatchDouble,
    payline2MatchDouble: userState.payline2MatchDouble,
    payline3MatchDouble: userState.payline3MatchDouble,
    payline4MatchDouble: userState.payline4MatchDouble,
    payline5MatchDouble: userState.payline5MatchDouble,
    payline6MatchDouble: userState.payline6MatchDouble,
    payline7MatchDouble: userState.payline7MatchDouble,
    payline1MatchTriple: userState.payline1MatchTriple,
    payline2MatchTriple: userState.payline2MatchTriple,
    payline3MatchTriple: userState.payline3MatchTriple,
    payline4MatchTriple: userState.payline4MatchTriple,
    payline5MatchTriple: userState.payline5MatchTriple,
    payline6MatchTriple: userState.payline6MatchTriple,
    payline7MatchTriple: userState.payline7MatchTriple,
    userState,
    newBetHandler,
    linesSelectHandler,
    subtractBetFromUser,
    userDispatch
  };
};
