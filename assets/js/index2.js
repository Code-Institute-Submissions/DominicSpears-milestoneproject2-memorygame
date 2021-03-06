/* Credit: Code taken from https://www.youtube.com/watch?v=3uuQ3g92oPQ */ 
// audio controller for background music
class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/music/background.mp3');
        this.bgMusic.volume = 0.30;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
}

let duration = 100;
/* Credit: Code inspired by https://www.youtube.com/watch?v=3uuQ3g92oPQ */
//Full game class
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
/* Credit: Code taken from https://www.w3schools.com/jsref/met_win_settimeout.asp modified for use */
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
    /* Credit: Code taken from https://bost.ocks.org/mike/shuffle/ modified for use */ 
    //shuffle function, fisher yates function
    shuffleCards() {
        for(let i = this.cardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style.order = randIndex;
        }
    }
//flip card function
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
    //flip back the cards
    hideCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('visible');
        }); 
    }
//check for card match    
    checkForCardMatch(card) {
        if(this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else 
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
//length of game function
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        if(this.matchedCards.length === this.cardsArray.length)
            this.victory(); 
    }
//flip back function if mis-matched
     /* Credit: Code taken from https://www.w3schools.com/js/js_functions.asp */ 
     /* Credit: Code taken from https://www.w3schools.com/js/js_arrow_function.asp */ 
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 700);
    }
    //identify card by source
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    //sets countdown until gameover
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
//check "if card if ok to flip" boolean  
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
    //gameover function
    gameOver() {
        clearInterval(this.countDown);
        document.getElementById('gameoverModal').classList.add('visible');
    } 
    //win function
    victory() {
        clearInterval(this.countDown);
        document.getElementById('victoryModal').classList.add('visible');
        //scorecard on victory modal
        let ticker = document.getElementById('flips');
        let totalClicks = this.ticker.innerText;
        let x = myFunction(100, totalClicks);
        document.getElementById("score").innerHTML = x;

        function myFunction(a, b) {
            return a - b;
        }
    }      
}
//make arrays from individual overlays and cards
function ready() {
    let overlays = Array.from(document.getElementsByClassName("overlay-text"));
    let cards = Array.from(document.getElementsByClassName("card"));
//set game duration by altering number here    
    let game = new MatchThePairs(duration, cards);

/* Credit: Code taken from https://www.w3schools.com/jsref/jsref_foreach.asp modified for use */ 
/* Credit: Code taken from https://developer.mozilla.org/en-US/docs/Web/API/Element/classList modified for use */ 
//each time you click on an overlay
    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            game.startGame();  
        });
    });
//flipcard on click function
    cards.forEach(card => {
        card.addEventListener("click", () => {
            game.flipCard(card);
        });
    });
}
/* Credit: Code taken from https://www.youtube.com/watch?v=3uuQ3g92oPQ */ 
//make sure page is loaded before javascript runs
if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
} 
/* Credit: Code taken from https://www.w3schools.com/howto/howto_css_modals.asp modified for use */ 
/*-------------------------------------------Instructions Modal*/
let modal = document.getElementById("instructionsModal");
let btn = document.getElementById("instructions-btn");
btn.onclick = function() {
  modal.style.display = "block";
  clearInterval(this.countDown);
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*-------------------------------------------About Modal*/
let aboutModal = document.getElementById("aboutModal");
let aboutBtn = document.getElementById("about-btn");
aboutBtn.onclick = function() {
  aboutModal.style.display = "block";
  clearInterval(this.countDown);
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};