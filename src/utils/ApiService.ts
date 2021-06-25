import axios, { AxiosResponse } from "axios";

interface IRequestBody {
  query: String;
  sessionID: String;
}

export const getIntent: Function = (body: IRequestBody) => {
  return axios
    .post("https://demo-voicebot.herokuapp.com/chat", body)
    .then(({ data }: AxiosResponse) => {
      return data.message;
    });
};
