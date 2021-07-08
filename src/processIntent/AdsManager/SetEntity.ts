export default function setEntity(entity: string) {
  let container = document.querySelector(
    '[data-entity="nam_entity_navigation"]'
  );
  let buttonList = container?.querySelectorAll("button");
  buttonList?.forEach((button) => {
    button.textContent?.toLowerCase() === entity.toLowerCase()
      ? button.click()
      : null;
    console.log(button.textContent);
  });
}
