// https://www.codewars.com/kata/55a12bb8f0fac1ba340000aa

const FindFunction = (arr1, arr2) =>
  arr2.filter((el) => arr1.find((e) => typeof e === 'function')(el));

console.log(FindFunction([(a) => a % 2 == 0, 9, 3, 1, 0], [1, 2, 3, 4]));
