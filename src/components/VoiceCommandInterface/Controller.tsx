import React, { ReactElement } from "react";
import Recognition from "../../utils/SpeechRecognitionConfig";
import { getIntent } from "../../utils/ApiService";
import parseResponse from "../../processIntent/parseResponse";
import { createContext } from "../../utils/utilities";

import View from "./View";
import { SpeechStateEnum } from "./types";

let audioStream: MediaStream | null = null;
let timeInterval: NodeJS.Timeout | null = null;

export default function Controller(): ReactElement {
  const [speechState, setSpeechState] = React.useState<SpeechStateEnum>(
    SpeechStateEnum.idle
  );

  const [speechText, setSpeechText] = React.useState("");

  // To show Permission screen when user has not granted permission
  const [microphonePermitted, setMicrophonePermitted] = React.useState(true);

  // To manipulate waves animation when user speaks
  const waveRef = React.useRef<HTMLDivElement>(null);

  async function handleCommand(command: String) {
    setSpeechState(SpeechStateEnum.loading);

    let contexts = createContext("huds7829");
    const response = await getIntent({
      query: command,
      sessionId: "huds7829",
      contexts: contexts,
    });

    setSpeechText("🧞‍♂️ : " + response.fulfillmentText);
    if (response.action === "input.unknown") {
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
    <View
      ref={waveRef}
      speechText={speechText}
      speechState={speechState}
      microphonePermitted={microphonePermitted}
      Recognition={Recognition}
    ></View>
  );
}
