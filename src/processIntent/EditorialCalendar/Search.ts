export default function search(query:string){

    let button = document.querySelector('.flex-item-1.txt-bd2._45vC.fIKM.center-y.p-x-4._20Rc._2PdY') as HTMLButtonElement
    let input = button.querySelector('input') as HTMLInputElement
    input.value=query
    
    let event = new Event('input',{
      bubbles:true,
      cancelable:true
    })
    input.dispatchEvent(event)

  }