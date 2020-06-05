/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**
 * Listens for click on `#btn_reset` and calls startGame() on game object
 */

let game = null;

document.getElementById("btn__reset").addEventListener("click", function () {
  game = new Game();
  game.startGame();
});

/* Listens to keyboard on screen for clicks
 */
const keyboardButtons = document.getElementsByClassName("key");

for (let i = 0; i < keyboardButtons.length; i++) {
  keyboardButtons[i].addEventListener("click", function (e) {
    game.handleInteraction(e.target);
  });
}
/* Listens to keyboad for presses
 */
for (let i = 0; i < keyboardButtons.length; i++) {
  addEventListener("keydown", function (e) {
    if (e.key === keyboardButtons[i].textContent)
      game.handleInteraction(keyboardButtons[i]);
  });
}
