// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector('button');
  const smileImg = document.querySelector("[alt='Smiling face']");
  const text = document.getElementById("text-to-speak");
  

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

  talkButton.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis);
    smileImg.src = "assets/images/smiling-open.png";

    utterThis.onend = () => {
      smileImg.src = "assets/images/smiling.png";
    };
  });
}
