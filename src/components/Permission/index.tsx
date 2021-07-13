import React, { ReactElement } from "react";
import style from "./permission.module.css";
import MicrophoneBlockedIcon from "../../assets/microphone-blocked.png";
let MicrophoneBlocked = chrome.runtime.getURL(MicrophoneBlockedIcon);

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
            src={MicrophoneBlocked}
            width="150"
          />

          <div className={style["message-heading"]}>Enable Microphone</div>

          <div className={style["message-description"]}>
            Please provide us access to your microphone, which is required for
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
