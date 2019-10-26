import { Component, OnInit } from '@angular/core';
import { TurnService } from 'src/app/services/turn-service';

@Component({
  selector: 'app-turn',
  templateUrl: './turn.component.html',
  styleUrls: ['./turn.component.scss']
})
export class TurnComponent implements OnInit {

  constructor(
    public turnService: TurnService
  ) { }

  ngOnInit() {
  }

}
