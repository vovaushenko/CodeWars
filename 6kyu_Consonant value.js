//  https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

function solve(s) {
  const alphabet = ' abcdefghijklmnopqrstuvwxyz';

  let sum = 0;
  let tempMax = 0;
  let arrOfConsonantValues = [];
  for (i = 0; i < s.length; i++) {
    if (
      s[i] != 'a' &&
      s[i] != 'e' &&
      s[i] != 'i' &&
      s[i] != 'o' &&
      s[i] != 'u'
    ) {
      sum += alphabet.indexOf(s[i]);
    }

    if (
      s[i] === 'a' ||
      s[i] === 'e' ||
      s[i] === 'i' ||
      s[i] === 'o' ||
      s[i] === 'u'
    ) {
      tempMax = sum;
      arrOfConsonantValues.push(tempMax);
      sum = 0;
    }
  }

  return Math.max(...arrOfConsonantValues);
}
