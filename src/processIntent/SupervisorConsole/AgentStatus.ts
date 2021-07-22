import { didComponentMount } from "voicebot-dommer";

export default async function SelectAgentStatus(status: string) {
  let container = await didComponentMount(".quick-filters-ctn");

  switch (status) {
    case "available": {
      let available = container.querySelector(
        `[aria-label="Available"]`
      ) as HTMLElement;
      available.click();
      break;
    }
    case "busy": {
      let busy = container.querySelector(`[aria-label="Busy"]`) as HTMLElement;
      busy.click();
      break;
    }
    case "all": {
      let all = container.querySelector(`[aria-label="All"]`) as HTMLElement;
      all.click();
      break;
    }

    default: {
      console.log("DEFAULT");
    }
  }
}
