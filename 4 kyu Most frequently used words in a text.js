// https://www.codewars.com/kata/51e056fe544cf36c410000fb

const topThreeWords = (text) => {
  let words = text
    .toLowerCase()
    .replace(/[^\w\s]|_/g, '')
    .split(' ')
    .filter((word) => word);

  let map = {};

  for (let word of words) {
    map[word] ? map[word]++ : (map[word] = 1);
  }

  let frequencies = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((pair) => pair[0]);
  return frequencies;
};
