// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //var option = document.querySelector("[value='select']");
  //console.log(option);
  const hornSelect = document.getElementById("horn-select");
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector("[alt='Volume level 2']");
  const image = document.querySelector("[alt='No image selected']");
  // const soundType = document.getElementById('audio-selection');
  const playSoundButton = document.querySelector('button');

  hornSelect.addEventListener('change', function(){ //OK
    switch (hornSelect.value) {
      case "air-horn":
        image.src = "assets/images/air-horn.svg";
        break;
      case "car-horn":
        image.src = "assets/images/car-horn.svg";
        break;
      case "party-horn":
        image.src = "assets/images/party-horn.svg";
        break;
      default:
        image.src = "assets/images/no-image.png";
    }
  });

  volume.addEventListener('change', function(){ //OK
    alert("hi");
  });

  playSoundButton.addEventListener('click', function(){ //OK
    alert("hi");
  });
}