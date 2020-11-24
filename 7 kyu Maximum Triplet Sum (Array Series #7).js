// https://www.codewars.com/kata/5aa1bcda373c2eb596000112

const maxTriSum = (arr) =>
  [...new Set(arr)]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b);