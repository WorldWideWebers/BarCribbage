import { Component, OnInit } from '@angular/core';
import { Deck } from '../../models/deck';

@Component({
  selector: 'app-shown-deck',
  templateUrl: './shown-deck.component.html',
  styleUrls: ['./shown-deck.component.css']
})
export class ShownDeckComponent implements OnInit {

  deck: Deck;
  constructor() {
    this.deck = new Deck();
  }

  ngOnInit() {
  }

}
