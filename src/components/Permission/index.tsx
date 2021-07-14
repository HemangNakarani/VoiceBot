import React, { ReactElement } from "react";
import style from "./permission.module.css";
import MicrophoneBlockedIcon from "../../assets/microphone-blocked.png";
import NotSecureIcon from '../../assets/info-icon.png'

export default function ListeningAnimation(): ReactElement {
  return (
    <>
      <div className={style["permission-container"]}>
        <div className={style["message-container"]}>
          <img
            className={style["mic-icon"]}
            src={MicrophoneBlockedIcon}
            width="150"
          />

          <div className={style["message-heading"]}>Enable Microphone</div>

          <div className={style["message-description"]}>
            Please provide us access to your microphone, which is required for
            VoiceBot.
          </div>

          <div className={style["not-allow"]}>You can go to site setting and enable the microphone.</div>
        </div>
      </div>
    </>
  );
}
