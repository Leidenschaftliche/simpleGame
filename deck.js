//A deck of cards to use for the game
const cards = [
  {
    name: "Ace of Clubs",
    value: 11,
    url: "assets/Ace-clubs.png",
  },
  {
    name: "Ace of Diamonds",
    value: 11,
    url: "assets/Ace-diamonds.png",
  },
  {
    name: "Ace of Hearts",
    value: 11,
    url: "assets/Ace-hearts.png",
  },
  {
    name: "Ace of Spades",
    value: 11,
    url: "assets/Ace-spades.png",
  },
  {
    name: "Two of Clubs",
    value: 2,
    url: "assets/Two-clubs.png",
  },
  {
    name: "Two of Diamonds",
    value: 2,
    url: "assets/Two-diamonds.png",
  },
  {
    name: "Two of Hearts",
    value: 2,
    url: "assets/Two-hearts.png",
  },
  {
    name: "Two of Spades",
    value: 2,
    url: "assets/Two-spades.png",
  },
  {
    name: "Three of Clubs",
    value: 3,
    url: "assets/Three-clubs.png",
  },
  {
    name: "Three of Diamonds",
    value: 3,
    url: "assets/Three-diamonds.png",
  },
  {
    name: "Three of Hearts",
    value: 3,
    url: "assets/Three-hearts.png",
  },
  {
    name: "Three of Spades",
    value: 3,
    url: "assets/Three-spades.png",
  },
  {
    name: "Four of Clubs",
    value: 4,
    url: "assets/Four-clubs.png",
  },
  {
    name: "Four of Diamonds",
    value: 4,
    url: "assets/Four-diamonds.png",
  },
  {
    name: "Four of Hearts",
    value: 4,
    url: "assets/Four-hearts.png",
  },
  {
    name: "Four of Spades",
    value: 4,
    url: "assets/Four-spades.png",
  },
  {
    name: "Five of Clubs",
    value: 5,
    url: "assets/Five-clubs.png",
  },
  {
    name: "Five of Diamonds",
    value: 5,
    url: "assets/Five-diamonds.png",
  },
  {
    name: "Five of Hearts",
    value: 5,
    url: "assets/Five-hearts.png",
  },
  {
    name: "Five of Spades",
    value: 5,
    url: "assets/Five-spades.png",
  },
  {
    name: "Six of Clubs",
    value: 6,
    url: "assets/Six-clubs.png",
  },
  {
    name: "Six of Diamonds",
    value: 6,
    url: "assets/Six-diamonds.png",
  },
  {
    name: "Six of Hearts",
    value: 6,
    url: "assets/Six-hearts.png",
  },
  {
    name: "Six of Spades",
    value: 6,
    url: "assets/Six-spades.png",
  },
  {
    name: "Seven of Clubs",
    value: 7,
    url: "assets/Seven-clubs.png",
  },
  {
    name: "Seven of Diamonds",
    value: 7,
    url: "assets/Seven-diamonds.png",
  },
  {
    name: "Seven of Hearts",
    value: 7,
    url: "assets/Seven-hearts.png",
  },
  {
    name: "Seven of Spades",
    value: 7,
    url: "assets/Seven-spades.png",
  },
  {
    name: "Eight of Clubs",
    value: 8,
    url: "assets/Eight-clubs.png",
  },
  {
    name: "Eight of Diamonds",
    value: 8,
    url: "assets/Eight-diamonds.png",
  },
  {
    name: "Eight of Hearts",
    value: 8,
    url: "assets/Eight-hearts.png",
  },
  {
    name: "Eight of Spades",
    value: 8,
    url: "assets/Eight-spades.png",
  },
  {
    name: "Nine of Clubs",
    value: 9,
    url: "assets/Nine-clubs.png",
  },
  {
    name: "Nine of Diamonds",
    value: 9,
    url: "assets/Nine-diamonds.png",
  },
  {
    name: "Nine of Hearts",
    value: 9,
    url: "assets/Nine-hearts.png",
  },
  {
    name: "Nine of Spades",
    value: 9,
    url: "assets/Nine-spades.png",
  },
  {
    name: "Ten of Clubs",
    value: 10,
    url: "assets/Ten-clubs.png",
  },
  {
    name: "Ten of Diamonds",
    value: 10,
    url: "assets/Ten-diamonds.png",
  },
  {
    name: "Ten of Hearts",
    value: 10,
    url: "assets/Ten-hearts.png",
  },
  {
    name: "Ten of Spades",
    value: 10,
    url: "assets/Ten-spades.png",
  },
  {
    name: "Jack of Clubs",
    value: 10,
    url: "assets/Jack-clubs.png",
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    url: "assets/Jack-diamonds.png",
  },
  {
    name: "Jack of Hearts",
    value: 10,
    url: "assets/Jack-hearts.png",
  },
  {
    name: "Jack of Spades",
    value: 10,
    url: "assets/Jack-spades.png",
  },
  {
    name: "Queen of Clubs",
    value: 10,
    url: "assets/Queen-clubs.png",
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    url: "assets/Queen-diamonds.png",
  },
  {
    name: "Queen of Hearts",
    value: 10,
    url: "assets/Queen-hearts.png",
  },
  {
    name: "Queen of Spades",
    value: 10,
    url: "assets/Queen-spades.png",
  },
  {
    name: "King of Clubs",
    value: 10,
    url: "assets/King-clubs.png",
  },
  {
    name: "King of Diamonds",
    value: 10,
    url: "assets/King-diamonds.png",
  },
  {
    name: "King of Hearts",
    value: 10,
    url: "assets/King-hearts.png",
  },
  {
    name: "King of Spades",
    value: 10,
    url: "assets/King-spades.png",
  },
];
