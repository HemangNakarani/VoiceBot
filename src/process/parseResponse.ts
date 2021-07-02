import DigitalAssetManagementFunction from "./digitalAssetMangement";

enum Intent {
  DigitalAssetManagement = "Marketing.Asset",
}

export default function parseResponse(response: any) {
  switch (response.intent.displayName) {
    case Intent.DigitalAssetManagement: {
      // Pass Required Params to do action
      //DigitalAssetManagementFunction();
      break;
    }
    default: {
      console.log("No Matched Intents");
    }
  }
}

let [
  campaignButton,
  messageButton,
  taskButton,
  eventButton,
]: HTMLButtonElement[] = Array.from(document.querySelectorAll("button"));
