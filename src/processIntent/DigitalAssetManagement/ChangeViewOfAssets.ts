export default async function ChangeViewOfAssets(view: "list" | "grid") {
  switch (view) {
    case "grid": {
      let gridButton = document.querySelector(
        `[data-id="BOARD"]`
      ) as HTMLElement;
      gridButton.click();
      break;
    }

    case "list": {
      let listButton = document.querySelector(
        `[data-id="LIST"]`
      ) as HTMLElement;
      listButton.click();
      break;
    }

    default:
      break;
  }
}
