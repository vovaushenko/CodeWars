// https://www.codewars.com/kata/53670c5867e9f2222f000225

const isOrthogonal = (u, v) =>
  u.map((a, id) => a * v[id]).reduce((a, b) => a + b, 0) === 0 ? true : false;

console.log(isOrthogonal([1, -2], [2, 1]));
