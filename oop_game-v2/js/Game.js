/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null; //should this be a string?
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
    const phraseContainer = document.getElementById("phrase").firstElementChild;
    phraseContainer.innerHTML = "";
    this.screenOverlay = document.getElementById("overlay");
    this.screenOverlay.style.display = "none";

    const newPhrase = this.getRandomPhrase();
    newPhrase.addPhraseToDisplay();
    this.activePhrase = newPhrase;
  }

  //   handleInteraction(e) {
  //     const clickedLetter = e.target;
  //     }
  //   }

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
    if (document.querySelector(".tries") === null) {
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
