import axios, { AxiosResponse } from "axios";

interface Icontext{
  name:String,
  lifespanCount:Number
}

interface IRequestBody {
  query: String;
  sessionId: String;
  contexts:Array<Icontext>
}

export const getIntent: Function = (body: IRequestBody) => {
  console.log(body)
  return axios
    .post("https://demo-voicebot.herokuapp.com/api/v1/", body)
    .then(({ data }: AxiosResponse) => {
      return data.message;
    });
};
