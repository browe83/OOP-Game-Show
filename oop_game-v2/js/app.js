/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.getElementById("btn__reset").addEventListener("click", function () {
  game.startGame();
});

const keyboardButtons = document.getElementsByClassName("key");

for (let i = 0; i < keyboardButtons.length; i++) {
  keyboardButtons[i].addEventListener("click", function (e) {
    game.handleInteraction(e.target);
  });
}
