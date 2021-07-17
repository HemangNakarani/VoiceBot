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
  waitForFirstElementSelectorString: string,
  delayInMillisecondsAfterScroll: number,
  callback: (listElement: HTMLElement) => boolean
) {
  let scrollableContainer = await didComponentMount(
    scrollableContainerSelectorString
  );
  let scrollableContainerHeight = scrollableContainer.clientHeight;
  let currentScroll = 0;
  let canEnter = true;

  await didChildComponentMount(
    scrollableContainer,
    waitForFirstElementSelectorString
  );

  let listnode = await didChildComponentMount(
    scrollableContainer,
    listelementSelectorString
  );
  let prevNode = null;

  while (
    scrollableContainer.scrollTop <
      scrollableContainer.scrollHeight - scrollableContainer.clientHeight ||
    canEnter === true
  ) {
    if (prevNode != listnode) {
      let shouldBreak = callback(listnode);
      if (shouldBreak) {
        break;
      }
      prevNode = listnode;
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

export function click(selector: string) {
  let element = document.querySelector(selector) as HTMLElement;
  element.click();
}
