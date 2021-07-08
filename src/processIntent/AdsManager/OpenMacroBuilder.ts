
import {checkElement} from "../../utils/utilities";

export default async function openMacroBuilder() {

    let macroButton = document.querySelector('[data-entityid="manage-columns--button"][aria-label="Macro"]') as HTMLButtonElement
    macroButton.click()
    let container = await checkElement('.saved-meta-field-selector')
    let addMacroButton = container.querySelector('button') as HTMLButtonElement
    console.log(addMacroButton)
    addMacroButton?.click();

}