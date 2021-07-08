import { checkElement, addDelay } from "../../utils/utilities";

type Props = {
  dashboard: string;
  actionType: "filter" | "new";
};

export default async function OpenOrSelectDashboard({
  dashboard,
  actionType,
}: Props) {
  switch (actionType) {
    case "new": {
      let newTabButton = await checkElement(`[data-action="TAB_ADD_NEW"]`);
      newTabButton.click();

      let careTab = await checkElement(`[aria-label="Modern Care"]`);
      careTab.click();

      let openAgentConsole = await checkElement(
        `[data-entity="AGENT_CONSOLE"]`
      );

      openAgentConsole.click();

      await addDelay(2000);
      break;
    }

    case "filter": {
      break;
    }

    default: {
      console.log("No matching Action");
    }
  }

  if (dashboard !== "") {
    let hamburger = await checkElement(`[data-testid="hamburger-open"]`);
    hamburger.click();

    let event = new Event("input", {
      bubbles: true,
    });

    let input = (await checkElement(
      `[aria-label="Search Dashboard"]`
    )) as HTMLInputElement;
    input.value = dashboard;

    input.dispatchEvent(event);
  }
}
