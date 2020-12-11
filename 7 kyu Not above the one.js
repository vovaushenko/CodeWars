// https://www.codewars.com/kata/5b5097324a317afc740000fe

const lessThanTwo = (a) => a.filter((num) => num < 2);
const greaterThanOneIndecies = (a) =>
  a.map((e, i) => (e > 1 ? i : undefined)).filter((x) => x || x === 0);

const binaryCleaner = (arr) => [lessThanTwo(arr), greaterThanOneIndecies(arr)];