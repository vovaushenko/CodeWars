// https://www.codewars.com/kata/57d165ad95497ea150000020
const isValidPair = (a, b) => a + b === '8B' || a + b === 'B8';

const bears = (x, s) => {
  let i = 0;
  let j = 1;
  let pairs = [];

  while (j < s.length) {
    if (isValidPair(s[i], s[j])) {
      pairs.push(s[i] + s[j]);
      i += 2;
      j += 2;
    } else {
      i += 1;
      j += 1;
    }
  }

  return [pairs.join(''), pairs.length >= x];
};
