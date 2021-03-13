// audio controller for background music
class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/music/background.mp3');
        this.bgMusic.volume = 0.01;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    victory() {
        this.stopMusic();
        this.victory.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOver.play();
    }
}
//game class
class MatchThePairs {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        //countdown timer
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        //flip counter
        this.ticker = document.getElementById('flips');
        //audio controller
        this.audioController = new AudioController();
    }
//startgame function
    startGame() {
        this.cardToCheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
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

//let audioController = new AudioController();
//            audioController.startMusic(); 