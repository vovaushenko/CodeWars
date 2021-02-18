// 922. Sort Array By Parity II
// Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

// You may return any answer array that satisfies this condition.

const sortArrayByParityII = (nums: number[]): number[] => {
  const odd = nums.filter((num) => num % 2 !== 0);
  const even = nums.filter((num) => num % 2 === 0);

  const res = [];
  for (let i = 0; i < even.length; i++) {
    res.push(even[i]);
    res.push(odd[i]);
  }

  return res;
};
