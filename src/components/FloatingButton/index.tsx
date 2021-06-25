import React, { ReactElement } from "react";
import style from "./floatingbutton.module.css";
import VoiceIcon from "../../assets/Voice.svg";
import Chevron from "../../assets/Chevron.svg";

interface IProps {
  opened: Boolean;
  toggle: Function;
}

export default function FloatingButton({
  opened,
  toggle,
}: IProps): ReactElement {
  return (
    <>
      <div
        className={style["floating-button"]}
        onClick={() => {
          toggle();
        }}
      >
        {opened ? (
          <img src={Chevron} alt="voice-icon" />
        ) : (
          <img src={VoiceIcon} alt="voice-icon" />
        )}
      </div>
    </>
  );
}
