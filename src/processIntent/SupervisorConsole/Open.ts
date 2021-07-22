import { didComponentMount } from "voicebot-dommer";

export default async function OpenOrSelectDashboard() {
  let newTabButton = await didComponentMount(`[data-action="TAB_ADD_NEW"]`);
  newTabButton.click();

  let careTab = await didComponentMount(`[aria-label="Modern Care"]`);
  careTab.click();

  let openAgentConsole = await didComponentMount(
    `[data-entity="SUPERVISOR_CONSOLE"]`
  );

  openAgentConsole.click();
}
