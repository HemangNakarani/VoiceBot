let SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;

let grammar = "#JSGF V1.0;";
let recognition = new SpeechRecognition();

let speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.lang = "en-IN";
recognition.interimResults = false;

export default recognition;
