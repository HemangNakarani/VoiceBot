export default async function addAsset(type: string) {
  let addAssetButton = document.querySelector(
    `[data-id="samAddAssetsButton"]`
  ) as HTMLButtonElement;
  addAssetButton.click();

  let assetList = Array.from(
    document.querySelectorAll(`[data-baseweb="popover"] li`)
  ) as HTMLElement[];

  assetList.every((node) => {
    if (
      node.querySelector("span")?.textContent?.toLowerCase() ===
      type.toLocaleLowerCase()
    ) {
      node.click();
      return false;
    } else {
      return true;
    }
  });
}
