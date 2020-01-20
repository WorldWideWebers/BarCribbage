import {Component, OnInit} from '@angular/core';
import {Hand} from '../../models/hand';
import {Deck} from '../../models/deck';
import {Card} from '../../models/card';
import {Score} from '../../models/score';

@Component({
  selector: 'app-test-hand',
  templateUrl: './test-hand.component.html',
  styleUrls: ['./test-hand.component.sass']
})
export class TestHandComponent implements OnInit {

  deck: Deck = new Deck();
  testHand: Hand = new Hand();
  turnCard: Card;
  score: Score = new Score();

  constructor() {
  }


  ngOnInit() {
  }

  scoreHand() {
    this.score = new Score();
    this.score.scoreHand(this.testHand.slot1);
    this.score.scoreHand(this.testHand.slot2);
    this.score.scoreHand(this.testHand.slot3);
    this.score.scoreHand(this.testHand.slot4);
    this.score.nobsCard = this.turnCard;
    this.score.scoreHand(this.turnCard);
  }

  getCardString(card: Card) {
    return card.suitInitial + ' : ' + card.value;
  }

}
