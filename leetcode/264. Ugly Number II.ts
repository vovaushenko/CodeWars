// 264. Ugly Number II
// Write a program to find the n-th ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

const nthUglyNumber = (n: number): number => {
  let i = 0,
    j = 0,
    k = 0;
  let uglyNumbers = [1];
  let min;

  while (uglyNumbers.length < n) {
    let tempTwo = 2 * uglyNumbers[i];
    let tempThree = 3 * uglyNumbers[j];
    let tempFive = 5 * uglyNumbers[k];

    min = Math.min(tempTwo, tempThree, tempFive);

    uglyNumbers.push(min);

    if (min === tempTwo) i++;
    if (min === tempThree) j++;
    if (min === tempFive) k++;
  }

  return uglyNumbers[uglyNumbers.length - 1];
};
