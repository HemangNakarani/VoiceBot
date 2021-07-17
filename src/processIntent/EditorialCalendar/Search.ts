import {setInput} from 'voicebot-dommer'

export default function search(query: string) {
  let input = document.querySelector(
    `[data-testid="typeAheadContainer"] input`
  ) as HTMLInputElement;
  setInput(input,query)
}
