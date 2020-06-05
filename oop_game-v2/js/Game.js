/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
    this.ready = false;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
  createPhrases() {
    const phrases = [
      new Phrase("There can be only one"),
      new Phrase("You shall not pass"),
      new Phrase("Ill be back"),
      new Phrase("Luke Im your father"),
      new Phrase("Its only a flesh wound"),
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    const randNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randNum];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    this.ready = true;
    const phraseContainer = document.getElementById("phrase").firstElementChild;
    phraseContainer.innerHTML = "";
    this.missed = 0;
    this.screenOverlay = document.getElementById("overlay");
    this.screenOverlay.style.display = "none";
    const newPhrase = this.getRandomPhrase();
    this.activePhrase = newPhrase;
    newPhrase.addPhraseToDisplay();

    for (let i = 0; i < keyboardButtons.length; i++) {
      if (keyboardButtons[i].classList.contains("chosen")) {
        keyboardButtons[i].classList.remove("chosen");
      } else if (keyboardButtons[i].classList.contains("wrong")) {
        keyboardButtons[i].classList.remove("wrong");
      }
    }
    const livesContainers = document.querySelector("ol").children;

    for (let i = 0; i < livesContainers.length; i++) {
      livesContainers[i].classList.add("tries");
      livesContainers[i].firstElementChild.src = "images/liveHeart.png";
    }

    for (let i = 0; i < keyboardButtons.length; i++) {
      if ((keyboardButtons[i].disabled = true)) {
        keyboardButtons[i].disabled = false;
      }
    }

    if (this.screenOverlay.classList.contains("win")) {
      this.screenOverlay.classList.replace("win", "start");
    } else if (this.screenOverlay.classList.contains("lose")) {
      this.screenOverlay.classList.replace("lose", "start");
    }
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(keyboardButton) {
    if (this.ready) {
      keyboardButton.disabled = true;
      if (this.activePhrase.phrase.includes(keyboardButton.textContent)) {
        keyboardButton.classList.add("chosen");
        this.activePhrase.showMatchedLetter(keyboardButton.textContent);
        if (this.checkForWin()) {
          this.gameOver(true);
        }
      } else {
        keyboardButton.classList.add("wrong");
        this.removeLife();
      }
    }
  }

  /**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
  checkForWin() {
    const phraseLettersArr = document.getElementsByClassName("letter");
    const revealedLettersArr = document.getElementsByClassName("show");
    if (phraseLettersArr.length === revealedLettersArr.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    this.missed += 1;

    if (this.missed === 5) {
      this.gameOver(false);
    } else {
      document.querySelector(".tries").firstElementChild.src =
        "images/lostHeart.png";
      document
        .querySelector(".tries")
        .firstElementChild.parentElement.classList.remove("tries");
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    this.ready = false;
    this.screenOverlay.style.display = "";
    const gameOverMsg = document.getElementById("game-over-message");
    if (gameWon) {
      gameOverMsg.textContent = "You won! Congratulations!";
      this.screenOverlay.classList.replace("start", "win");
      this.activePhrase = null;
    } else {
      gameOverMsg.textContent = "Game Over. Please try again.";
      this.screenOverlay.classList.replace("start", "lose");
      this.activePhrase = null;
    }
  }
}
