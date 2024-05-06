// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const smileImg = document.querySelector("[alt='Smiling face']");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector('button');
  const text = document.getElementById("text-to-speak");
  
  //populate voiceSelect menu
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  //play sound when clicked
  talkButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    const selectedVoice = voices.find(voice => voice.name === selectedOption);
    utterThis.voice = selectedVoice;

    synth.speak(utterThis);

    //change image when speaking
    smileImg.src = "assets/images/smiling-open.png";
    utterThis.onend = () => {
      console.log('Speech ended');
      smileImg.src = "assets/images/smiling.png";
    };
  });
}
