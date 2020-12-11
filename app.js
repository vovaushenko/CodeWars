// https://www.codewars.com/kata/55ed875819ae85ca8b00005c

const multiplyAndFilter = (array, multiplier) =>
  array.filter((a) => typeof a === 'number').map((num) => num * multiplier);

console.log(
  multiplyAndFilter(
    [1, null, function () {}, 2.5, 'string', 10, undefined, {}, []],
    3
  )
);
