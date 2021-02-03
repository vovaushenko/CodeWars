// https://www.codewars.com/kata/58a66c208b88b2de660000c3

const missingValues = (arr) =>
  Object.entries(arr.reduce((hash, c) => ((hash[c] = hash[c] + 1 || 1), hash), {}))
    .filter((pair) => pair[1] < 3)
    .reduce((product, pair) => (pair[1] === 1 ? product * pair[0] ** 2 : product * pair[0]), 1);

console.log(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]));
