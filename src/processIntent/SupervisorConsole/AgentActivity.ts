import { didComponentMount } from "voicebot-dommer";

export default async function OpenAgentActivity(agentname: string) {
  // Need to write the code for selecting required agent-name
  console.log(agentname);

  let eventHover = new Event("mouseover", {
    bubbles: true,
  });

  let actions = document.querySelector(
    `[aria-label="Row Actions"]`
  ) as HTMLElement;
  actions.dispatchEvent(eventHover);

  let activityButton = await didComponentMount(
    `.popoverWithTwistyContainer [aria-label="View Activity"]`
  );
  activityButton.click();
}
