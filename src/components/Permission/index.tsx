import React, { ReactElement } from "react";
import style from "./permission.module.css";

function getPermission() {
  chrome.runtime.sendMessage(chrome.runtime.id, {
    type: "OPEN_WEBSITE_SETTINGS",
  });
}

export default function ListeningAnimation(): ReactElement {
  return (
    <>
      <div className={style["permission-container"]}>
        <div className={style["message-container"]}>
          <img
            className={style["mic-icon"]}
            src="https://i.ibb.co/rk9JnrK/check.png"
            width="150"
          />

          <div className={style["message-heading"]}>Enable Microphone</div>

          <div className={style["message-description"]}>
            Please provide us acces to your microphone, which is required for
            VoiceBot.
          </div>

          <button className={style["btn-setting"]} onClick={getPermission}>
            GO TO SETTINGS
          </button>
          <p className={style["not-allow"]}>Microphone &gt; Allow</p>
        </div>
      </div>
    </>
  );
}
