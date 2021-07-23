import {didComponentMount,didChildComponentMount} from "voicebot-dommer"

export default async function exportChart() {
    
    let container  = await didComponentMount('[aria-label="Case First Response SLA over Time"]')
    let optionButton = container.querySelector('[data-actionid="more_actions"]') as HTMLButtonElement
    //Open the pop up for option button
    optionButton.click()
    let popover = await didComponentMount('[data-baseweb="popover"]')

    let buttons = popover?.querySelectorAll('li') 
    let exportWidgetButton = buttons[3]
    
    //Open the pop for export options
    let evt = new MouseEvent("mouseover", {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    exportWidgetButton.dispatchEvent(evt)
    let nestedPopover = await didChildComponentMount(popover,'[data-baseweb="popover"]')
    let exportPDFButton = nestedPopover?.querySelectorAll('li')[1]
    exportPDFButton?.click()

}