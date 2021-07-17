import { scrollList } from "voicebot-dommer";

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
  await scrollList(`ul[data-spaceweb="list"]`, "li", "input", 0, (listnode) => {
    if (sortBy.toLowerCase() === listnode.textContent?.toLowerCase()) {
      listnode.click();
      return true;
    }
    return false;
  });

  return true;
}
