import React from "react";
import style from "./App.module.css";
import BotInterface from "./components/BotInterface";
import VoiceCommandInterface from "./components/VoiceCommandInterface";
import Navigator from "./assets/navigator.gif";

function App() {
  return (
    <>
      <div className={style["App"]}>
        <img src={Navigator} alt="navigator-gif"></img>
        <div className={style.title}>Say hello to VoiceBot !</div>
      </div>
      <BotInterface>
        <VoiceCommandInterface />
      </BotInterface>
    </>
  );
}

export default App;
