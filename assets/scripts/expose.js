// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //var option = document.querySelector("[value='select']");
  //console.log(option);
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("[alt='No image selected']");
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector("[alt='Volume level 2']");
  const playSoundButton = document.querySelector('button');
  const audio = document.querySelector("audio.hidden");

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function(){ //OK
    switch (hornSelect.value) {
      case "air-horn":
        image.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        image.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        image.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        image.src = "assets/images/no-image.png";
    }
  });

  volume.addEventListener('change', function(){ //OK
    if(volume.value == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if(volume.value >= 1 && volume.value < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if(volume.value >= 33 && volume.value < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else if(volume.value >= 67){
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = volume.value / 100;
  });

  /*setTimeout(() => {
    jsConfetti.addConfetti();
  }, 500);*/

  playSoundButton.addEventListener('click', () =>{ //OK
      audio.play();
      if(hornSelect.value == "party-horn"){
        jsConfetti.addConfetti();
      }
  });
}