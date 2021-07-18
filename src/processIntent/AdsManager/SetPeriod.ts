import { didComponentsMount, setInput } from "voicebot-dommer";
import { dateInddMMMyyyyFormat, timeIn12HrFormat } from "../../utils/utilities";

export default async function setPeriod(datePeriod: any, date: any) {
  let startDate, endDate;

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

  let inputs = (await didComponentsMount(
    `[data-baseweb="popover"] input`
  )) as HTMLInputElement[];

  let formattedStartDate = dateInddMMMyyyyFormat(startDate);
  let formattedStartTime = timeIn12HrFormat(startDate);
  let formattedEndDate = dateInddMMMyyyyFormat(endDate);
  let formattedEndTime = timeIn12HrFormat(endDate);

  setInput(inputs[0], formattedStartDate);
  setInput(inputs[1], formattedStartTime);
  setInput(inputs[2], formattedEndDate);
  setInput(inputs[3], formattedEndTime);

  let saveButton = document.querySelector(
    `[data-testid="save"]`
  ) as HTMLButtonElement;
  saveButton.click();
}
