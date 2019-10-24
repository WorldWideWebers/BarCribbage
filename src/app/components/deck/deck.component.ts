import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn-service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  constructor(
    public turnService: TurnService
  ) { }

  ngOnInit() {
  }

}
