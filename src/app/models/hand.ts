import {Card} from './card';
import {Score} from './score';

export class Hand {
  isCribHand = false;


  public slot1: Card;
  public slot2: Card;
  public slot3: Card;
  public slot4: Card;

  // scoring
  public score: Score;

  constructor() {
    this.clearHand();
  }


  clearHand() {
    this.slot1 = null;
    this.slot2 = null;
    this.slot3 = null;
    this.slot4 = null;
    this.score = new Score();
  }


  logHand(name: string) {
    console.log(
      {
        name,
        pairs: this.score.pairs,
        fifteens: this.score.fifteens,
        fiveCardStraight: this.score.fiveCardStraight,
        fourCardStraights: this.score.fourCardStraights,
        threeCardStraights: this.score.threeCardStraights,
        nobsCard: this.score.nobsCard
      }
    );
  }

  addCard(card: Card, isTurnCard = false) {
    if (this.slot1 == null) {
      this.slot1 = card;
    } else if (this.slot2 == null) {
      this.slot2 = card;
    } else if (this.slot3 == null) {
      this.slot3 = card;
    } else if (this.slot4 == null) {
      this.slot4 = card;
    }
    if (isTurnCard) {
      this.score.nobsCard = card;
    }
    this.score.scoreHand(card, this.isCribHand);
  }

}
