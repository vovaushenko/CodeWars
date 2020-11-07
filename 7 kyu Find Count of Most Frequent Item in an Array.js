// https://www.codewars.com/kata/56582133c932d8239900002e

const mostFrequentItemCount = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let map = {};
  let arrayOfFrequencies = [];
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    arrayOfFrequencies.push(map[key]);
  }

  return Math.max(...arrayOfFrequencies);
};
