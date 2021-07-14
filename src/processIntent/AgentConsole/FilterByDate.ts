import {
  checkElement,
} from "../../utils/utilities";

export default async function FilterByDate(dateTime: any, datePeriod: any) {
  let searchButton = (await checkElement(
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

  let container = await checkElement(".mStrSearchFilters");

  let startDateInput = container.querySelector(
    `[id="FRMFLD_Start Date"]`
  ) as HTMLInputElement;
  startDateInput.click();
}
