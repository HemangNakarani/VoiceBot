import { scrollList } from "voicebot-dommer";
interface valueInterface {
  kind: string;
  stringValue: string;
}

const processList = (
  listElement: HTMLElement,
  calendarChannels: Array<valueInterface>
) => {
  const value = listElement
    .querySelector("p")
    ?.textContent?.toLocaleLowerCase();
  const input = listElement.querySelector("input") as HTMLInputElement;
  let arr = calendarChannels.filter((item) => {
    return item.stringValue.toLowerCase() === value;
  });

  arr.length !== 0 && input.checked === false ? input.click() : null;
  return false;
};

export default async function setChannels(
  calendarChannels: Array<valueInterface>
) {

  let button = document.querySelector(
    '[data-testid="SN_TYPE-filter-summary"]'
  ) as HTMLElement;
  button.click();
  await scrollList(
    ".ReactVirtualized__Grid.ReactVirtualized__List",
    "li",
    "input",
    100,
    (listElement) => processList(listElement, calendarChannels)
  ).then(() => {
    let button = document.querySelector(
      '[data-testid="SN_TYPE-filter-summary"]'
    ) as HTMLElement;
    button.click();
  });
}
