// 507. Perfect Number
// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.

// Given an integer n, return true if n is a perfect number, otherwise return false.

const checkPerfectNumber = (num: number): boolean => {
  let sumOfDivisors = 0;

  for (let i = 0; i <= num / 2; i++) {
    if (num % i === 0) sumOfDivisors += i;
  }

  return sumOfDivisors === num;
};
