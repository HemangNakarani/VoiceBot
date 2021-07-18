import { didComponentMount } from "voicebot-dommer";

export default async function addContent(content: string) {
  let button = await didComponentMount('[data-entityid="moreActions"]');
  button.click();
  let addContentButton = await didComponentMount(
    '[data-id="TOGGLE_ADD_CONTENT_ACTION_LIST"]'
  );
  addContentButton.click();
  let container = await didComponentMount('[class="popoverWithTwistyContainer"]');

  let listNodes = container.querySelectorAll("li");

  listNodes.forEach((list) => {
    list.textContent?.toLowerCase() == content.toLowerCase()
      ? list.click()
      : null;
  });
}
