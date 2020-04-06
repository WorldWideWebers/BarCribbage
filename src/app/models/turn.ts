import { Deck } from './deck';
import { Card } from './card';
import { Hand } from './hand';

export class Turn {
  deck: Deck;
  currentCard: Card;
  turnCard: Card;
  firstHand: Hand = new Hand();
  secondHand: Hand = new Hand();
  thirdHand: Hand = new Hand();
  fourthHand: Hand = new Hand();
  cribHand: Hand = new Hand();
  totalScore = 0;
}
