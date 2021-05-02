const hands = [
  {
    highCard: 'A',
    lowCard: 'A',
    suited: false,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'K',
    suited: true,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'K',
    suited: false,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'Q',
    suited: true,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'Q',
    suited: false,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'J',
    suited: true,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'J',
    suited: false,
    class: 3
  },
  {
    highCard: 'A',
    lowCard: 'T',
    suited: true,
    class: 4
  },
  {
    highCard: 'A',
    lowCard: 'T',
    suited: false,
    class: 2
  },
  {
    highCard: 'A',
    lowCard: '9',
    suited: true,
    class: 2
  },
  {
    highCard: 'A',
    lowCard: '9',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '8',
    suited: true,
    class: 2
  },
  {
    highCard: 'A',
    lowCard: '8',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '7',
    suited: true,
    class: 2
  },
  {
    highCard: 'A',
    lowCard: '7',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '6',
    suited: true,
    class: 2
  },
  {
    highCard: 'A',
    lowCard: '6',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '5',
    suited: true,
    class: 3
  },
  {
    highCard: 'A',
    lowCard: '5',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '4',
    suited: true,
    class: 3
  },
  {
    highCard: 'A',
    lowCard: '4',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '3',
    suited: true,
    class: 3
  },
  {
    highCard: 'A',
    lowCard: '3',
    suited: false,
    class: 1
  },
  {
    highCard: 'A',
    lowCard: '2',
    suited: true,
    class: 3
  },
  {
    highCard: 'A',
    lowCard: '2',
    suited: false,
    class: 1
  },
  // KING
  {
    highCard: 'K',
    lowCard: 'K',
    suited: false,
    class: 4
  },
  {
    highCard: 'K',
    lowCard: 'Q',
    suited: true,
    class: 4
  },
  {
    highCard: 'K',
    lowCard: 'Q',
    suited: false,
    class: 3
  },
  {
    highCard: 'K',
    lowCard: 'J',
    suited: true,
    class: 4
  },
  {
    highCard: 'K',
    lowCard: 'J',
    suited: false,
    class: 2
  },
  {
    highCard: 'K',
    lowCard: 'T',
    suited: true,
    class: 4
  },
  {
    highCard: 'K',
    lowCard: 'T',
    suited: false,
    class: 2
  },
  {
    highCard: 'K',
    lowCard: '9',
    suited: true,
    class: 2
  },
  {
    highCard: 'K',
    lowCard: '9',
    suited: false,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '8',
    suited: true,
    class: 2
  },
  {
    highCard: 'K',
    lowCard: '8',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '7',
    suited: true,
    class: 2
  },
  {
    highCard: 'K',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '6',
    suited: true,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '5',
    suited: true,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '4',
    suited: true,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '3',
    suited: true,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: 'K',
    lowCard: '2',
    suited: true,
    class: 1
  },
  {
    highCard: 'K',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // QUEEN
  {
    highCard: 'Q',
    lowCard: 'Q',
    suited: false,
    class: 4
  },
  {
    highCard: 'Q',
    lowCard: 'J',
    suited: true,
    class: 4
  },
  {
    highCard: 'Q',
    lowCard: 'J',
    suited: false,
    class: 2
  },
  {
    highCard: 'Q',
    lowCard: 'T',
    suited: true,
    class: 4
  },
  {
    highCard: 'Q',
    lowCard: 'T',
    suited: false,
    class: 2
  },
  {
    highCard: 'Q',
    lowCard: '9',
    suited: true,
    class: 2
  },
  {
    highCard: 'Q',
    lowCard: '9',
    suited: false,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '8',
    suited: true,
    class: 2
  },
  {
    highCard: 'Q',
    lowCard: '8',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '7',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '6',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '5',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '4',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '3',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: 'Q',
    lowCard: '2',
    suited: true,
    class: 1
  },
  {
    highCard: 'Q',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // JACK
  {
    highCard: 'J',
    lowCard: 'J',
    suited: false,
    class: 4
  },
  {
    highCard: 'J',
    lowCard: 'T',
    suited: true,
    class: 4
  },
  {
    highCard: 'J',
    lowCard: 'T',
    suited: false,
    class: 2
  },
  {
    highCard: 'J',
    lowCard: '9',
    suited: true,
    class: 2
  },
  {
    highCard: 'J',
    lowCard: '9',
    suited: false,
    class: 1
  },
  {
    highCard: 'J',
    lowCard: '8',
    suited: true,
    class: 2
  },
  {
    highCard: 'J',
    lowCard: '8',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '7',
    suited: true,
    class: 1
  },
  {
    highCard: 'J',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '6',
    suited: true,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '5',
    suited: true,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '4',
    suited: true,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '3',
    suited: true,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: 'J',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // TEN
  {
    highCard: 'T',
    lowCard: 'T',
    suited: false,
    class: 4
  },
  {
    highCard: 'T',
    lowCard: '9',
    suited: true,
    class: 3
  },
  {
    highCard: 'T',
    lowCard: '9',
    suited: false,
    class: 1
  },
  {
    highCard: 'T',
    lowCard: '8',
    suited: true,
    class: 2
  },
  {
    highCard: 'T',
    lowCard: '8',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '7',
    suited: true,
    class: 1
  },
  {
    highCard: 'T',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '6',
    suited: true,
    class: 1
  },
  {
    highCard: 'T',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '5',
    suited: true,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '4',
    suited: true,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '3',
    suited: true,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: 'T',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // NINE
  {
    highCard: '9',
    lowCard: '9',
    suited: false,
    class: 4
  },
  {
    highCard: '9',
    lowCard: '8',
    suited: true,
    class: 3
  },
  {
    highCard: '9',
    lowCard: '8',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '7',
    suited: true,
    class: 2
  },
  {
    highCard: '9',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '6',
    suited: true,
    class: 1
  },
  {
    highCard: '9',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '5',
    suited: true,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '4',
    suited: true,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '3',
    suited: true,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: '9',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // EIGHT
  {
    highCard: '8',
    lowCard: '8',
    suited: false,
    class: 4
  },
  {
    highCard: '8',
    lowCard: '7',
    suited: true,
    class: 3
  },
  {
    highCard: '8',
    lowCard: '7',
    suited: false,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '6',
    suited: true,
    class: 2
  },
  {
    highCard: '8',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '5',
    suited: true,
    class: 1
  },
  {
    highCard: '8',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '4',
    suited: true,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '3',
    suited: true,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: '8',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // SEVEN
  {
    highCard: '7',
    lowCard: '7',
    suited: false,
    class: 4
  },
  {
    highCard: '7',
    lowCard: '6',
    suited: true,
    class: 3
  },
  {
    highCard: '7',
    lowCard: '6',
    suited: false,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '5',
    suited: true,
    class: 2
  },
  {
    highCard: '7',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '4',
    suited: true,
    class: 1
  },
  {
    highCard: '7',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '3',
    suited: true,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: '7',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // SIX
  {
    highCard: '6',
    lowCard: '6',
    suited: false,
    class: 4
  },
  {
    highCard: '6',
    lowCard: '5',
    suited: true,
    class: 2
  },
  {
    highCard: '6',
    lowCard: '5',
    suited: false,
    class: 0
  },
  {
    highCard: '6',
    lowCard: '4',
    suited: true,
    class: 2
  },
  {
    highCard: '6',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: '6',
    lowCard: '3',
    suited: true,
    class: 1
  },
  {
    highCard: '6',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '6',
    lowCard: '2',
    suited: true,
    class: 0
  },
  {
    highCard: '6',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // FIVE
  {
    highCard: '5',
    lowCard: '5',
    suited: false,
    class: 4
  },
  {
    highCard: '5',
    lowCard: '4',
    suited: true,
    class: 2
  },
  {
    highCard: '5',
    lowCard: '4',
    suited: false,
    class: 0
  },
  {
    highCard: '5',
    lowCard: '3',
    suited: true,
    class: 2
  },
  {
    highCard: '5',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '5',
    lowCard: '2',
    suited: true,
    class: 1
  },
  {
    highCard: '5',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // FOUR
  {
    highCard: '4',
    lowCard: '4',
    suited: false,
    class: 3
  },
  {
    highCard: '4',
    lowCard: '3',
    suited: true,
    class: 2
  },
  {
    highCard: '4',
    lowCard: '3',
    suited: false,
    class: 0
  },
  {
    highCard: '4',
    lowCard: '2',
    suited: true,
    class: 1
  },
  {
    highCard: '4',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // THERE
  {
    highCard: '3',
    lowCard: '3',
    suited: false,
    class: 2
  },
  {
    highCard: '3',
    lowCard: '2',
    suited: true,
    class: 1
  },
  {
    highCard: '3',
    lowCard: '2',
    suited: false,
    class: 0
  },
  // TWO
  {
    highCard: '2',
    lowCard: '2',
    suited: false,
    class: 2
  },
]

export default hands

/*
{
    highCard: 'A',
    lowCard: 'Q',
    suited: true,
    pair: false
  },
*/