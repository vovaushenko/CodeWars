// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Follow up: Do not use any built-in library function such as sqrt.

const isPerfectSquare = (num: number): boolean => {
  let tempNum = 0;
  while (tempNum ** 2 < num) {
    tempNum++;
  }
  return tempNum ** 2 === num;
};
