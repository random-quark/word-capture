var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

const fontList = [
  "Roboto Condensed",
  "Montaga",
  "Merriweather",
  "Poppins",
  "Stylish",
  "PT Serif",
  "Lora",
  "Muli",
  "Rubik",
  "Fira Sans",
  "Inconsolata",
  "Bitter"
];

var recognition = new SpeechRecognition();
recognition.start();

recognition.onresult = function(event) {
  const speechResult = event.results[0][0].transcript;
  const words = document.querySelector(".words");
  words.classList.remove("visible");
  setTimeout(() => {
    words.style.fontFamily =
      fontList[Math.floor(Math.random() * fontList.length)];
    words.style.fontSize = Math.min(Math.random() * 100, 15);
    words.textContent = `"${speechResult}"`;
    words.classList.add("visible");
  }, 1000);
};

recognition.onerror = function(event) {
  console.error(event);
};

recognition.onaudiostart = function(event) {
  //Fired when the user agent has started to capture audio.
  console.log("SpeechRecognition.onaudiostart");
};

recognition.onaudioend = function(event) {
  //Fired when the user agent has finished capturing audio.
  console.log("SpeechRecognition.onaudioend");
};

recognition.onend = function(event) {
  //Fired when the speech recognition service has disconnected.
  console.log("SpeechRecognition.onend");

  const pauseTime = Math.random() * 1000 * 15;

  console.log(`Pause for ${pauseTime / 1000} seconds`);

  setTimeout(() => {
    recognition.start();
  }, pauseTime);
};

recognition.onnomatch = function(event) {
  //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
  console.log("SpeechRecognition.onnomatch");
};

recognition.onsoundstart = function(event) {
  //Fired when any sound — recognisable speech or not — has been detected.
  console.log("SpeechRecognition.onsoundstart");
};

recognition.onsoundend = function(event) {
  //Fired when any sound — recognisable speech or not — has stopped being detected.
  console.log("SpeechRecognition.onsoundend");
};

recognition.onspeechstart = function(event) {
  //Fired when sound that is recognised by the speech recognition service as speech has been detected.
  console.log("SpeechRecognition.onspeechstart");
};
recognition.onstart = function(event) {
  //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
  console.log("SpeechRecognition.onstart");
};
