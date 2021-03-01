// 509. Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.

const findMinFibonacciNumbers = (k: number): number => {
  const fibs = [0, 1];

  while (fibs[fibs.length - 1] < k) {
    fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
  }
  let counter = 0;
  let tempSum = k;

  for (let i = fibs.length - 1; i >= 0; i--) {
    if (tempSum - fibs[i] >= 0) {
      counter++;
      tempSum -= fibs[i];
    }

    if (tempSum === 0) return counter;
  }

  return counter;
};
