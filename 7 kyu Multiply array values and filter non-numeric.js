// https://www.codewars.com/kata/55ed875819ae85ca8b00005c

const multiplyAndFilter = (array, multiplier) =>
  array.filter((a) => typeof a === 'number').map((num) => num * multiplier);