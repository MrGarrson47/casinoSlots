const checkForWildCards = (imagesSourceArray) => {
  let copyOfImagesSourceArray = [...imagesSourceArray];
  let arrayOfWildCardIndexes = [];

  // get indexes for any wild card in the payline
  for (let i = 0; i < imagesSourceArray.length; i++) {
    if (imagesSourceArray[i] === "/puppypics/10.jpg") {
      arrayOfWildCardIndexes.push(i);
    }
  }

  // NNN, NNW, NWN, WNN, WNW, WWN, WWW, NWW

  // WWW or NNN
  // return the original sources if there are three wild cards or if there are no wild cards
  if (arrayOfWildCardIndexes.length === 3 || arrayOfWildCardIndexes.length === 0) {
    return imagesSourceArray;
  }

  // WNN
  // if a wild card is in first position and second position is a normal symbol and third position is a normal symbol,
  // change wild card in first position to symbol in second position
  if (
    arrayOfWildCardIndexes.includes(0) &&
    !arrayOfWildCardIndexes.includes(1) && !arrayOfWildCardIndexes.includes(2)
  ) {
    copyOfImagesSourceArray[0] = imagesSourceArray[1];
  }

  // WNW
  // if a wild card is in first position and second position is a normal symbol and third position is a wild card,
  // change wild card in first and third position to symbol in second position
  else if (
    arrayOfWildCardIndexes.includes(0) &&
    !arrayOfWildCardIndexes.includes(1) && arrayOfWildCardIndexes.includes(2)
  ) {
    copyOfImagesSourceArray[0] = imagesSourceArray[1];
    copyOfImagesSourceArray[2] = imagesSourceArray[1];
  }

  // WWN
  // if a wild card is in first position and second position is also a wild card,
  // change wild card in first and second position to symbol in third position
  else if (
    arrayOfWildCardIndexes.includes(0) &&
    arrayOfWildCardIndexes.includes(1)
  ) {
    copyOfImagesSourceArray[0] = imagesSourceArray[2];
    copyOfImagesSourceArray[1] = imagesSourceArray[2];
  }

  // NWN
  // if a normal symbol is in first position and second position is a wild card and third position is a normal symbol,
  // change wild card in second position to symbol in first position
  else if(arrayOfWildCardIndexes.includes(1) && !arrayOfWildCardIndexes.includes(0) && !arrayOfWildCardIndexes.includes(2)){
    copyOfImagesSourceArray[1] = imagesSourceArray[0];
  }

  // NNW
  // if a normal symbol is in first position and second position is a normal symbol and third position is a wild card,
  // change wild card in third position to symbol in second position
  else if(arrayOfWildCardIndexes.includes(2) && !arrayOfWildCardIndexes.includes(0) && !arrayOfWildCardIndexes.includes(1)){
    copyOfImagesSourceArray[2] = imagesSourceArray[1];
  }

  // NWW
  // if a normal symbol is in first position and second position is a wild card and third position is a wild card,
  // change wild card in second and third position to symbol in first position
  else if(!arrayOfWildCardIndexes.includes(0) && arrayOfWildCardIndexes.includes(1) && arrayOfWildCardIndexes.includes(2)){
    copyOfImagesSourceArray[1] = imagesSourceArray[0];
    copyOfImagesSourceArray[2] = imagesSourceArray[0]; 

  }

  return copyOfImagesSourceArray;

};

export const calcPayline1SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row1,
  imageIndexForCol2Row1,
  imageIndexForCol3Row1,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row1].src,
    secondColumnImages[imageIndexForCol2Row1].src,
    thirdColumnImages[imageIndexForCol3Row1].src,
  ]);

  let match2Payout = firstColumnImages[imageIndexForCol1Row1].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row1].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row1].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row1].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row1].src;

  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row1Match: true,
        col2Row1Match: true,
        col3Row1Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row1Match: true,
        col2Row1Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline2SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row2,
  imageIndexForCol2Row2,
  imageIndexForCol3Row2,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row2].src,
    secondColumnImages[imageIndexForCol2Row2].src,
    thirdColumnImages[imageIndexForCol3Row2].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row2].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row2].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row2].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row2].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row2].src;

  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row2Match: true,
        col3Row2Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row2Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline3SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row3,
  imageIndexForCol2Row3,
  imageIndexForCol3Row3,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row3].src,
    secondColumnImages[imageIndexForCol2Row3].src,
    thirdColumnImages[imageIndexForCol3Row3].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row3].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row3].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row3].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row3].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row3].src;
  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row3Match: true,
        col2Row3Match: true,
        col3Row3Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row3Match: true,
        col2Row3Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline4SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row1,
  imageIndexForCol2Row2,
  imageIndexForCol3Row3,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row1].src,
    secondColumnImages[imageIndexForCol2Row2].src,
    thirdColumnImages[imageIndexForCol3Row3].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row1].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row1].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row1].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row2].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row3].src;
  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row1Match: true,
        col2Row2Match: true,
        col3Row3Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row1Match: true,
        col2Row2Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline5SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row3,
  imageIndexForCol2Row2,
  imageIndexForCol3Row1,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row3].src,
    secondColumnImages[imageIndexForCol2Row2].src,
    thirdColumnImages[imageIndexForCol3Row1].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row3].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row3].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row3].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row2].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row1].src;
  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row3Match: true,
        col2Row2Match: true,
        col3Row1Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row3Match: true,
        col2Row2Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline6SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row2,
  imageIndexForCol2Row1,
  imageIndexForCol3Row2,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row2].src,
    secondColumnImages[imageIndexForCol2Row1].src,
    thirdColumnImages[imageIndexForCol3Row2].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row2].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row2].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row2].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row1].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row2].src;
  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row1Match: true,
        col3Row2Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row1Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcPayline7SpinResults = (
  firstColumnImages,
  secondColumnImages,
  thirdColumnImages,
  imageIndexForCol1Row2,
  imageIndexForCol2Row3,
  imageIndexForCol3Row2,
  userState
) => {
  let [src1, src2, src3] = checkForWildCards([
    firstColumnImages[imageIndexForCol1Row2].src,
    secondColumnImages[imageIndexForCol2Row3].src,
    thirdColumnImages[imageIndexForCol3Row2].src
  ])

  let match2Payout = firstColumnImages[imageIndexForCol1Row2].match2Payout;
  let match3Payout = firstColumnImages[imageIndexForCol1Row2].match3Payout;
  // let src1 = firstColumnImages[imageIndexForCol1Row2].src;
  // let src2 = secondColumnImages[imageIndexForCol2Row3].src;
  // let src3 = thirdColumnImages[imageIndexForCol3Row2].src;
  if (src1 === src2 && src1 === src3) {
    return {
      payout: match3Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row3Match: true,
        col3Row2Match: true,
      },
      paylineMatchTriple: true,
      paylineMatchDouble: false,
    };
  } else if (src1 === src2) {
    return {
      payout: match2Payout * userState.perLineBet,
      matches: {
        col1Row2Match: true,
        col2Row3Match: true,
      },
      paylineMatchDouble: true,
      paylineMatchTriple: false,
    };
  } else {
    return {
      payout: 0,
      matches: null,
      paylineMatchDouble: false,
      paylineMatchTriple: false,
    };
  }
};

export const calcSpinResults = (
  userState,
  col1ArrayOfImageObjects,
  col2ArrayOfImageObjects,
  col3ArrayOfImageObjects,
  imageIndexForCol1Row1,
  imageIndexForCol1Row2,
  imageIndexForCol1Row3,
  imageIndexForCol2Row1,
  imageIndexForCol2Row2,
  imageIndexForCol2Row3,
  imageIndexForCol3Row1,
  imageIndexForCol3Row2,
  imageIndexForCol3Row3
) => {
  let {
    payout: line1Payout,
    matches: line1Matches,
    paylineMatchDouble: payline1MatchDouble,
    paylineMatchTriple: payline1MatchTriple,
  } = calcPayline1SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row1,
    imageIndexForCol2Row1,
    imageIndexForCol3Row1,
    userState
  );
  let {
    payout: line2Payout,
    matches: line2Matches,
    paylineMatchDouble: payline2MatchDouble,
    paylineMatchTriple: payline2MatchTriple,
  } = calcPayline2SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row2,
    imageIndexForCol2Row2,
    imageIndexForCol3Row2,
    userState
  );
  let {
    payout: line3Payout,
    matches: line3Matches,
    paylineMatchDouble: payline3MatchDouble,
    paylineMatchTriple: payline3MatchTriple,
  } = calcPayline3SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row3,
    imageIndexForCol2Row3,
    imageIndexForCol3Row3,
    userState
  );
  let {
    payout: line4Payout,
    matches: line4Matches,
    paylineMatchDouble: payline4MatchDouble,
    paylineMatchTriple: payline4MatchTriple,
  } = calcPayline4SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row1,
    imageIndexForCol2Row2,
    imageIndexForCol3Row3,
    userState
  );
  let {
    payout: line5Payout,
    matches: line5Matches,
    paylineMatchDouble: payline5MatchDouble,
    paylineMatchTriple: payline5MatchTriple,
  } = calcPayline5SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row3,
    imageIndexForCol2Row2,
    imageIndexForCol3Row1,
    userState
  );
  let {
    payout: line6Payout,
    matches: line6Matches,
    paylineMatchDouble: payline6MatchDouble,
    paylineMatchTriple: payline6MatchTriple,
  } = calcPayline6SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row2,
    imageIndexForCol2Row1,
    imageIndexForCol3Row2,
    userState
  );
  let {
    payout: line7Payout,
    matches: line7Matches,
    paylineMatchDouble: payline7MatchDouble,
    paylineMatchTriple: payline7MatchTriple,
  } = calcPayline7SpinResults(
    col1ArrayOfImageObjects,
    col2ArrayOfImageObjects,
    col3ArrayOfImageObjects,
    imageIndexForCol1Row2,
    imageIndexForCol2Row3,
    imageIndexForCol3Row2,
    userState
  );

  if (userState.amountOfLines === "3") {
    return {
      payout: line1Payout + line2Payout + line3Payout,
      matches: {
        ...line1Matches,
        ...line2Matches,
        ...line3Matches,
      },
      paylineMatches: {
        payline1MatchDouble,
        payline1MatchTriple,
        payline2MatchDouble,
        payline2MatchTriple,
        payline3MatchDouble,
        payline3MatchTriple,
      },
    };
  } else if (userState.amountOfLines === "5") {
    return {
      payout:
        line1Payout + line2Payout + line3Payout + line4Payout + line5Payout,
      matches: {
        ...line1Matches,
        ...line2Matches,
        ...line3Matches,
        ...line4Matches,
        ...line5Matches,
      },
      paylineMatches: {
        payline1MatchDouble,
        payline1MatchTriple,
        payline2MatchDouble,
        payline2MatchTriple,
        payline3MatchDouble,
        payline3MatchTriple,
        payline4MatchDouble,
        payline4MatchTriple,
        payline5MatchDouble,
        payline5MatchTriple,
      },
    };
  } else if (userState.amountOfLines === "7") {
    return {
      payout:
        line1Payout +
        line2Payout +
        line3Payout +
        line4Payout +
        line5Payout +
        line6Payout +
        line7Payout,
      matches: {
        ...line1Matches,
        ...line2Matches,
        ...line3Matches,
        ...line4Matches,
        ...line5Matches,
        ...line6Matches,
        ...line7Matches,
      },
      paylineMatches: {
        payline1MatchDouble,
        payline1MatchTriple,
        payline2MatchDouble,
        payline2MatchTriple,
        payline3MatchDouble,
        payline3MatchTriple,
        payline4MatchDouble,
        payline4MatchTriple,
        payline5MatchDouble,
        payline5MatchTriple,
        payline6MatchDouble,
        payline6MatchTriple,
        payline7MatchDouble,
        payline7MatchTriple,
      },
    };
  } else {
    return {
      payout: 0,
      matches: {
        col1Row1Match: false,
        col1Row2Match: false,
        col1Row3Match: false,
        col2Row1Match: false,
        col2Row2Match: false,
        col2Row3Match: false,
        col3Row1Match: false,
        col3Row2Match: false,
        col3Row3Match: false,
      },
      paylineMatches: {
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
      },
    };
  }
};
