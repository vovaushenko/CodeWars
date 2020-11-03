// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

const longest = (a, b) => {
  let sum = a + b;

  let map = {};
  let arr = [];
  for (let char of sum) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  for (key in map) {
    arr.push(key);
  }
  return arr.sort().join("");
};
