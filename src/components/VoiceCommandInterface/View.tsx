import React from "react";

import style from "./voicecommandinterface.module.css";
import MicrophoneIcon from "../../assets/Microphone.svg";
import SprinklrLogoIcon from "../../assets/SprinklrLogo.svg";
import ListeningAnimation from "../ListeningAnimation/listening";
import Permission from "../Permission/index";
let Microphone = chrome.runtime.getURL(MicrophoneIcon);
let SprinklrLogo = chrome.runtime.getURL(SprinklrLogoIcon);

import { SpeechStateEnum, ViewProps } from "./types";

const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ speechState, speechText, microphonePermitted, Recognition }, ref) => {
    return (
      <>
        <div className={style["container"]}>
          <div className={style["bot-container"]}>
            {microphonePermitted ? (
              <>
                <div className={style["bot-header"]}>
                  <div className={style["bot-header-logo"]}>
                    <img
                      src={SprinklrLogo}
                      alt=" Logo"
                      className={style["bot-header-logo"]}
                    />
                  </div>

                  <h1 className={style["bot-header-heading"]}>
                    <span>Hello!</span>
                  </h1>

                  <h2 className={style["bot-header-question"]}>
                    <span>How can we help you ?</span>
                  </h2>
                </div>

                <h1 className={style["bot-listening-heading"]}>
                  <span>{speechState}</span>
                </h1>
                <div className={style["bot-recognised-text"]}>
                  {speechState === SpeechStateEnum.listening ? (
                    <ListeningAnimation />
                  ) : (
                    <span>{speechText}</span>
                  )}
                </div>

                <div></div>

                <div className={style["bot-mic-container"]}>
                  <div ref={ref} className={style["bot-mic-wave"]}></div>
                  <div
                    className={style["bot-mic-circle"]}
                    onClick={(): void => {
                      Recognition.start();
                    }}
                  >
                    <img src={Microphone} width="30" />
                  </div>
                </div>
              </>
            ) : (
              <Permission />
            )}
          </div>
        </div>
      </>
    );
  }
);

export default View;
