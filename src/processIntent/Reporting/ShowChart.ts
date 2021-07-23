import {
  didChildComponentMount,
  didComponentMount,
  didComponentsMount,
  setInput,
} from "voicebot-dommer";
import { dateInMMddyyyyFormat, timeIn12HrFormat,addDelay } from "../../utils/utilities";
export default async function showChart(datePeriod: any, date: any) {
  let container = document.querySelector(
    '[data-testid="sectionTabs"]'
  ) as HTMLDivElement;
  let button = container.querySelectorAll("button")[2] as HTMLButtonElement;
  button.click();

  let article = await didComponentMount(
    '[aria-label="Case First Response SLA over Time"]'
  );
  await addDelay(1000);
  article?.scrollIntoView({ behavior: "smooth", block: "center" });
  await addDelay(500)
  //Set Date
  let startDate, endDate;
  console.log(datePeriod,date)

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



  let formattedStartDate = dateInMMddyyyyFormat(startDate);
  let formattedStartTime = timeIn12HrFormat(startDate);
  let formattedEndDate = dateInMMddyyyyFormat(endDate);
  let formattedEndTime = timeIn12HrFormat(endDate);


  setInput(inputs[0], formattedStartDate);
  setInput(inputs[1], formattedStartTime);
  setInput(inputs[2], formattedEndDate);
  setInput(inputs[3], formattedEndTime);

  let saveButton = document.querySelector(
    `[aria-label="Save"]`
  ) as HTMLButtonElement;
  saveButton.click();
  
}
