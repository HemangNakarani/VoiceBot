import { addDelay, checkElement } from "../../utils/utilities";

export default async function DashboardAction(params: any) {
  let optionMenuButton = document.querySelector(
    `svg[data-icon-name="SolidOptions"]`
  ) as HTMLElement;

  let eventHover = new Event("mouseover", {
    bubbles: true,
  });

  optionMenuButton.dispatchEvent(eventHover);

  let dashboardActionButton = await checkElement(
    `[data-id="DASHBOARD_SETTINGS"]`
  );
  dashboardActionButton.dispatchEvent(eventHover);

  await addDelay(200);

  let action: string = params["agentconsole-dashboardaction"].stringValue;

  switch (action) {
    case "add": {
      let addButton = document.querySelector(
        `[aria-label="Add Dashboard"]`
      ) as HTMLElement;
      if (addButton) addButton.click();
      break;
    }

    case "share": {
      let shareButton = document.querySelector(
        `[aria-label="Share Dashboard"]`
      ) as HTMLElement;
      if (shareButton) shareButton.click();

      break;
    }

    case "edit": {
      let editButton = document.querySelector(
        `[aria-label="Edit Dashboard"]`
      ) as HTMLElement;
      if (editButton) editButton.click();

      break;
    }

    case "clone": {
      let cloneButton = document.querySelector(
        `[aria-label="Clone Dashboard"]`
      ) as HTMLElement;
      if (cloneButton) cloneButton.click();

      break;
    }

    case "lock": {
      let lockButton = document.querySelector(
        `[aria-label="Lock Dashboard"]`
      ) as HTMLElement;
      if (lockButton) lockButton.click();

      break;
    }

    case "activity": {
      let activityButton = document.querySelector(
        `[aria-label="Activity"]`
      ) as HTMLElement;
      if (activityButton) activityButton.click();

      break;
    }

    default: {
      console.log("No Detected ACtions/Not Available");
    }
  }
}
