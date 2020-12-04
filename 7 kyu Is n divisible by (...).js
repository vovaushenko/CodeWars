// https://www.codewars.com/kata/558ee8415872565824000007

const isDivisible = (...nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[0] % nums[i] !== 0) return false;
  }
  return true;
};
