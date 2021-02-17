// 1539. Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

// Find the kth positive integer that is missing from this array.

const findKthPositive = (arr: number[], k: number): number => {
  let counter = 0;
  let number = 1;
  while (counter !== k) {
    if (!arr.includes(number)) counter++;
    number++;
  }
  return number - 1;
};
