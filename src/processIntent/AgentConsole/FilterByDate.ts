import { didComponentMount } from "voicebot-dommer";

export default async function FilterByDate(dateTime: any, datePeriod: any) {
  let searchButton = (await didComponentMount(
    `[data-action="SEARCH"]`
  )) as HTMLButtonElement;
  searchButton.click();

  let event = new Event("input", {
    bubbles: true,
  });

  let keyboardEvent = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    keyCode: 13,
  });

  let container = await didComponentMount(".mStrSearchFilters");

  let startDateInput = container.querySelector(
    `[id="FRMFLD_Start Date"]`
  ) as HTMLInputElement;
  startDateInput.click();
}
