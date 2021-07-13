import React, { ChangeEvent, ReactElement } from "react";
import style from "./slider.module.css";

interface Props {}

export default function Slider({}: Props): ReactElement {
  let app = document.querySelector("#my-extension-root") as HTMLElement;

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    app.style.opacity = e.target.value;
  }

  return (
    <div>
      <input
        className={style["voicebot-slider"]}
        type="range"
        min="0.5"
        max="1"
        defaultValue="1"
        step="0.01"
        onChangeCapture={handleInput}
      />
    </div>
  );
}
