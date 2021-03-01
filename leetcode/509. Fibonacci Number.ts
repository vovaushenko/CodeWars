// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

const fib = (n: number): number => {
  const memo: { [key: string]: number } = {
    0: 0,
    1: 1,
  };
  let counter = 2;
  while (counter <= n) {
    memo[counter] = memo[counter - 2] + memo[counter - 1];
    counter++;
  }

  return memo[n];
};

const fib = (n: number): number => {
  const memo = [0, 1];

  while (memo.length <= n) {
    memo.push(memo[memo.length - 2] + memo[memo.length - 1]);
  }

  if (n < 0) {
    return n % 2 === 0 ? -memo[n] : memo[n];
  }

  return memo[n];
};

console.log(tabulatedFibs(4));
