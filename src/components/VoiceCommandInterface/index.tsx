import React, { ReactElement } from "react";
import style from "./voicecommandinterface.module.css";
import MicrophoneIcon from "../../assets/Microphone.svg";
import SprinklrLogoIcon from "../../assets/SprinklrLogo.svg";
import Recognition from "../../utils/SpeechRecognitionConfig";
import { getIntent } from "../../utils/ApiService";
import parseResponse from "../../processIntent/parseResponse";
import { createContext } from "../../utils/utilities";
import ListeningAnimation from "../ListeningAnimation/listening";
import Permission from "../Permission/index";
let Microphone = chrome.runtime.getURL(MicrophoneIcon);
let SprinklrLogo = chrome.runtime.getURL(SprinklrLogoIcon);

export enum SpeechStateEnum {
  listening = "Listening...",
  idle = "- Idle -",
  loading = "Loading...",
}

export default function VoiceCommandInterface(): ReactElement {
  const [speechState, setSpeechState] = React.useState<SpeechStateEnum>(
    SpeechStateEnum.idle
  );

  const [speechText, setSpeechText] = React.useState<ReactElement>();
  const [microphonePermitted, setMicrophonePermitted] = React.useState(true);
  async function handleCommand(command: String) {
    setSpeechState(SpeechStateEnum.loading);

    let contexts = createContext("huds7829");
    const response = await getIntent({
      query: command,
      sessionId: "huds7829",
      contexts: contexts,
    });

    if (response.action === "input.unknown") {
      setSpeechText(response.fulfillmentText);
    } else {
      parseResponse(response);
    }
    setSpeechState(SpeechStateEnum.idle);
  }

  function handleStateChange(newState: SpeechStateEnum) {
    setSpeechState((prevState: SpeechStateEnum): SpeechStateEnum => {
      return newState;
    });
  }

  function handleMinimize() {
    let app = document.getElementById("my-extension-root") as HTMLDivElement;
    app.style.display = "none";
  }

  React.useEffect((): void => {
    Recognition.onaudiostart = function () {
      setSpeechText(<ListeningAnimation />);
      handleStateChange(SpeechStateEnum.listening);
    };

    Recognition.onresult = function (event: any) {
      var last = event.results.length - 1;
      var command: String = event.results[last][0].transcript;
      console.log(command);
      setSpeechText(<>{command}</>);
      handleCommand(command);
    };

    Recognition.onspeechend = function () {
      Recognition.stop();
      handleStateChange(SpeechStateEnum.idle);
    };

    Recognition.onerror = function (event: SpeechRecognitionErrorEvent) {
      handleStateChange(SpeechStateEnum.idle);
      if(event.error ==="not-allowed"){
        setMicrophonePermitted(false);
      }
    };
  }, []);

  return (
    <>
      <div className={style["container"]}>
        <div className={style["bot-container"]}>
          <div
            style={{
              color: "white",
              float: "right",
              margin: "10px 10px 0 0",
            }}
            onClick={handleMinimize}
          >
            <div className={style["minimize"]} id="bot-minimize-btn">
              <div className={style["minimizebutton"]}>&ndash;</div>
            </div>
          </div>
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
                  <span>Can we help you?</span>
                </h2>
              </div>

              <h1 className={style["bot-listening-heading"]}>
                <span>{speechState}</span>
              </h1>
              <div className={style["bot-recognised-text"]}>
                <span>{speechText}</span>
              </div>

              <div></div>

              <div className={style["bot-mic-container"]}>
                <div id="bot-volume-wave"
                  className={
                    speechState === SpeechStateEnum.listening
                      ? style["bot-mic-wave"]
                      : ""
                  }
                ></div>
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
