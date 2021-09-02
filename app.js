var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var audio = new Audio();
//adds song to audio's src
audio.src = 'img/song.mp3';

//checks if song is playing
icon.onclick = function() {
    if (audio.paused) {
        audio.play();
        icon.src = "img/pause.png";
    } else {
        audio.pause();
        icon.src = "img/play.png";
    }
}