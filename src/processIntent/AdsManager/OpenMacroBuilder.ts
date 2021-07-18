
import { didComponentMount} from "voicebot-dommer";

export default async function openMacroBuilder() {
    
    let macroButton = document.querySelector('[data-entityid="manage-columns--button"][aria-label="Macro"]') as HTMLButtonElement
    macroButton.click()
    let container = await didComponentMount('.saved-meta-field-selector')
    let addMacroButton = container.querySelector('button') as HTMLButtonElement
    addMacroButton?.click();

}