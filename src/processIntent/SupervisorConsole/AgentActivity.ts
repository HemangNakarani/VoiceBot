import {
  addDelay,
  didComponentMount,
  didComponentsMount,
} from "voicebot-dommer";

export default async function OpenAgentActivity(agentname: string) {
  let agentList = Array.from(
    document.querySelectorAll(".fixedDataTableRowLayout_rowWrapper")
  ) as HTMLElement[];
  agentList.unshift();

  let agentNameRegex = new RegExp(agentname, "ig");
  let eventHover = new Event("mouseover", {
    bubbles: true,
  });

  agentList.forEach(async (node) => {
    let textContent = node.querySelector(".agentProfile__name")?.textContent;

    if (textContent && textContent.match(agentNameRegex) && agentname !== "") {
      let actions = node.querySelector(
        `[aria-label="Row Actions"]`
      ) as HTMLElement;
      actions.dispatchEvent(eventHover);

      let activityButton = await didComponentMount(
        `.popoverWithTwistyContainer [aria-label="View Activity"]`
      );
      activityButton.click();
      slowScroll(".user-activity__activitiesContainer", 1);
    }
  });
}

async function slowScroll(containerSelector: string, offset: number) {
  let elem = await didComponentMount(containerSelector);

  await addDelay(2000);

  if (!elem) {
    return;
  }

  let timer = setInterval(() => {
    elem.scrollTop += offset;
    if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
      console.log("auto scroll stopped");
      clearInterval(timer);
    }
  }, 25);
}
