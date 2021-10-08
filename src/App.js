import "./App.css";
import { useState } from "react";
import SlotMachine from "./components/slotmachine/SlotMachine";
import StartScreen from "./components/startscreen/StartScreen";

function App() {
  const [openGame, setOpenGame] = useState(false);

  const startGameHandler = (e)=>{
    setOpenGame(true);
  }

  return (
    <>
    {openGame ? <SlotMachine /> : <StartScreen onStartGame={startGameHandler}/>}
      
    </>
  );
}

export default App;
