// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

const zipWith = (f, a1, a2) =>
  Array.from({ length: Math.min(a1.length, a2.length) }, (_, id) => f(a1[id], a2[id]));
