// 1281. Subtract the Product and Sum of Digits of an Integer
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSumz = (n: number): number =>
  [...(n + '')].reduce((prod, num) => prod * +num, 1) -
  [...(n + '')].reduce((prod, num) => prod + +num, 0);
