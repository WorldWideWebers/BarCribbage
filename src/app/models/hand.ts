import {Card} from './card';
import {BehaviorSubject} from 'rxjs';

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
           this.scoreHand(undefined);
         }

        scoreHand(turnCard: Card) {
           const cards = [this.slot1, this.slot2, this.slot3, this.slot4];
           if (turnCard) { cards.push(turnCard); }

           //  go through and find four of a kind
           this.score = this.findPairs(cards);
           this.score$.next(this.score);
        }

          findPairs(cards: Card[]): number {
            let total = 0;
            if (cards.filter(c => c && c.id).length >= 1) {
              for (let ct = 1; ct <= cards.filter(c => c && c.id).length; ct++) {
                const ctCard = cards[ct];
                const ctOn = cards.splice(ct);
                if (ctOn.filter(c => c && c.id).length > 0) {
                  for (let ct2 = 1; ct2 < ctOn.filter(c => c && c.id).length; ct2++) {
                    const ct2Card = ctOn[ct2];
                    if (ctCard.sequence === ct2Card.sequence) {
                      total += 2;
                    }
                    const ct2On = ctOn.splice(ct2);
                    if (ct2On.filter(c => c && c.id).length > 0) {
                      for (let ct3 = 1; ct3 < ct2On.filter(c => c && c.id).length; ct3++) {
                        const ct3Card = ct2On[ct3];
                        if (ctCard.sequence === ct3Card.sequence) {
                          total += 2;
                        }
                        const ct3On = ct2On.splice(ct3);
                        if (ct3On.filter(c => c && c.id).length > 0) {
                          for (let ct4 = 1; ct4 < ct3On.filter(c => c && c.id).length; ct4++) {
                            const ct4Card = ct3On[ct4];
                            if (ctCard.sequence === ct4Card.sequence) {
                              total += 2;
                            }
                            const ct4On = ct3On.splice(ct4);
                            if (ct4On.filter(c => c && c.id).length > 0) {
                              const ct5Card = ct4On[5];
                              if (ctCard.sequence === ct5Card.sequence) {
                                total += 2;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            return total;
          }
        }
