//your JS code here. If required.
var audio;

function playSound(soundFileName) {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio('sounds/' + soundFileName);
    audio.play();
}

function stopSound() {
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}