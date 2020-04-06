import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';
import { Hand } from '../models/hand';
import { BehaviorSubject } from 'rxjs';
import { Turn } from '../models/turn';

@Injectable({
  providedIn: 'root'
})
export class TurnService {
 totalScore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  turnComplete: boolean;
  showScoring = true;
  currentIndex: number;

  turn: Turn;

  constructor() {
    this.clearTurn();
  }

  toggleScoring() {
    this.showScoring = !this.showScoring;
  }

  clearTurn() {
    this.turn = new Turn();
    this.turn.deck = new Deck();
    this.turn.deck.shuffleCards();

    this.turn.firstHand = new Hand();
    this.turn.secondHand = new Hand();
    this.turn.thirdHand = new Hand();
    this.turn.fourthHand = new Hand();
    this.turn.cribHand = new Hand();
    this.turn.cribHand.isCribHand = true;

    this.turn.turnCard = this.turn.deck.shuffledCards[20];
    this.currentIndex = 0;
    this.turn.currentCard = this.turn.deck.shuffledCards[this.currentIndex];
    this.turn.totalScore = 0;
    this.turnComplete = false;
  }

  moveToHand(hand: Hand) {
    hand.addCard(this.turn.currentCard);
    this.turn.totalScore =
      this.turn.firstHand.score.totalScore +
      this.turn.secondHand.score.totalScore +
      this.turn.thirdHand.score.totalScore +
      this.turn.fourthHand.score.totalScore +
      this.turn.cribHand.score.totalScore;
    this.changeIndex();
  }

  private changeIndex() {
    this.currentIndex++;
    this.turn.currentCard = this.turn.deck.shuffledCards[this.currentIndex];

    if (this.currentIndex === 20) {
      this.turnComplete = true;

      // add this card to all hands
      this.turn.firstHand.addCard(this.turn.currentCard, true);
      this.turn.secondHand.addCard(this.turn.currentCard, true);
      this.turn.thirdHand.addCard(this.turn.currentCard, true);
      this.turn.fourthHand.addCard(this.turn.currentCard, true);
      this.turn.cribHand.addCard(this.turn.currentCard, true);

      this.turn.totalScore =
        this.turn.firstHand.score.totalScore +
        this.turn.secondHand.score.totalScore +
        this.turn.thirdHand.score.totalScore +
        this.turn.fourthHand.score.totalScore +
        this.turn.cribHand.score.totalScore;

      // if the turn card is a jack then add 2
      if (this.turn.currentCard.value === 'J') {
        this.turn.totalScore += 2;
      }
      this.turn.firstHand.logHand('First Hand');
      this.turn.secondHand.logHand('Second Hand');
      this.turn.thirdHand.logHand('Third Hand');
      this.turn.fourthHand.logHand('Fourth Hand');
      this.turn.cribHand.logHand('Crib Hand');

    }
  }

  scoreHand(hand: Hand, total: number) {
    hand.score.totalScore = total;
    this.turn.totalScore += total;
  }
}
