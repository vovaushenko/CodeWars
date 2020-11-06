// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

const removeDuplicateWords = (str) => {
  let arr = str.split(" ");

  let map = {};

  for (let word of arr) {
    map[word] ? map[word]++ : (map[word] = 1);
  }

  let solution = "";
  for (let key in map) {
    solution += key + " ";
  }

  return solution.trim();
};
