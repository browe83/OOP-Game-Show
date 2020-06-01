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
}
