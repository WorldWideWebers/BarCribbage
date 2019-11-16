import {Card} from './card';
import {BehaviorSubject} from 'rxjs';
import {expressionChangedAfterItHasBeenCheckedError} from '@angular/core/src/view/errors';

export class Hand {
  handFull$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public slot1$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
  public slot2$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
  public slot3$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
  public slot4$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
  public score$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

  public slot1: Card;
  public slot2: Card;
  public slot3: Card;
  public slot4: Card;
  public score: number;
  public combinations: Card[][];

  // scoring
  public pairs: Card[][];
  public fifteens: Card[][];
  public fiveCardStraight: Card[];
  public fourCardStraights: Card[][];
  public threeCardStaights: Card[][];
  public allOfASuit: Card[];
  public nobsCard: Card;

  constructor() {
    this.clearHand();
  }


  clearHand() {
    this.slot1 = null;
    this.slot1$.next(this.slot1);
    this.slot2 = null;
    this.slot2$.next(this.slot2);
    this.slot3 = null;
    this.slot3$.next(this.slot3);
    this.slot4 = null;
    this.slot4$.next(this.slot4);
    this.score = 0;
    this.score$.next(this.score);
    this.handFull$.next(false);
    this.combinations = [];
    this.pairs = [];
    this.fifteens = [];
    this.fiveCardStraight = [];
    this.threeCardStaights = [];
    this.fourCardStraights = [];
    this.allOfASuit = [];
    this.nobsCard = null;
  }

  calculateScore() {
    this.score = 0;
  }

  logHand(name: string) {
    console.log(
      {
        name,
        pairs: this.pairs,
        fifteens: this.fifteens,
        fiveCardStraight: this.fiveCardStraight,
        fourCardStraights: this.fourCardStraights,
        threeCardStraights: this.threeCardStaights,
        nobsCard: this.nobsCard
      }
    );
  }

  addCard(card: Card, isTurnCard = false) {
    if (this.slot1 == null) {
      this.slot1 = card;
      this.slot1$.next(this.slot1);
    } else if (this.slot2 == null) {
      this.slot2 = card;
      this.slot2$.next(this.slot2);
    } else if (this.slot3 == null) {
      this.slot3 = card;
      this.slot3$.next(this.slot3);
    } else if (this.slot4 == null) {
      this.slot4 = card;
      this.slot4$.next(this.slot4);
      this.handFull$.next(true);
    }
    if (isTurnCard) { this.nobsCard = card; }
    this.updateCombinations(card);
    this.scoreHand();
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

  scoreHand() {

    // first add pairs
    const twoCardCombos = this.combinations.filter(combination => combination.length === 2);
    this.pairs = twoCardCombos.filter(combination => combination[0].sequence === combination[1].sequence);
    this.score = this.pairs.length * 2;

    // now do the 15's
    this.fifteens = this.combinations.filter(combo => this.comboIsFifteen(combo));
    this.score += this.fifteens.length * 2;

    // check for nobs
    const oneCardCombos = this.combinations.filter(combo => combo.length === 1);

    if (this.nobsCard) {
      this.score += oneCardCombos.filter(combo => combo[0].suit === this.nobsCard.suit && combo[0].sequence === 11).length;
    }

    //  check for runs
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
        this.score += 5;
      }
    }

    const fourCardCombos = this.combinations.filter(combo => combo.length === 4);
    fourCardCombos.forEach(fourCardCombo => {
      fourCardCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
      if (
        fourCardCombo[0].sequence + 1 === fourCardCombo[1].sequence &&
        fourCardCombo[1].sequence + 1 === fourCardCombo[2].sequence &&
        fourCardCombo[2].sequence + 1 === fourCardCombo[3].sequence
      ) {
        this.fourCardStraights.push(fourCardCombo);
        this.score += 4;
      }

    }) ;


    const threeCardCombos = this.combinations.filter(combo => combo.length === 3);
    threeCardCombos.forEach(threeCardCombo => {
      threeCardCombo.sort((a: Card, b: Card) => a.sequence - b.sequence);
      if (
        threeCardCombo[0].sequence + 1 === threeCardCombo[1].sequence &&
        threeCardCombo[1].sequence + 1 === threeCardCombo[2].sequence
      ) {
        this.threeCardStaights.push(threeCardCombo);
        this.score += 3;
      }

    }) ;


  }

  comboIsFifteen(combo: Card[]) {
    let total = 0;
    combo.forEach(card => total += card.count);
    return total === 15;
  }
}
