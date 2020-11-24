// https://www.codewars.com/kata/5a434a9dc5e284724f000011

const replaceCommon = (str, letter) => {
  let withoutWhiteSpaces = str.replace(/ /g, '');

  let map = {};
  for (let char of withoutWhiteSpaces) {
    map[char] ? map[char]++ : (map[char] = 1);
  }

  let biggestFrequency = 0;
  for (let key in map) {
    biggestFrequency = Math.max(biggestFrequency, map[key]);
  }
  const mostFrequentChar = Object.keys(map).find(
    (key) => map[key] === biggestFrequency
  );

  let result = '';

  for (let char of str) {
    char === mostFrequentChar ? (result += letter) : (result += char);
  }
  return result;
};