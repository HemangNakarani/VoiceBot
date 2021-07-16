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

export function addDelay(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds);
  });
}

export async function scrollList(
  scrollableContainerSelectorString: string,
  listelementSelectorString: string,
  delayInMillisecondsAfterScroll: number,
  callback: (listElement: HTMLElement) => boolean
) {
  let scrollableContainer = await didComponentMount(
    scrollableContainerSelectorString
  );
  let scrollableContainerHeight = scrollableContainer.clientHeight;
  let scrollableContainerScrollHeight = scrollableContainer.scrollHeight;
  let scrollableContainerScrollTopMax =
    scrollableContainerScrollHeight - scrollableContainerHeight;
  let currentScroll = 0;
  let canEnter = true;

  let listnode = scrollableContainer.querySelector(
    listelementSelectorString
  ) as HTMLElement;

  while (
    scrollableContainer.scrollTop < scrollableContainerScrollTopMax ||
    canEnter === true
  ) {
    let shouldBreak = callback(listnode);
    if (shouldBreak) {
      break;
    }

    if (listnode.nextSibling) {
      listnode = listnode.nextSibling as HTMLElement;
    } else {
      currentScroll = scrollableContainer.scrollTop + scrollableContainerHeight;
      scrollableContainer.scrollTop = currentScroll;
      canEnter = false;

      await addDelay(delayInMillisecondsAfterScroll);

      if (listnode.nextSibling) {
        listnode = listnode.nextSibling as HTMLElement;
      }
    }
  }
}
