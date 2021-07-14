import { addDelay, checkElement } from "../../utils/utilities";

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
  console.log(action);

  switch (action) {
    case "export": {
      let exportButton = await checkElement(`[data-id="EXPORT"]`);
      if (exportButton) exportButton.click();
      break;
    }

    case "lock": {
      let lockButton = await checkElement(`[data-id="LOCK"]`);
      if (lockButton) lockButton.click();

      break;
    }

    case "edit": {
      let editButton = await checkElement(`[data-id="EDIT"]`);
      if (editButton) editButton.click();

      break;
    }

    case "clone": {
      let cloneButton = await checkElement(`[data-id="CLONE"]`);
      if (cloneButton) cloneButton.click();

      break;
    }

    case "delete": {
      let deleteButton = await checkElement(`[data-id="REMOVE"]`);
      if (deleteButton) deleteButton.click();

      break;
    }

    case "sort": {
      let sortButton = await checkElement(`[data-id="SORT"]`);
      if (sortButton) sortButton.click();

      break;
    }

    default: {
      console.log("No Detected ACtions/Not Available");
    }
  }
}
