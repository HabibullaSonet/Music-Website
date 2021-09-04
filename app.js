var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var loadingPage = document.querySelector(".loadingPage");

var audio = new Audio();

//adds song to audio's src
audio.src = 'img/song.mp3';
audio.loop = true;
//checks if song is playing
icon.onclick = function() {
        if (audio.paused) {
            audio.play();
            icon.src = "img/pause.png";
            icon.style.transform = 'rotateY(180deg)';
            document.getElementById('status').style.opacity = 1;
            document.getElementById('status').innerHTML = 'Playing ...';
            setTimeout(function() {
                document.getElementById('status').style.opacity = 0;
            }, 2000);
        } else {
            audio.pause();
            icon.src = "img/play.png";
            icon.style.transform = 'rotateY(0deg)';
            document.getElementById('status').innerHTML = 'Click Here To Listen';
            document.getElementById('status').style.opacity = 1;
        }
    } //loading page disapear
window.addEventListener('load', function() {
    loadingPage.style.opacity = 0;
    setTimeout(() => {
        loadingPage.style.display = 'none';
    }, 1000);
});

//flame particles
particlesJS("particles-js", { "particles": { "number": { "value": 400, "density": { "enable": true, "value_area": 3000 } }, "color": { "value": "#fc0000" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 2, "random": true, "anim": { "enable": true, "speed": 5, "size_min": 0, "sync": false } }, "line_linked": { "enable": false, "distance": 500, "color": "#ffffff", "opacity": 0.4, "width": 2 }, "move": { "enable": true, "speed": 7.8914764163227265, "direction": "top", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "bubble" }, "onclick": { "enable": false, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 0.5 } }, "bubble": { "distance": 400, "size": 4, "duration": 0.3, "opacity": 1, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true });
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);;