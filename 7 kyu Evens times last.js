// https://www.codewars.com/kata/5a1a9e5032b8b98477000004

const evenLast = (nums) =>
  nums.length
    ? nums.reduce((sum, n, id) => (!(id % 2) ? sum + n : sum + 0), 0) * nums[nums.length - 1]
    : 0;
