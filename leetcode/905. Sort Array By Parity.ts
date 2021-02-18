// 905. Sort Array By Parity
// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

const sortArrayByParity = (nums: number[]): number[] => {
  const odd = nums.filter((num) => num % 2 !== 0);
  const even = nums.filter((num) => num % 2 === 0);

  return [...even, ...odd];
};
