import { scrollList } from "voicebot-dommer";
import {
  checkChildElement,
  checkElement,
  addDelay,
} from "../../utils/utilities";
interface valueInterface {
  kind: string;
  stringValue: string;
}
export default function setChannels(calendarChannels: Array<valueInterface>) {
  let button = document.querySelector(
    '[data-testid="SN_TYPE-filter-summary"]'
  ) as HTMLElement;
  button.click();

  setFilter(calendarChannels).then(async () => {
    button = await checkElement('[data-testid="SN_TYPE-filter-summary"]');
    button.click();
  });
}

async function setFilter(statusArray: Array<valueInterface>) {
  await scrollList(
    ".ReactVirtualized__Grid.ReactVirtualized__List.KWGO",
    "li",
    "input",
    100,
    (listElement) => {
      const value = listElement
        .querySelector("p")
        ?.textContent?.toLocaleLowerCase();
      const input = listElement.querySelector("input") as HTMLInputElement;
      let arr = statusArray.filter((item) => {
        return item.stringValue.toLowerCase() === value;
      });

      arr.length !== 0 ? input.click() : null;
      return false;
    }
  );
}
