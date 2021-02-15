// 1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

const sumOfUnique = (nums: number[]): number => {
  let sum = 0;
  const map: { [key: string]: number } = {};
  for (let num of nums) map[num] ? map[num]++ : (map[num] = 1);

  for (let key in map) {
    if (map[key] === 1) sum += +key;
  }

  return sum;
};
