// Bit that plays sounds by clicks

function playSound(soundfile) {
  var audio = new Audio(soundfile);
  audio.play();
}
// Bit that plays sounds by keystrokes

document.addEventListener("keydown", function(event) {
  var key = event.key;
  console.log(event.key);
  keySound(key);
});

function keySound(key) {

  switch (event.key) {
    case "a":
      var hihat = new Audio('sounds/Hi-Hat-Open-Hit.mp3');
      hihat.play();
      break;

    case "w":
      var crash1 = new Audio('sounds/Crash-Cymbal-Hit.mp3');
      crash1.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/Small-Tom-Drum-Hit.mp3');
      tom1.play();
      break;

    case "s":
      var snare = new Audio('sounds/Snare-Drum-Hit.mp3');
      snare.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/Medium-Tom-Drum-Hit.mp3');
      tom2.play();
      break;

    case "i":
      var tom3 = new Audio('sounds/Ride-Cymbal-Bell-Hit.mp3');
      tom3.play();
      break;

    case "l":
      var crash2 = new Audio('sounds/Crash-Cymbal-Hit2.mp3');
      crash2.play();
      break;

    case "k":
      var ftom = new Audio('sounds/Floor-Tom.mp3');
      ftom.play();
      break;

    case "m":
      var bass = new Audio('sounds/Bass-Drum-Hit.mp3');
      bass.play();
      break;

    default:
      console.log(key);
  };
};
