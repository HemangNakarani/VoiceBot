import { didComponentMount } from "voicebot-dommer";

export default async function Search(
  query: string,
  wordAction: "include" | "exclude" | ""
) {
  let searchButton = (await didComponentMount(
    `[data-action="SEARCH"]`
  )) as HTMLButtonElement;
  searchButton.click();

  let container = await didComponentMount(".mStrSearchFilters");
  let eventInput = new Event("input", {
    bubbles: true,
  });

  let keyboardEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    keyCode: 13,
  });

  if (wordAction === "include" || wordAction === "") {
    let inputInclude = container.querySelector(
      `input[placeholder="Use comma to separate keywords"]`
    ) as HTMLInputElement;
    inputInclude.value = query;
    inputInclude.dispatchEvent(eventInput);
    inputInclude.dispatchEvent(keyboardEvent);
  } else {
    let switchButton = container.querySelector(
      `[data-testid="switchOption"]`
    ) as HTMLButtonElement;
    switchButton.click();

    let inputExclude = container.querySelector(
      `input[placeholder="Exclude Keywords"]`
    ) as HTMLInputElement;
    inputExclude.value = query;
    inputExclude.dispatchEvent(eventInput);
    inputExclude.dispatchEvent(keyboardEvent);
  }

  let saveFilter = container.querySelector(
    `[id="saveFilter"]`
  ) as HTMLButtonElement;
  saveFilter.click();
}
