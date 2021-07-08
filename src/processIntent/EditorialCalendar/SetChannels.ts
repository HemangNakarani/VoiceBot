import {checkChildElement,checkElement,addDelay} from '../../utils/utilities'
interface valueInterface {
  kind: string;
  stringValue: string;
}
export default function setChannels(calendarChannels:Array<valueInterface>) {
    
    let button = document.querySelector(
      '[data-testid="SN_TYPE-filter-summary"]'
    ) as HTMLElement;
    button.click();

    setFilter(calendarChannels).then(async () => {
      button = await checkElement('[data-testid="SN_TYPE-filter-summary"]');
      button.click();
    });
  }


  async function  setFilter(statusArray: Array<valueInterface>) {
    let listContainer = await checkElement(
      ".ReactVirtualized__Grid.ReactVirtualized__List.KWGO"
    );
    await checkChildElement(listContainer, "input");

    let listNode = listContainer.querySelectorAll("input");
    let currentElement = listNode[listNode.length - 1];
    let lastElement = null;

    while (lastElement != currentElement) {
      listNode.forEach((input) => {
        const value = input.getAttribute("data-testid")?.toLowerCase();
        let arr = statusArray.filter((item) => {
          return item.stringValue.toLowerCase() === value;
        });
        arr.length !== 0 && !input.checked ? input.click() : null;
      });

      currentElement.scrollIntoView(true);
      await addDelay(100);
      listNode = listContainer.querySelectorAll("input");
      lastElement = currentElement;
      currentElement = listNode[listNode.length - 1];
    }
  }