import { addDelay, didComponentMount } from "voicebot-dommer";

export default async function changePeriod(period:string){

    let viewContainer = document.querySelector('[data-entityid="VIEW_TYPE_SWITCHER"]')as HTMLDivElement
    let selectButton = viewContainer.querySelector('div') as HTMLDivElement
    selectButton.click()

    let viewType = ["Year","Quarter","Month","Week","Day","List"]

    if(!viewType.includes(period)){
        return;
    }

    let selectContainer = await didComponentMount('[role="listbox"]')
    addDelay(100)
    let options = selectContainer.querySelectorAll('li')
 
    console.log("Options",options)
    options.forEach((option)=>{
        const value = option.innerText
        console.log(value)
        value.toLocaleLowerCase()===period.toLocaleLowerCase()?option.click():null;

    })

}