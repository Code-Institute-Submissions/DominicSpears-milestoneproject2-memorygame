class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/music/background.mp3');
        this.bgMusic.volume = 0.01;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
}

//make arrays from individual overlays and cards
function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));

//each time you click on an overlay
    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            //start game
            let audioController = new AudioController();
            audioController.startMusic();    
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
//flipcard function
        });
    });
}

//make sure page is loaded before javascript runs
if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}