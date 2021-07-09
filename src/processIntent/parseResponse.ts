import AdsManager from "./AdsManager";
import { Intents as AdsIntent } from "./AdsManager";
import EditorialCalendar from "./EditorialCalendar";
import { Intents as EditorialIntent } from "./EditorialCalendar";
import DAM, { Intents as DAMIntents } from "./DigitalAssetsManagement";
import AgentConsole, { Intents as ACIntenets } from "./AgentConsole";

// All Intent Responses will come here, from here corresponding action will be taken on each Intent response.
export default function parseResponse(response: any) {

  console.log(response)
  switch (response.intent.displayName) {
    
    case AdsIntent.Open:{
      const parameters = response.parameters.fields;
      const entity = parameters["entity"].stringValue;
      AdsManager.Open(entity)
      break;
    }

    case EditorialIntent.Open:{
      EditorialCalendar.Open()
      break;
    }  

    case EditorialIntent.SetDate: {
      const parameters = response.parameters.fields;
      const dateTime: string = parameters["date-time"].stringValue;
      let date = new Date(dateTime);
      EditorialCalendar.SetDate(date);
      break;
    }

    case EditorialIntent.SetPeriod: {
      const parameters = response.parameters.fields;
      const datePeriod = parameters["date-period"].structValue;
      let startDate = new Date(
        datePeriod.fields.startDate.stringValue
      ).getTime();
      const endDate = new Date(datePeriod.fields.endDate.stringValue).getTime();
      const oneDay = 24 * 60 * 60 * 1000;

      let days = Math.round((endDate - startDate) / oneDay);
      startDate = startDate + oneDay;
      EditorialCalendar.SetPeriod(startDate, days);
      break;
    }

    case DAMIntents.Open: {
      DAM.Open();
      break;
    }

    case ACIntenets.Open: {
      AgentConsole.Open();
      break;
    }

    default: {
      console.log("No Matched Intents");
    }
  }
}
