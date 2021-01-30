// 169. Majority Element
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

const majorityElement = (nums) => {
  let map = {};

  for (let num of nums) {
    map[num] ? map[num]++ : (map[num] = 1);
  }

  for (let key in map) {
    if (map[key] > nums.length / 2) return +key;
  }
};
