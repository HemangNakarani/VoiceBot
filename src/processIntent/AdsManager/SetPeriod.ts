import {
  checkElements,
  dateInddMMMyyyyFormat,
  timeIn12HrFormat,
} from "../../utils/utilities";

export default async function setPeriod(datePeriod: any, date: any) {
  let startDate, endDate;

  console.log(datePeriod)
  if (datePeriod.kind == "structValue") {
    startDate = new Date(datePeriod.structValue.fields.startDate.stringValue);
    endDate = new Date(datePeriod.structValue.fields.endDate.stringValue);
  } else {
    startDate = new Date(date.stringValue);
    endDate = startDate;
  }

  let lifeTimeButton = document.querySelector(
    `[aria-describedby="datepicker--screenreader--message--input"]`
  ) as HTMLElement;
  lifeTimeButton.click();

  let event = new Event("input", {
    bubbles: true,
  });

  let inputs = (await checkElements(
    `[data-baseweb="popover"] input`
  )) as HTMLInputElement[];

  inputs[0].value = dateInddMMMyyyyFormat(startDate);
  inputs[0].dispatchEvent(event);

  inputs[1].value = timeIn12HrFormat(startDate);
  inputs[1].dispatchEvent(event);

  inputs[2].value = dateInddMMMyyyyFormat(endDate);
  inputs[2].dispatchEvent(event);

  inputs[3].value = timeIn12HrFormat(endDate);
  inputs[3].dispatchEvent(event);

  let saveButton = document.querySelector(
    `[data-testid="save"]`
  ) as HTMLButtonElement;
  saveButton.click();
}
