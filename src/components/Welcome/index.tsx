import React, { ReactComponentElement, ReactElement } from "react";
import style from "./permission.module.css";
import MicrophoneIcon from "../../assets/Microphone.svg";
import { func } from "prop-types";
let Microphone = chrome.runtime.getURL(MicrophoneIcon);

