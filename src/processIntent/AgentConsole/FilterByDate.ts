import {
  checkElement,
  dateInddMMMyyyyFormatAsArray,
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

  //   if (dateTime.stringValue !== "") {
  //     let date = new Date(dateTime.stringValue);
  //     let parsedDate = dateInddMMMyyyyFormatAsArray(date);

  //     let container = await checkElement(".btnAsDiv.dateTime__container");

  //     let inputDay = container.querySelector(
  //       `[data-testid="INPUT_DATE_FIELD"]`
  //     ) as HTMLInputElement;
  //     let inputMonth = container.querySelector(
  //       `[data-testid="INPUT_MONTH_FIELD"]`
  //     ) as HTMLInputElement;
  //     let inputYear = container.querySelector(
  //       `[data-testid="INPUT_YEAR_FIELD"]`
  //     ) as HTMLInputElement;

  //     inputDay.dispatchEvent(event);
  //     inputDay.value = String(parsedDate[0]);
  //     inputDay.dispatchEvent(event);

  //     inputMonth.dispatchEvent(event);
  //     inputMonth.value = String(parsedDate[1]);
  //     inputMonth.dispatchEvent(event);

  //     inputYear.dispatchEvent(event);
  //     inputYear.value = String(parsedDate[2]);
  //     inputYear.dispatchEvent(event);
  //   }
}
