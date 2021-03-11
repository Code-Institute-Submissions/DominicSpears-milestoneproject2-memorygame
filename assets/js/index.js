var modal = document.getElementById("instructionsModal");
var btn = document.getElementById("instructions-btn");
var span = document.getElementsByClassName("close-btn")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

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

var settingsModal = document.getElementById("settingsModal");
var settingsBtn = document.getElementById("settings-btn");
var settingsSpan = document.getElementById("settingsSpan");
settingsBtn.onclick = function() {
  settingsModal.style.display = "block";
}
settingsSpan.onclick = function() {
  settingsModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == settingsModal) {
    settingsModal.style.display = "none";
  }
}