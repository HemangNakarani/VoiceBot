import React, { ReactElement } from "react";
import style from "./App.module.css";
import VoiceCommandInterface from "./components/VoiceCommandInterface";

export default function App(): ReactElement {
  return (
    <div className={style.App}>
      <VoiceCommandInterface/>
    </div>
  );
}
