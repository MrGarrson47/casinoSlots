import {useState} from "react";
import { allImageObjects } from "../../slotImages";

export const getArrayOfRandomImageObjects = () => {
    let arrayOfImageObjects = [];
    for(let i = 0; i < 10; i++){
        arrayOfImageObjects.push(allImageObjects[Math.floor(Math.random() * 84)]);
    }
    return arrayOfImageObjects;
};

export const useEachColumnImageObjects = ()=>{
    const [col1ArrayOfImageObjects, setCol1ArrayOfImageObjects] = useState(getArrayOfRandomImageObjects());
    const [col2ArrayOfImageObjects, setCol2ArrayOfImageObjects] = useState(getArrayOfRandomImageObjects());
    const [col3ArrayOfImageObjects, setCol3ArrayOfImageObjects] = useState(getArrayOfRandomImageObjects());

    const setRandomImageObjectsForColumns = ()=>{
        setCol1ArrayOfImageObjects(getArrayOfRandomImageObjects());
        setCol2ArrayOfImageObjects(getArrayOfRandomImageObjects());
        setCol3ArrayOfImageObjects(getArrayOfRandomImageObjects());
      }

      return{
        col1ArrayOfImageObjects,
        col2ArrayOfImageObjects,
        col3ArrayOfImageObjects,
        setRandomImageObjectsForColumns
      }
}

