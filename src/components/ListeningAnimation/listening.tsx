import React, { ReactComponentElement, ReactElement } from "react";
import style from "./listeninganimation.module.css";



export default function ListeningAnimation(): ReactElement {
  return (
    <>
      <div className={style["dot-content"]} >
        <div className={[style["dot"], style["sky-blue-dot"]].join(" ")}></div>
        <div
          className={[style["dot"], style["sun-orange-dot"]].join(" ")}
        ></div>
        <div
          className={[style["dot"], style["earth-green-dot"]].join(" ")}
        ></div>
        <div
          className={[style["dot"], style["ocean-blue-dot"]].join(" ")}
        ></div>
      </div>
    </>
  );
}
