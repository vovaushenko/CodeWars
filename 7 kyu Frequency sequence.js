// https://www.codewars.com/kata/585a033e3a36cdc50a00011c

const freqSeq = (str, char) => {
  let map = {};
  for (let character of str) {
    map[character] ? map[character]++ : (map[character] = 1);
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(map[str[i]]);
  }
  return result.join(char);
};