// https://www.codewars.com/kata/586ec0b8d098206cce001141

const inverseSlice = (nums, a, b) => nums.filter((_, id) => id < a || id >= b);

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));
