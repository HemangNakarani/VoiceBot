function requestAnimationFrameAsync() {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve);
  });
}


export async function didComponentMount(selector: string) {
  let querySelector = null;
  while (querySelector === null) {
    await requestAnimationFrameAsync();
    querySelector = document.querySelector(selector);
  }
  return querySelector as HTMLElement;
}

export async function didChildComponentMount(
  selectorElement: HTMLElement,
  selector: string
) {
  let querySelector = null;
  while (querySelector === null) {
    await requestAnimationFrameAsync();
    querySelector = selectorElement.querySelector(selector);
  }
  return querySelector as HTMLElement;
}

export async function didComponentsMount(selector: string) {
  let querySelector = null;
  while (querySelector === null || querySelector?.length === 0) {
    await requestAnimationFrameAsync();
    querySelector = document.querySelectorAll(selector);
  }

  return Array.from(querySelector) as HTMLElement[];
}

export function setInput(input: HTMLInputElement, value: string) {
  input.value = value;
  let event = new Event("input", {
    bubbles: true,
    cancelable: true,
  });
  input.dispatchEvent(event);
}
