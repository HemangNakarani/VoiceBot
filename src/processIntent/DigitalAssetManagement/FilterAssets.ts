import {
  addDelay,
  checkElement,
  checkElements,
  convertTimeZone,
  dateInddMMMyyyyFormat,
  timeIn12HrFormat,
} from "../../utils/utilities";

type Props = {
  parameters: any;
  actionType: "filter" | "new";
};

export default async function digitalAssetManagement({
  parameters,
  actionType,
}: Props) {
  switch (actionType) {
    case "new": {
      let newTabButton = await checkElement(`[data-action="TAB_ADD_NEW"]`);
      newTabButton.click();

      let openDigitalAssetsManagerButton = await checkElement(
        `[data-entity="DIGITAL_ASSET_MANAGEMENT"]`
      );

      openDigitalAssetsManagerButton.click();

      await addDelay(2000);
      break;
    }

    case "filter": {
      break;
    }

    default: {
      console.log("No matching Action");
    }
  }

  if (parameters["Asset-SmartImageTags"].listValue.values.length !== 0) {
    console.log(parameters["Asset-SmartImageTags"].listValue.values);
    let smartTagsPopup = await checkElement(
      `[data-entityid="undefined-filter-summary"]`
    );
    smartTagsPopup.click();
    await setFilterSmartTags(
      parameters["Asset-SmartImageTags"].listValue.values
    );
  }

  if (parameters["Asset-Status"].listValue.values.length !== 0) {
    await addDelay(1000);
    let statusPopup = await checkElement(
      `[data-entityid="STATUS-filter-summary"]`
    );
    statusPopup.click();
    await setFilter(parameters["Asset-Status"].listValue.values);
    let newStatusPopup = await checkElement(
      `[data-entityid="STATUS-filter-summary"]`
    );
    newStatusPopup.click();
  }

  if (parameters["Asset-Type"].listValue.values.length !== 0) {
    await addDelay(1000);
    let typePopup = await checkElement(
      `[data-entityid="ASSET_TYPE-filter-summary"]`
    );
    typePopup.click();
    await setFilter(parameters["Asset-Type"].listValue.values);
    let newtypePopup = await checkElement(
      `[data-entityid="ASSET_TYPE-filter-summary"]`
    );
    newtypePopup.click();
  }

  if (parameters["date-time"].stringValue !== "") {
    await addDelay(200);

    let date = convertTimeZone(new Date(parameters["date-time"].stringValue));
    await setDateRange(date, date);
  }

  if (parameters["date-period"].stringValue !== "") {
    await addDelay(200);

    let struct = parameters["date-period"].structValue.fields;
    let endDate = new Date(struct.endDate.stringValue);
    let startDate = new Date(struct.startDate.stringValue);

    await setDateRange(startDate, endDate);
  }
}

async function setFilterSmartTags(
  statusArray: { kind: string; stringValue: string }[]
) {
  let listContainer = await checkElement(
    ".ReactVirtualized__Grid.ReactVirtualized__List._2jiM"
  );
  let listnode = listContainer.querySelector("li") as HTMLElement;
  let currentScroll = 0;

  while (
    currentScroll <
    listContainer.scrollHeight - listContainer.clientHeight
  ) {
    let arr = statusArray.filter(
      (item) =>
        item.stringValue.toLowerCase() ===
        listnode.querySelector("p")?.textContent?.toLowerCase()
    );
    if (arr.length !== 0) {
      listnode.querySelector(`input`)?.click();
    }

    if (listnode.nextSibling) listnode = listnode.nextSibling as HTMLElement;
    else {
      currentScroll += listContainer.clientHeight;
      listContainer.scrollTop = currentScroll;

      await addDelay(100);
      if (listnode.nextSibling) listnode = listnode.nextSibling as HTMLElement;
    }
  }

  let applyFilterBtn = await checkElement(`[data-entityid="applyFilterBtn"]`);
  applyFilterBtn.click();

  return true;
}

async function setFilter(statusArray: { kind: string; stringValue: string }[]) {
  let list = await checkElements(".popoverWithTwistyContainer li");
  console.log(list);

  list.forEach((listItem) => {
    let arr = statusArray.filter(
      (item) =>
        item.stringValue.toLowerCase() ===
        listItem.querySelector("p")?.textContent?.toLowerCase()
    );
    if (arr.length !== 0) {
      console.log("Found");
      listItem.querySelector(`input`)?.click();
    }
  });

  return true;
}

async function setDateRange(startDate: Date, endDate: Date) {
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