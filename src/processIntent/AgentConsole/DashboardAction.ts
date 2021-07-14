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
      let addButton = await checkElement(`[aria-label="Add Dashboard"]`);
      if (addButton) addButton.click();
      break;
    }

    case "share": {
      let shareButton = await checkElement(`[aria-label="Share Dashboard"]`);
      if (shareButton) shareButton.click();

      break;
    }

    case "edit": {
      let editButton = await checkElement(`[aria-label="Edit Dashboard"]`);
      if (editButton) editButton.click();

      break;
    }

    case "clone": {
      let cloneButton = await checkElement(`[aria-label="Clone Dashboard"]`);
      if (cloneButton) cloneButton.click();

      break;
    }

    case "lock": {
      let lockButton = await checkElement(`[aria-label="Lock Dashboard"]`);
      if (lockButton) lockButton.click();

      break;
    }

    case "activity": {
      let activityButton = await checkElement(`[aria-label="Activity"]`);
      if (activityButton) activityButton.click();

      break;
    }

    default: {
      console.log("No Detected ACtions/Not Available");
    }
  }
}
