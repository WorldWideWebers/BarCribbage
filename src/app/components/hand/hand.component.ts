import { Component, OnInit, Input } from '@angular/core';
import { Hand } from 'src/app/models/hand';
import {TurnService} from '../../services/turn-service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  @Input() hand: Hand;

  constructor(public turnService: TurnService) { }

  ngOnInit() {
  }

  addCard() {
    this.turnService.moveToHand(this.hand);
  }

}
