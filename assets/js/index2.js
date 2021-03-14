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
    }
    gameOver() {
        this.stopMusic();
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
    //wait 500ms before function
    setTimeout(() => {
            this.audioController.startMusic();
            this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
        });
    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            //count flips as clicked
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');

            if(this.cardToCheck)
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        /*card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();*/
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory(); 
    }
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);
    }
    //identify card by source
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countDown);
        /*this.audioController.gameOver();*/
        document.getElementById('gameoverModal').classList.add('visible');
    }
    victory() {
        clearInterval(this.countDown);
        /*this.audioController.victory();*/
        document.getElementById('victoryModal').classList.add('visible');
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
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }  
}
//make arrays from individual overlays and cards
function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
//set game duration by altering number here    
    let game = new MatchThePairs(60, cards);

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

/*-------------------------------------------Instructions Modal*/
var modal = document.getElementById("instructionsModal");
var btn = document.getElementById("instructions-btn");
var span = document.getElementsByClassName("close-btn")[0];
btn.onclick = function() {
  modal.style.display = "block";
  clearInterval(this.countDown);
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*-------------------------------------------Difficulty Modal*/
var diffModal = document.getElementById("diffModal");
var difficultyBtn = document.getElementById("difficulty-btn");
var diffSpan = document.getElementById("diffSpan");
difficultyBtn.onclick = function() {
  diffModal.style.display = "block";
}
diffSpan.onclick = function() {
  diffModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == diffModal) {
    diffModal.style.display = "none";
  }
}