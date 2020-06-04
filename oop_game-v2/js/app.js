/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
/**
 * Listens for click on `#btn_reset` and calls startGame() on game object
 */
document.getElementById("btn__reset").addEventListener("click", function () {
  game.startGame();
});

const keyboardButtons = document.getElementsByClassName("key");

/* Listens to keyboard on screen for clicks
 */
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
