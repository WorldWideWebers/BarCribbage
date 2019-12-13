import {Card} from './card';


export class Score {
  // scoring
  public combinations: Card[][];
  public pairs: Card[][];
  public fifteens: Card[][];
  public fiveCardStraight: Card[];
  public fourCardStraights: Card[][];
  public threeCardStraights: Card[][];
  public allOfASuit: Card[];
  public nobsCard: Card;

  public pointsFromPairs = 0;
  public pointsFromFifteens = 0;
  public pointsFrom5CardStraight = 0;
  public pointsFrom4CardStraights = 0;
  public pointsFrom3CardStraights = 0;
  public pointsFromAllInOneSuit = 0;
  public pointsFromNobs = 0;
  public totalScore = 0;

  constructor() {
    this.combinations = [];
    this.pairs = [];
    this.fifteens = [];
    this.fiveCardStraight = [];
    this.threeCardStraights = [];
    this.fourCardStraights = [];
    this.allOfASuit = [];
    this.nobsCard = null;
  }

  public scoreHand(card: Card) {
    this.updateCombinations(card);


    this.scorePairs();

    this.score15s();

    this.scoreNobs();

    this.checkForRuns();

    this.checkForFlush();

  }

  private checkForFlush() {
    const flushCombos = this.combinations.filter(combo =>
      ((combo.length === 4 && this.comboMissingTurnCard(combo)) ||
        combo.length === 5));
    flushCombos.forEach(flushCombo => {
      flushCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
    });
  }

  private checkForRuns() {
    this.checkFor5CardRuns();
    this.checkFor4CardRuns();
    this.checkFor3CardRuns();
  }

  private checkFor3CardRuns() {
    const threeCardCombos = this.combinations.filter(combo => combo.length === 3);
    threeCardCombos.forEach(threeCardCombo => {
      threeCardCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
      if (
        threeCardCombo[0].sequence + 1 === threeCardCombo[1].sequence &&
        threeCardCombo[1].sequence + 1 === threeCardCombo[2].sequence &&
        ((this.fiveCardStraight.length === 0) || !this.cardIsInThisRun(threeCardCombo[1], this.fiveCardStraight)) &&
        ((this.fourCardStraights.length === 0) || !this.cardIsInThisRun(threeCardCombo[1], this.fourCardStraights[0]))
      ) {
        this.threeCardStraights.push(threeCardCombo);
        this.totalScore += 3;
      }

    });
  }

  private checkFor4CardRuns() {
    const fourCardCombos = this.combinations.filter(combo => combo.length === 4);
    fourCardCombos.forEach(fourCardCombo => {
      fourCardCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
      if (
        fourCardCombo[0].sequence + 1 === fourCardCombo[1].sequence &&
        fourCardCombo[1].sequence + 1 === fourCardCombo[2].sequence &&
        fourCardCombo[2].sequence + 1 === fourCardCombo[3].sequence &&
        !this.cardIsInThisRun(fourCardCombo[1], this.fiveCardStraight)
      ) {
        this.fourCardStraights.push(fourCardCombo);
        this.totalScore += 4;
      }

    });
  }

  private checkFor5CardRuns() {
    const fiveCardCombos = this.combinations.filter(combo => combo.length === 5);
    if (fiveCardCombos.length > 0) {
      const fiveCardCombo = fiveCardCombos[0] as Card[];
      fiveCardCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
      if (
        fiveCardCombo[0].sequence + 1 === fiveCardCombo[1].sequence &&
        fiveCardCombo[1].sequence + 1 === fiveCardCombo[2].sequence &&
        fiveCardCombo[2].sequence + 1 === fiveCardCombo[3].sequence &&
        fiveCardCombo[3].sequence + 1 === fiveCardCombo[4].sequence
      ) {
        this.fiveCardStraight = fiveCardCombo;
        this.totalScore += 5;
      }
    }
  }

  private cardIsInThisRun(cardToCheck: Card, combination: Card[]): boolean {
    let cardIsIn = false;

    combination.forEach(card => {
      if (card.id === cardToCheck.id) {
        cardIsIn = true;
      }
    });
    return cardIsIn;
  }

  private scoreNobs() {
// check for nobs
    const oneCardCombos = this.combinations.filter(combo => combo.length === 1);

    if (this.nobsCard) {
      this.totalScore += oneCardCombos.filter(combo => combo[0].suit === this.nobsCard.suit && combo[0].sequence === 11).length;
    }
  }

  private score15s() {
// now do the 15's
    this.fifteens = this.combinations.filter(combo => this.comboIsFifteen(combo));
    this.totalScore += this.fifteens.length * 2;
  }

  private scorePairs() {
    const twoCardCombos = this.combinations.filter(combination => combination.length === 2);
    this.pairs = twoCardCombos.filter(combination => combination[0].sequence === combination[1].sequence);
    this.totalScore = this.pairs.length * 2;
  }

  comboIsFifteen(combo: Card[]) {
    let total = 0;
    combo.forEach(card => total += card.count);
    return total === 15;
  }

  comboMissingTurnCard(combo: Card[]): boolean {
    let hasTurnCard = false;

    if (this.nobsCard) {
      combo.forEach(card => {
        if (card.id === this.nobsCard.id) {
          hasTurnCard = true;
        }
      });
    }
    return hasTurnCard;
  }

  updateCombinations(newCard: Card) {

    // for each existing combination-- add a new one with this card
    this.combinations.forEach(combination => {
      const newCombination = [];
      combination.forEach(card => newCombination.push(card));
      newCombination.push(newCard);
      this.combinations.push(newCombination);
    });

    // always add the card itself-- after everthing else is done!
    this.combinations.push([newCard]);

    console.log(this.combinations);
  }


}
