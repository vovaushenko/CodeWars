// 1390. Four Divisors
// Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors.

// If there is no such integer in the array, return 0.

function sumFourDivisors(nums: number[]): number {
  let sum = 0;
  for (let num of nums) {
    sum += fourDivisorsSum(num);
  }

  return sum;
}

const fourDivisorsSum = (num: number): number => {
  const divisors = [num];
  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) divisors.push(i);
    if (divisors.length > 4) return 0;
  }

  if (divisors.length === 4) {
    return divisors.reduce((a, b) => a + b, 0);
  } else {
    return 0;
  }
};
