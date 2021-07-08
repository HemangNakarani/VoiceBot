import { addDelay, checkElement } from "../../utils/utilities";

export default async function sortAssets(sortBy: string, order: string) {
  // Condition to Process Sorting Order
  if (order !== "") {
    let sortOrderSelectorButton = document.querySelector(
      `[data-id="sort-order-selector"]`
    ) as HTMLElement;

    if (
      sortOrderSelectorButton
        .querySelector("svg")
        ?.getAttribute("data-icon-name") !== order
    ) {
      sortOrderSelectorButton.click();
    }
  }

  // Condition to Process Sort By
  if (sortBy !== "") {
    let sortKeySelectorButton = document.querySelector(
      `[data-id="sort-key-selector"]`
    ) as HTMLElement;

    sortKeySelectorButton.click();
    await selectSortKey(sortBy);
  }
}

// Function to scroll and process each element in List
async function selectSortKey(sortBy: string) {
  let listContainer = await checkElement(`ul[data-spaceweb="list"]`);
  let listnode = listContainer.querySelector("li") as HTMLElement;

  let currentScroll = 0;

  while (
    currentScroll <
    listContainer.scrollHeight - listContainer.clientHeight
  ) {
    if (sortBy.toLowerCase() === listnode.textContent?.toLowerCase()) {
      listnode.click();
      break;
    }

    // if couldn't find next sibling it means we need to scroll.
    if (listnode.nextSibling) listnode = listnode.nextSibling as HTMLElement;
    else {
      // scrollTop increare with visible height of container
      currentScroll += listContainer.clientHeight;
      listContainer.scrollTop = currentScroll;

      // delay added to wait for new elements to load into the DOM
      await addDelay(100);

      if (listnode.nextSibling) listnode = listnode.nextSibling as HTMLElement;
    }
  }

  return true;
}
