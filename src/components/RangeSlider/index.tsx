import React, { ChangeEvent, ReactElement } from "react";
import style from "./slider.module.css";

interface Props {}

export default function Slider({}: Props): ReactElement {
  let app = document.querySelector("#my-extension-root") as HTMLElement;

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    let value = e.target.value
    app.style.opacity = value;
    let scaled = (Number(value)-0.5)*200
    let color = `linear-gradient(90deg,rgb(28, 108, 253) ${scaled}% ,rgba(28, 108, 253, 0.1) ${scaled}%)`
    e.target.style.background = color
  }

  return (
    <div className={style["slider-container"]}>
      <input type="range" min="0.5" max="1" defaultValue="1" step="0.001" className={style["slider"]} onChangeCapture={handleInput}/>
    </div>
  );
}
