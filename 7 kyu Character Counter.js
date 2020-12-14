// https://www.codewars.com/kata/56786a687e9a88d1cf00005d

const validateWord = (s) => {
  let map = {};
  for (let char of s) {
    map[char.toLowerCase()] ? map[char.toLowerCase()]++ : (map[char.toLowerCase()] = 1);
  }
  const frequencies = Object.values(map);
  return frequencies.reduce((a, b) => a + b) / frequencies.length !== frequencies[0] ? false : true;
};