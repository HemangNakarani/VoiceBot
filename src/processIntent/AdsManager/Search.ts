export default function search(query:string){

    let input = document.querySelector('._1mrN.flex-item-1.full-height._1OsU') as HTMLInputElement
    input.value=query
    let event = new Event('input',{
      bubbles:true,
      cancelable:true
    })
    input.dispatchEvent(event)

  }