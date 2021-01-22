// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

const fib = (n, memo = [0, 1]) => {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
};

console.log(fib(100));

// Runtime: 72 ms, faster than 93.67% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.4 MB, less than 57.07% of JavaScript online submissions for Fibonacci Number.
