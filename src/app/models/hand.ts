import { Card } from './card';
import { BehaviorSubject } from 'rxjs';

export class Hand {
         handFull$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

         public slot1$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
         public slot2$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
         public slot3$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
         public slot4$: BehaviorSubject<Card> = new BehaviorSubject<Card>(null);
         public score$: BehaviorSubject<number> = new BehaviorSubject<number>(null);

         public slot1: Card;
         public slot2: Card;
         public slot3: Card;
         public slot4: Card;
         public score: number;
         constructor() {
           this.clearHand();
         }

         clearHand() {
           this.slot1 = null;
           this.slot1$.next(this.slot1);
           this.slot2 = null;
           this.slot2$.next(this.slot2);
           this.slot3 = null;
           this.slot3$.next(this.slot3);
           this.slot4 = null;
           this.slot4$.next(this.slot4);
           this.score = 0;
           this.score$.next(this.score);
           this.handFull$.next(false);
         }

         calculateScore() {
           this.score = 0;
         }

         addCard(card: Card) {
           if (this.slot1 == null) {
             this.slot1 = card;
             this.slot1$.next(this.slot1);
           } else if (this.slot2 == null) {
             this.slot2 = card;
             this.slot2$.next(this.slot2);
           } else if (this.slot3 == null) {
             this.slot3 = card;
             this.slot3$.next(this.slot3);
           } else if (this.slot4 == null) {
             this.slot4 = card;
             this.slot4$.next(this.slot4);
             this.handFull$.next(true);
           }
         }
       }
