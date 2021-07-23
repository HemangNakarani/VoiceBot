import { addDelay } from "voicebot-dommer"
import setStatus from './SetStatus'
export default  async function OpenWithStatus(){

    let button = document.querySelector('[aria-label="Editorial Calendar"]') as HTMLButtonElement
    button.click()
    await addDelay(2000)
    setStatus([{kind:"stringValue",stringValue:"In Approval"}])

}