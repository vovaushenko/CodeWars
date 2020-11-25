// https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c

const transform = (s) => {
  let map = {};

  for (let char of s) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  let res = '';

  for (let key in map) {
    if (map[key] > 1) {
      res += key + map[key];
    } else {
      res += key;
    }
  }
  return res;
};
