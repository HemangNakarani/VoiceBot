import { didComponentMount, addDelay } from "voicebot-dommer";

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
      let newTabButton = await didComponentMount(`[data-action="TAB_ADD_NEW"]`);
      newTabButton.click();

      let careTab = await didComponentMount(`[aria-label="Modern Care"]`);
      careTab.click();

      let openAgentConsole = await didComponentMount(
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
    let hamburger = await didComponentMount(`[data-testid="hamburger-open"]`);
    hamburger.click();

    let event = new Event("input", {
      bubbles: true,
    });

    let input = (await didComponentMount(
      `[aria-label="Search Dashboard"]`
    )) as HTMLInputElement;
    input.value = dashboard;

    input.dispatchEvent(event);
  }
}
