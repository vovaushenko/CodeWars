// 1342. Number of Steps to Reduce a Number to Zero
// Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = (num: number): number => {
  let counter = 0;

  while (num) {
    counter++;
    num % 2 === 0 ? (num /= 2) : (num -= 1);
  }

  return counter;
};
