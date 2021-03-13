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

        this.shuffleCards();
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            //count flips as clicked
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            //if statement match check
        }
    }
    //shuffle function, fisher yates function
    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
//check "if card if ok to flip" boolean  
    canFlipCard(card) {
        return true;
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }    
}
//make arrays from individual overlays and cards
function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
    let game = new MatchThePairs(100, cards);

//each time you click on an overlay
    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            game.startGame();  
        });
    });

    cards.forEach(card => {
        card.addEventListener("click", () => {
            game.flipCard(card);
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