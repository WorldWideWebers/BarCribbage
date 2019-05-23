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
        public sort: number
    ) { }

    get suitInitial() {
        switch (this.suit) {
            case Suit.Club:
                return 'C';
                break;
            case Suit.Diamond:
                return 'D';
                break;
            case Suit.Heart:
                return 'H';
                break;
            case Suit.Spade:
                return 'S';
                break;
        }
    }
}
