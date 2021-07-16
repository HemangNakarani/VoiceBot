export declare function didComponentMount(selector: string): Promise<HTMLElement>;
export declare function didChildComponentMount(selectorElement: HTMLElement, selector: string): Promise<HTMLElement>;
export declare function didComponentsMount(selector: string): Promise<HTMLElement[]>;
export declare function setInput(input: HTMLInputElement, value: string): void;
export declare function addDelay(seconds: number): Promise<unknown>;
export declare function scrollList(scrollableContainerSelectorString: string, listelementSelectorString: string, delayInMillisecondsAfterScroll: number, callback: (listElement: HTMLElement) => boolean): Promise<void>;
