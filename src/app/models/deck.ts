import { Card, Suit } from './card';

export const INITIAL_DECK = [
    new Card(1, Suit.Heart, 1, 'A', 1),
    new Card(2, Suit.Heart, 2, '2', 2),
    new Card(3, Suit.Heart, 3, '3', 3),
    new Card(4, Suit.Heart, 4, '4', 4),
    new Card(5, Suit.Heart, 5, '5', 5),
    new Card(6, Suit.Heart, 6, '6', 6),
    new Card(7, Suit.Heart, 7, '7', 7),
    new Card(8, Suit.Heart, 8, '8', 8),
    new Card(9, Suit.Heart, 9, '9', 9),
    new Card(10, Suit.Heart, 10, '10', 10),
    new Card(11, Suit.Heart, 11, 'J', 11),
    new Card(12, Suit.Heart, 12, 'Q', 12),
    new Card(13, Suit.Heart, 13, 'K', 13),
    new Card(14, Suit.Diamond, 1, 'A', 14),
    new Card(15, Suit.Diamond, 2, '2', 15),
    new Card(16, Suit.Diamond, 3, '3', 16),
    new Card(17, Suit.Diamond, 4, '4', 17),
    new Card(18, Suit.Diamond, 5, '5', 18),
    new Card(19, Suit.Diamond, 6, '6', 19),
    new Card(20, Suit.Diamond, 7, '7', 20),
    new Card(21, Suit.Diamond, 8, '8', 21),
    new Card(22, Suit.Diamond, 9, '9', 22),
    new Card(23, Suit.Diamond, 10, '10', 23),
    new Card(24, Suit.Diamond, 11, 'J', 24),
    new Card(25, Suit.Diamond, 12, 'Q', 25),
    new Card(26, Suit.Diamond, 13, 'K', 26),
    new Card(27, Suit.Club, 1, 'A', 27),
    new Card(28, Suit.Club, 2, '2', 28),
    new Card(29, Suit.Club, 3, '3', 29),
    new Card(30, Suit.Club, 4, '4', 30),
    new Card(31, Suit.Club, 5, '5', 31),
    new Card(32, Suit.Club, 6, '6', 32),
    new Card(33, Suit.Club, 7, '7', 33),
    new Card(34, Suit.Club, 8, '8', 34),
    new Card(35, Suit.Club, 9, '9', 35),
    new Card(36, Suit.Club, 10, '10', 36),
    new Card(37, Suit.Club, 11, 'J', 37),
    new Card(38, Suit.Club, 12, 'Q', 38),
    new Card(39, Suit.Club, 13, 'K', 39),
    new Card(40, Suit.Spade, 1, 'A', 40),
    new Card(41, Suit.Spade, 2, '2', 41),
    new Card(42, Suit.Spade, 3, '3', 42),
    new Card(43, Suit.Spade, 4, '4', 43),
    new Card(44, Suit.Spade, 5, '5', 44),
    new Card(45, Suit.Spade, 6, '6', 45),
    new Card(46, Suit.Spade, 7, '7', 46),
    new Card(47, Suit.Spade, 8, '8', 47),
    new Card(48, Suit.Spade, 9, '9', 48),
    new Card(49, Suit.Spade, 10, '10', 49),
    new Card(50, Suit.Spade, 11, 'J', 50),
    new Card(51, Suit.Spade, 12, 'Q', 51),
    new Card(52, Suit.Spade, 13, 'K', 52)
];

export class Deck {
    originalCards: Card[] = INITIAL_DECK;
    shuffledCards: Card[] = this.originalCards;

    constructor() {
        this.shuffleCards();
    }

    shuffleCards() {
        this.shuffledCards.forEach(card => (card.sort = this.randomIntFromInterval(1, 1000)));
        this.shuffledCards = this.shuffledCards.sort((a: Card, b: Card) => a.sort - b.sort);
    }

    randomIntFromInterval(
        min: number,
        max: number // min and max included
    ) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
