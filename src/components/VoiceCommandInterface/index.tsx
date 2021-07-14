import React, { ReactElement } from "react";
import style from "./voicecommandinterface.module.css";
import Microphone from "../../assets/Microphone.svg";
import SprinklrLogo from "../../assets/SprinklrLogo.svg";
import Recognition from "../../utils/SpeechRecognitionConfig";
import { getIntent } from "../../utils/ApiService";
import parseResponse from "../../processIntent/parseResponse";
import ListeningAnimation from "../ListeningAnimation/listening";
import Permission from '../Permission/index'
export enum SpeechStateEnum {
  listening = "Listening...",
  idle = "- Idle -",
  loading = "Loading...",
}

let audioStream: MediaStream | null = null;
let timeInterval: NodeJS.Timeout | null = null;

export default function VoiceCommandInterface(): ReactElement {
  const [speechState, setSpeechState] = React.useState<SpeechStateEnum>(
    SpeechStateEnum.idle
  );

  const waveRef = React.useRef<HTMLDivElement>(null);

  const [speechText, setSpeechText] = React.useState("");

  const [microphonePermitted, setMicrophonePermitted] = React.useState(true);

  async function handleCommand(command: String) {
    setSpeechState(SpeechStateEnum.loading);

    const response = await getIntent({
      query: command,
      sessionId: "huds7823",
      contexts: [],
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

  function startAudioStream() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        audioStream = stream;

        const audioContext = new AudioContext();
        const audioSource = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();

        analyser.fftSize = 1024;
        analyser.smoothingTimeConstant = 0.8;
        analyser.minDecibels = -90;
        analyser.maxDecibels = 0;
        audioSource.connect(analyser);

        const volumes = new Uint8Array(analyser.frequencyBinCount);
        const volumeCallBack = () => {
          analyser.getByteFrequencyData(volumes);
          let volumeSum = volumes.reduce((prev, curr) => curr + prev, 0);

          const averageVolume = volumeSum / volumes.length;
          volumeIndicator(averageVolume);
        };

        timeInterval = setInterval(volumeCallBack, 10);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function stopAudioStream() {
    //stop all all tracks of audioStream
    if (audioStream !== null)
      audioStream.getTracks().forEach((track) => track.stop());

    // clear interval if not null
    if (timeInterval !== null) {
      clearInterval(timeInterval);
    }

    // clear VolumeIndicator
    volumeIndicator(0);
  }

  function volumeIndicator(volume: number) {
    let scale = Math.abs(volume) / 5;
    scale = Math.min(3, scale);

    if (waveRef.current !== null)
      waveRef.current.style.webkitTransform = `scale(${scale},${scale})`;
  }

  function setMicrophonePermissionState() {
    navigator.permissions
      .query({ name: "microphone" })
      .then((permissonStatus) => {
        permissonStatus.state === "denied"
          ? setMicrophonePermitted(false)
          : setMicrophonePermitted(true);
      });
  }

  React.useEffect((): void => {
    Recognition.onaudiostart = function () {
      setSpeechText(". . .");
      handleStateChange(SpeechStateEnum.listening);
      startAudioStream();
    };

    Recognition.onresult = function (event: any) {
      var last = event.results.length - 1;
      var command: string = event.results[last][0].transcript;
      setSpeechText(command);
      handleCommand(command);
    };

    Recognition.onspeechend = function () {
      Recognition.stop();
      handleStateChange(SpeechStateEnum.idle);
      stopAudioStream();
    };

    Recognition.onerror = function (event: SpeechRecognitionErrorEvent) {
      handleStateChange(SpeechStateEnum.idle);
      stopAudioStream();
      if (event.error === "not-allowed") {
        setMicrophonePermitted(false);
      }
      // condition for no-speech error
      else if (event.error === "no-speech") {
        setSpeechText("No Speech Recognised !!");
      } else {
        setSpeechText(event.error);
      }
    };
    setMicrophonePermissionState();
  }, []);

  return (
    <>
      <div className={style["container"]}>
        <div className={style["bot-container"]}>
          {microphonePermitted ?(
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
              <span>Hello !</span>
            </h1>

            <h2 className={style["bot-header-question"]}>
              <span>Can we help you?</span>
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

          <div className={style["bot-mic-container"]}>
            <div ref={waveRef} className={style["bot-mic-wave"]}></div>

            <div
              className={style["bot-mic-circle"]}
              onClick={(): void => {
                Recognition.start();
              }}
            >
              <img src={Microphone} width="30" alt="Microphone" />
            </div>
          </div>
          </>): (<Permission/>)}
        </div>
      
      </div>
    </>
  );
}
