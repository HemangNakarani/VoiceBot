export enum SpeechStateEnum {
  listening = "Listening...",
  idle = "- Idle -",
  loading = "Loading...",
}

export interface ViewProps {
  speechText: string;
  speechState: SpeechStateEnum;
  microphonePermitted: boolean;
  Recognition: any;
}
