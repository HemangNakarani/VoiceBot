export default function SearchAssets(query: string) {
  let searchBox = document.querySelector(
    `[data-testid="typeAheadContainer"] input`
  ) as HTMLInputElement;

  searchBox.value = query;

  let event = new Event("input", {
    bubbles: true,
  });

  searchBox.dispatchEvent(event);
}
