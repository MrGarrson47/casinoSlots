import { useState } from "react";

const columnSpinnerStateAdjustor = (fn1, fn2, fn3) => {
  return () => {
    fn1((state) => {
      if (state === 0) {
        return 9;
      } else {
        return state - 1;
      }
    });

    fn2((state) => {
      if (state === 0) {
        return 9;
      } else {
        return state - 1;
      }
    });

    fn3((state) => {
      if (state === 0) {
        return 9;
      } else {
        return state - 1;
      }
    });
  };
};

export const useImageHandlerFunctions = (userState) => {
  const [imageIndexForCol1Row1, setImageIndexForCol1Row1] = useState(3);
  const [imageIndexForCol1Row2, setImageIndexForCol1Row2] = useState(4);
  const [imageIndexForCol1Row3, setImageIndexForCol1Row3] = useState(5);

  const [imageIndexForCol2Row1, setImageIndexForCol2Row1] = useState(3);
  const [imageIndexForCol2Row2, setImageIndexForCol2Row2] = useState(4);
  const [imageIndexForCol2Row3, setImageIndexForCol2Row3] = useState(5);

  const [imageIndexForCol3Row1, setImageIndexForCol3Row1] = useState(3);
  const [imageIndexForCol3Row2, setImageIndexForCol3Row2] = useState(4);
  const [imageIndexForCol3Row3, setImageIndexForCol3Row3] = useState(5);
  
  const firstColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol1Row1,
    setImageIndexForCol1Row2,
    setImageIndexForCol1Row3
  );
  const secondColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol2Row1,
    setImageIndexForCol2Row2,
    setImageIndexForCol2Row3
  );
  const thirdColumnSpinner = columnSpinnerStateAdjustor(
    setImageIndexForCol3Row1,
    setImageIndexForCol3Row2,
    setImageIndexForCol3Row3
  );

  const arrayOfCol1ImageIndexes = [
    imageIndexForCol1Row1,
    imageIndexForCol1Row2,
    imageIndexForCol1Row3,
  ];
  const arrayOfCol2ImageIndexes = [
    imageIndexForCol2Row1,
    imageIndexForCol2Row2,
    imageIndexForCol2Row3,
  ];
  const arrayOfCol3ImageIndexes = [
    imageIndexForCol3Row1,
    imageIndexForCol3Row2,
    imageIndexForCol3Row3,
  ];

  return {
    firstColumnSpinner,
    secondColumnSpinner,
    thirdColumnSpinner,
    arrayOfCol1ImageIndexes,
    arrayOfCol2ImageIndexes,
    arrayOfCol3ImageIndexes,
    imageIndexForCol1Row1,
    imageIndexForCol1Row2,
    imageIndexForCol1Row3,
    imageIndexForCol2Row1,
    imageIndexForCol2Row2,
    imageIndexForCol2Row3,
    imageIndexForCol3Row1,
    imageIndexForCol3Row2,
    imageIndexForCol3Row3,
  };
};
