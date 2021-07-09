export default function search(query:string){

    let input = document.querySelector('[data-testid="launchpadSearch"]') as HTMLInputElement
    input.value = query
    let event = new Event('input',{
        bubbles:true,
        cancelable:true
      })
    input.dispatchEvent(event)

}