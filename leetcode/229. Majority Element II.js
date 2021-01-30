// 229. Majority Element II
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

const majorityElement = (arr) => {
  let map = {};
  for (let num of arr) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  let majorityNums = [];
  for (let key in map) {
    if (map[key] > arr.length / 3) majorityNums.push(+key);
  }

  return majorityNums;
};
