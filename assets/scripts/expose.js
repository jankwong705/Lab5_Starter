// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //var option = document.querySelector("[value='select']");
  //console.log(option);
  const hornSelect = document.getElementById("horn-select");
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector("[alt='Volume level 2']");
  // const soundType = document.getElementById('audio-selection');
  const playSoundButton = document.querySelector('button');

  hornSelect.addEventListener('change', function(){ //OK
    alert("hi");
  });

  volume.addEventListener('change', function(){ //OK
    alert("hi");
  });

  playSoundButton.addEventListener('click', function(){ //OK
    alert("hi");
  });
}