import { checkElement } from "../../utils/utilities";

export default async function OpenColumn(column: string) {
  let pullIcon = (await checkElement(
    "div.mStrNameText.pull-xs-left.txt-h4"
  )) as HTMLElement;
  pullIcon.click();

  let event = new Event("input", {
    bubbles: true,
  });

  let input = (await checkElement(
    "input.inputWithPlaceholder"
  )) as HTMLInputElement;
  input.value = column;

  input.dispatchEvent(event);
}
