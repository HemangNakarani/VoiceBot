import axios, { AxiosResponse } from "axios";

interface IRequestBody {
  query: String;
  sessionId: String;
}

export const getIntent: Function = (body: IRequestBody) => {
  return axios
    .post("https://demo-voicebot.herokuapp.com/api/v1/", body)
    .then(({ data }: AxiosResponse) => {
      return data.message;
    });
};
