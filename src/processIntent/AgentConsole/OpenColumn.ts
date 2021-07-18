import { didComponentMount } from "voicebot-dommer";

export default async function OpenColumn(column: string) {
  let pullIcon = (await didComponentMount(
    "div.mStrNameText.pull-xs-left.txt-h4"
  )) as HTMLElement;
  pullIcon.click();

  let event = new Event("input", {
    bubbles: true,
  });

  let input = (await didComponentMount(
    "input.inputWithPlaceholder"
  )) as HTMLInputElement;
  input.value = column;

  input.dispatchEvent(event);
}
