import DigitalAssetManagement from "./DigitalAssetManagement";
import { Intents as DAMIntents } from "./DigitalAssetManagement";
import AdsManager from "./AdsManager/index";
import { Intents as AdsIntent } from "./AdsManager/index";
import EditorialCalendar from "./EditorialCalendar/index";
import { Intents as EditorialIntent } from "./EditorialCalendar/index";

interface valueInterface {
  kind: string;
  stringValue: string;
}

// All Intent Responses will come here, from here corresponding action will be taken on each Intent response.
export default function parseResponse(response: any) {
  switch (response.intent.displayName) {
    case DAMIntents.OpenAssetPage: {
      DigitalAssetManagement.FilterAssets({
        parameters: response.parameters.fields,
        actionType: "new", // To open New window
      });
      break;
    }

    case DAMIntents.FilterAsset: {
      DigitalAssetManagement.FilterAssets({
        parameters: response.parameters.fields,
        actionType: "filter", // Operate in Existing Window
      });
      break;
    }

    case DAMIntents.SortAsset: {
      DigitalAssetManagement.SortAssets(
        response.parameters.fields["sort-by"].stringValue,
        response.parameters.fields["sorting-order"].stringValue
      );
      break;
    }

    case DAMIntents.AssetsView: {
      DigitalAssetManagement.ChangeViewOfAssets(
        response.parameters.fields["view"].stringValue
      );
      break;
    }

    case DAMIntents.AddAsset: {
      DigitalAssetManagement.AddAssets(
        response.parameters.fields["asset-type"].stringValue
      );
      break;
    }

    case DAMIntents.SearchAssets: {
      DigitalAssetManagement.SearchAssets(
        response.parameters.fields["search-query"].stringValue
      );
      break;
    }

    case AdsIntent.Open:{
      const parameters = response.parameters.fields;
      const entity = parameters["entity"].stringValue;
      AdsManager.Open(entity)
      break;
    }

    case AdsIntent.CreateCampaign: {
      AdsManager.CreateCampaign();
      break;
    }

    case AdsIntent.Search: {
      const parameters = response.parameters.fields;
      const query = parameters["search-query"].stringValue;
      AdsManager.Search(query);
      break;
    }

    case AdsIntent.SetChannel: {
      const parameters = response.parameters.fields;
      const calendarChannels: Array<valueInterface> =
        parameters["calendar-channels"].listValue.values;
      AdsManager.SetChannel(calendarChannels);
      break;
    }
    case AdsIntent.SetEntity: {
      const parameters = response.parameters.fields;
      const entity = parameters["entity"].stringValue;
      AdsManager.SetEntity(entity);
      break;
    }

    case AdsIntent.OpenMacroBuilder: {
      AdsManager.OpenMacroBuilder();
      break;
    }

    case AdsIntent.SetPeriod: {
      const parameters = response.parameters.fields;
      const datePeriod = parameters["date-period"].structValue;
      const startDate = new Date(datePeriod.fields.startDate.stringValue);
      const endDate = new Date(datePeriod.fields.endDate.stringValue);
      AdsManager.SetPeriod(startDate, endDate);
      break;
    }

    case EditorialIntent.Open:{
      EditorialCalendar.Open()
      break;
    }


    case EditorialIntent.AddContent: {
      const parameters = response.parameters.fields;
      const content = parameters["calendar-add"].stringValue;
      EditorialCalendar.AddContent(content);
      break;
    }

    case EditorialIntent.Search: {
      const parameters = response.parameters.fields;
      const query = parameters["search-query"].stringValue;
      EditorialCalendar.Search(query);
      break;
    }

    case EditorialIntent.SetChannel: {
      const parameters = response.parameters.fields;
      const calendarChannels: Array<valueInterface> =
        parameters["calendar-channels"].listValue.values;
      EditorialCalendar.SetChannels(calendarChannels);
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

    case EditorialIntent.SetStatus: {
      const parameters = response.parameters.fields;
      const calendarStatus: Array<valueInterface> =
        parameters["calendar-status"].listValue.values;
      EditorialCalendar.SetStatus(calendarStatus);
      break;
    }

    case EditorialIntent.SetView: {
      const parameters = response.parameters.fields;
      console.log(parameters);
      const calendarContent: Array<valueInterface> =
        parameters["calendar-content"].listValue.values;
      EditorialCalendar.SetView(calendarContent);
      break;
    }



    default: {
      console.log("No Matched Intents");
    }
  }
}
