export enum Suit {
  Heart = 1,
  Diamond = 2,
  Club = 3,
  Spade = 4
}

export class Card {
  constructor(
    public id: number,
    public suit: Suit,
    public sequence: number,
    public value: string,
    public count: number,
    public sort: number
  ) {}

  get color() {
    return this.suit === Suit.Heart || this.suit === Suit.Diamond ? 'red' : 'black';
  }

  get suitInitial() {
    switch (this.suit) {
      case Suit.Club:
        return '♣';
      case Suit.Diamond:
        return '♦';
      case Suit.Heart:
        return '♥';
      case Suit.Spade:
        return '♠';
    }
  }
}
