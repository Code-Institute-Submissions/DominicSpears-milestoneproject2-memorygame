//make sure page is loaded before javascript runs
if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready());
} else {
    ready();
}

//make arrays from individual overlays and cards
function ready() {
    let overlays = Array.from[document.getElementsByClassName("overlay-text")]
    let cards = Array.from[document.getElementsByClassName("card")]

//each time you click on an overlay
    overlays.forEach(overlay => {
        overlay.addEventListener("click", () => {
            overlay.classList.remove("visible");
            //start game
        
        });
    });
}