import DigitalAssetManagement, {
  Intents as DAMIntents,
} from "./DigitalAssetManagement";
import AgentConsole, { Intents as ACIntents } from "./AgentConsole";

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

    case ACIntents.OpenAgentConsole: {
      AgentConsole.OpenOrSelectDashboard({
        dashboard: response.parameters.fields["dashboard"].stringValue,
        actionType: "new",
      });
      break;
    }

    case ACIntents.OpenDashboard: {
      AgentConsole.OpenOrSelectDashboard({
        dashboard: response.parameters.fields["dashboard"].stringValue,
        actionType: "filter",
      });
      break;
    }

    case ACIntents.OpenColumn: {
      AgentConsole.OpenColumn(response.parameters.fields["column"].stringValue);
      break;
    }

    case ACIntents.Refresh: {
      AgentConsole.RefreshContent();
      break;
    }

    case ACIntents.ColumnAction: {
      AgentConsole.ColumnAction(response.parameters.fields);
      break;
    }

    case ACIntents.DashboardAction: {
      AgentConsole.DashboardAction(response.parameters.fields);
      break;
    }

    case ACIntents.Search: {
      AgentConsole.Search(
        response.parameters.fields["search-query"].stringValue,
        response.parameters.fields["include-exclude"].stringValue
      );
      break;
    }

    default: {
      console.log("No Matched Intents");
    }
  }
}
