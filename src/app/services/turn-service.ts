import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';
import { Hand } from '../models/hand';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class TurnService {
  turnComplete$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  deck$: BehaviorSubject<Deck> = new BehaviorSubject<Deck>(null);
  currentIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentCard$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
  firstHand$: BehaviorSubject<Hand> = new BehaviorSubject<Hand>(null);
  secondHand$: BehaviorSubject<Hand> = new BehaviorSubject<Hand>(null);
  thirdHand$: BehaviorSubject<Hand> = new BehaviorSubject<Hand>(null);
  fourthHand$: BehaviorSubject<Hand> = new BehaviorSubject<Hand>(null);
  cribHand$: BehaviorSubject<Hand> = new BehaviorSubject<Hand>(null);
  totalScore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  turnComplete: boolean;

  showScoring = true;

  deck: Deck;
  currentIndex: number;
  currentCard: Card;
  turnCard: Card;
  firstHand: Hand;
  secondHand: Hand;
  thirdHand: Hand;
  fourthHand: Hand;
  cribHand: Hand;
  totalScore: number;

  constructor() {
    this.clearTurn();
  }

  toggleScoring() {
    this.showScoring = !this.showScoring;
  }

  clearTurn() {
    this.deck = new Deck();
    this.deck.shuffleCards();
    this.deck$.next(this.deck);

    this.firstHand = new Hand();
    this.firstHand$.next(this.firstHand);
    this.secondHand = new Hand();
    this.secondHand$.next(this.secondHand);
    this.thirdHand = new Hand();
    this.thirdHand$.next(this.thirdHand);
    this.fourthHand = new Hand();
    this.fourthHand$.next(this.fourthHand);
    this.cribHand = new Hand();
    this.cribHand.isCribHand = true;
    this.cribHand$.next(this.cribHand);

    this.turnCard = this.deck.shuffledCards[20];
    this.currentIndex = 0;
    this.currentCard = this.deck.shuffledCards[this.currentIndex];
    this.currentCard$.next(this.currentCard);
    this.totalScore = 0;
    this.totalScore$.next(this.totalScore);
    this.turnComplete = false;
    this.turnComplete$.next(this.turnComplete);
  }

  moveToHand(hand: Hand) {
    hand.addCard(this.currentCard);
    this.totalScore = this.firstHand.score.totalScore + this.secondHand.score.totalScore
    + this.thirdHand.score.totalScore + this.fourthHand.score.totalScore + this.cribHand.score.totalScore;
    this.changeIndex();
  }

  private changeIndex() {
    this.currentIndex++;
    this.currentIndex$.next(this.currentIndex);
    this.currentCard = this.deck.shuffledCards[this.currentIndex];
    this.currentCard$.next(this.currentCard);

    if (this.currentIndex === 20) {
      this.turnComplete = true;
      this.turnComplete$.next(this.turnComplete);

      // add this card to all hands
      this.firstHand.addCard(this.currentCard, true);
      this.secondHand.addCard(this.currentCard, true);
      this.thirdHand.addCard(this.currentCard, true);
      this.fourthHand.addCard(this.currentCard, true);
      this.cribHand.addCard(this.currentCard, true);

      this.totalScore = this.firstHand.score.totalScore + this.secondHand.score.totalScore
        + this.thirdHand.score.totalScore + this.fourthHand.score.totalScore + this.cribHand.score.totalScore;

      // if the turn card is a jack then add 2
      if (this.currentCard.value === 'J') { this.totalScore += 2; }
      this.firstHand.logHand('First Hand');
      this.secondHand.logHand('Second Hand');
      this.thirdHand.logHand('Third Hand');
      this.fourthHand.logHand('Fourth Hand');
      this.cribHand.logHand('Crib Hand');

    }
  }

  scoreHand(hand: Hand, total: number) {
    hand.score.totalScore = total;
    this.totalScore += total;
  }
}
