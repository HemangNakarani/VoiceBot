import React, { ReactElement } from "react";
import style from "./voicechatinterface.module.css";
import Waves from "../../assets/wave_animation.svg";
import Aura from "../../assets/aura.gif";
import Speech from "../../utils/SpeechRecognitionConfig";
import { getIntent } from "../../utils/ApiService";
import parseResponse from "../../processIntent/parseResponse";

enum SpeechState {
  listening = 1,
  idle = 2,
  loading = 3,
}

export default function VoiceCommandInterface(): ReactElement {
  const [speechState, setSpeechState] = React.useState<SpeechState>(
    SpeechState.idle
  );

  const [speechText, setSpeechText] = React.useState<String>("");

  async function handleCommand(command: String) {
    setSpeechState(SpeechState.loading);
    const response = await getIntent({ query: command, sessionId: "dsfaSDF",contexts:[] });
    setSpeechState(SpeechState.idle);
    if (response.action === "input.unknown") {
      setSpeechText(response.fulfillmentText);
    } else {
      parseResponse(response);
    }
  
  }

  function handleStateChange(newState: SpeechState) {
    setSpeechState((prevState: SpeechState): SpeechState => {
      return newState;
    });
  }

  React.useEffect((): void => {
    Speech.onaudiostart = function () {
      setSpeechText(". . .");
      handleStateChange(SpeechState.listening);
    };

    Speech.onresult = function (event: any) {
      var last = event.results.length - 1;
      var command: String = event.results[last][0].transcript;
      setSpeechText(command);
      handleCommand(command);
    };

    Speech.onspeechend = function () {
      Speech.stop();
      handleStateChange(SpeechState.idle);
    };

    Speech.onerror = function (event: Event) {
      handleStateChange(SpeechState.idle);
      console.log(event);
    };
  }, []);

  return (
    <div className={style.container}>
      {speechState === SpeechState.listening ? (
        <>
          <h6>Tap Aura to give commands</h6>
          <img src={Waves} alt="waves-gif"></img>
        </>
      ) : speechState === SpeechState.loading ? null : (
        <>
          <h6>Tap Aura to give commands</h6>
          <div className={style["aure-not-listening"]}>
            <img
              src={Aura}
              alt="aura-gif"
              onClick={(): void => {
                Speech.start();
              }}
            ></img>
          </div>
        </>
      )}
      <h2>{speechText}</h2>
    </div>
  );
}
