import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from '../../models/card';
// import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() card: Card;
  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
