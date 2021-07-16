export declare function didComponentMount(selector: string): Promise<HTMLElement>;
export declare function didChildComponentMount(selectorElement: HTMLElement, selector: string): Promise<HTMLElement>;
export declare function didComponentsMount(selector: string): Promise<HTMLElement[]>;
export declare function setInput(input: HTMLInputElement, value: string): void;
