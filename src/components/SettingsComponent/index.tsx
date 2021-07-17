import React, { ChangeEvent, ReactElement } from "react";
import style from "./settings.module.css";
import RangeSlider from "../RangeSlider";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div className={style["container"]}>
              <div className={style["heading"]}>Settings</div>
      <div className={style["opacity"]}>
        <p>Opacity</p>
        <RangeSlider />
      </div>
    </div>
  );
}
