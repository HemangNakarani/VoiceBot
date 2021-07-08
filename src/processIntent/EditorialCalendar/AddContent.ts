import { checkElement } from "../../utils/utilities";

export default async function addContent(content: string) {
  let button = await checkElement('[data-entityid="moreActions"]');
  button.click();
  let addContentButton = await checkElement(
    '[data-id="TOGGLE_ADD_CONTENT_ACTION_LIST"]'
  );
  addContentButton.click();
  let container = await checkElement('[class="popoverWithTwistyContainer"]');

  let listNodes = container.querySelectorAll("li");

  listNodes.forEach((list) => {
    list.textContent?.toLowerCase() == content.toLowerCase()
      ? list.click()
      : null;
  });
}
