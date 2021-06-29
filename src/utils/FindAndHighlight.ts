export default function FindAndHighlight(
  previousHighlighted: Element | null,
  command: String
) {
  if (previousHighlighted !== null) {
    previousHighlighted.removeAttribute("style");
  }

  let element = document.querySelector(`[data-entity="${command}"]`);
  element?.setAttribute("style", "background-color:yellow");

  return element;
}
