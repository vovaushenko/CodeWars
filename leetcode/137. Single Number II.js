// 137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

const singleNumber = (nums) => {
  let map = {};
  var singleNum = 0;
  for (char of nums) {
    map[char] ? map[char]++ : (map[char] = 1);
  }
  for (let key in map) {
    if (map[key] === 1) singleNum = key;
  }
  return +singleNum;
};
