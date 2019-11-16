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
      this.firstHand.addCard(this.deck.shuffleCards[this.currentIndex]);
      this.secondHand.addCard(this.deck.shuffleCards[this.currentIndex]);
      this.thirdHand.addCard(this.deck.shuffleCards[this.currentIndex]);
      this.fourthHand.addCard(this.deck.shuffleCards[this.currentIndex]);
      this.cribHand.addCard(this.deck.shuffleCards[this.currentIndex]);

      this.firstHand.logHand('First Hand');
      this.secondHand.logHand('Second Hand');
      this.thirdHand.logHand('Third Hand');
      this.fourthHand.logHand('Fourth Hand');
      this.cribHand.logHand('Crib Hand');

    }
  }

  scoreHand(hand: Hand, total: number) {
    hand.score = total;
    this.totalScore += total;
  }
}
