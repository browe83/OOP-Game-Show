/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.length = phrase.length;
  }

  /**
   * Display phrase on game board
   */
  addPhraseToDisplay() {
    const phraseContainer = document.getElementById("phrase").firstElementChild;

    for (let i = 0; i < this.phrase.length; i++) {
      if (this.phrase.charAt(i) === " ") {
        const space = document.createElement("li");
        space.classList.add("space");
        space.textContent = " ";
        phraseContainer.appendChild(space);
      } else {
        const letter = document.createElement("li");
        letter.classList.add("letter");
        letter.textContent = this.phrase.charAt(i);
        phraseContainer.appendChild(letter);
      }
    }
    this.letterBoxes = document.getElementsByClassName("letter");
  }

  /**
   * Checks if passed letter is in phrase
   * @param (string) letter - Letter to check
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(letter) {
    for (let i = 0; i < this.letterBoxes.length; i++) {
      if (letter === this.letterBoxes[i].innerHTML)
        this.letterBoxes[i].classList.add("show");
    }
  }
}
