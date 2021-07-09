import { addDelay } from "../../utils/utilities";

export default async function ColumnActions(params: any) {
  let optionMenuButton = document.querySelector(
    `svg[data-icon-name="SolidOptions"]`
  ) as HTMLElement;

  optionMenuButton.dispatchEvent(
    new Event("mouseover", {
      bubbles: true,
    })
  );

  await addDelay(100);

  let action: string = params["agentconsole-columnactions"].stringValue;

  switch (action) {
    case "export": {
      let exportButton = document.querySelector(
        `[data-id="EXPORT"]`
      ) as HTMLElement;
      if (exportButton) exportButton.click();
      break;
    }

    case "lock": {
      let lockButton = document.querySelector(
        `[data-id="LOCK"]`
      ) as HTMLElement;
      if (lockButton) lockButton.click();

      break;
    }

    case "edit": {
      let editButton = document.querySelector(
        `[data-id="EDIT"]`
      ) as HTMLElement;
      if (editButton) editButton.click();

      break;
    }

    case "clone": {
      let cloneButton = document.querySelector(
        `[data-id="CLONE"]`
      ) as HTMLElement;
      if (cloneButton) cloneButton.click();

      break;
    }

    case "delete": {
      let deleteButton = document.querySelector(
        `[data-id="REMOVE"]`
      ) as HTMLElement;
      if (deleteButton) deleteButton.click();

      break;
    }

    case "sort": {
      let sortButton = document.querySelector(
        `[data-id="SORT"]`
      ) as HTMLElement;
      if (sortButton) sortButton.click();

      break;
    }

    default: {
      console.log("No Detected ACtions/Not Available");
    }
  }
}
