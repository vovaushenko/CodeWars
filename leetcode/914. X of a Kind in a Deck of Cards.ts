// 914. X of a Kind in a Deck of Cards
// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.

const hasGroupsSizeX = (deck: number[]): boolean => {
  const map: { [key: string]: number } = {};
  for (let card of deck) {
    map[card] ? map[card]++ : (map[card] = 1);
  }

  const frequencies = Object.values(map);
  let fr = frequencies[0];

  for (let i = 1; i < frequencies.length; i++) {
    fr = gcd(fr, frequencies[i]);
    if (fr < 2) return false;
  }

  return fr >= 2;
};

const gcd = (x: number, y: number): number => (x === 0 ? y : gcd(y % x, x));
