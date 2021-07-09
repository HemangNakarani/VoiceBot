import { checkElement } from "../../utils/utilities";

export default function Refresh() {
  let button = document.querySelector(
    `[data-action="REFRESH"]`
  ) as HTMLButtonElement;
  button.click();
}
