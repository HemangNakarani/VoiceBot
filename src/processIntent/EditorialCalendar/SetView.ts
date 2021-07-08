import {checkElement} from '../../utils/utilities'

interface valueInterface {
  kind: string;
  stringValue: string;
}

export default async function  setView(calendarContent: Array<valueInterface>) {

    let viewButton = await checkElement(
      '[data-entityid="CONFIGURE_VIEW_SETTINGS"]'
    );
    viewButton.click();

    if(calendarContent.length===0)
      return

    let buttonsContainer = await checkElement(
      '[data-entityid="SETTINGS_SELECTOR_POPUP"]'
    );
    let [ 
      campaignButton,
      messageButton,
      taskButton,
      eventButton,
    ]: HTMLButtonElement[] = Array.from(
      buttonsContainer.querySelectorAll("button")
    ).slice(-4);
 

    let allContent = ['Campaign','Message','Task','Event']
    let selected = calendarContent.map((view)=>{
      return view.stringValue
    })

    let notSelected = allContent.filter((contnet)=>{
      return selected.indexOf(contnet) ===-1
    })

    
    selected.forEach((content) => {
      switch (content) {
        case "Campaign":
          campaignButton.getAttribute("data-selected") == "false"
            ? campaignButton.click()
            : null;
          break;
        case "Message":
          messageButton.getAttribute("data-selected") == "false"
            ? messageButton.click()
            : null;
          break;
        case "Task":
          taskButton.getAttribute("data-selected") == "false"
            ? taskButton.click()
            : null;
          break;
        case "Event":
     
          eventButton.getAttribute("data-selected") == "false"
            ? eventButton.click()
            : null;
          break;
      }
    });


    
    notSelected.forEach((content) => {
      switch (content) {
        case "Campaign":
          campaignButton.getAttribute("data-selected") == "true"
            ? campaignButton.click()
            : null;
          break;
        case "Message":
          messageButton.getAttribute("data-selected") == "true"
            ? messageButton.click()
            : null;
          break;
        case "Task":
          taskButton.getAttribute("data-selected") == "true"
            ? taskButton.click()
            : null;
          break;
        case "Event":
     
          eventButton.getAttribute("data-selected") == "true"
            ? eventButton.click()
            : null;
          break;
      }
    });


    viewButton.click();
  }
